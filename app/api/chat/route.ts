import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { PrismaClient } from '@prisma/client';
import { Message, Thread } from '@/app/types/chat';

const openai = new OpenAI();
const prisma = new PrismaClient();

async function getOrCreateThread(sessionId: string): Promise<Thread> {
  const existingThread = await prisma.thread.findUnique({
    where: { sessionId }
  });

  if (existingThread) {
    return existingThread;
  }

  /*const assistant = await openai.beta.assistants.create({
    name: "Assistente de E-commerce",
    instructions: `Você é um assistente especialista em e-commerce. Ajude os usuários a criar e gerenciar produtos, fornecendo respostas claras e objetivas.

    Você precisa seguir este roteiro:

    Se os usuários quiserem criar o produto manualmente:
    - Pergunte se é masculino, feminino ou indefinido
    - Pergunte a idade da persona
    - Mostre 5 nichos sugeridos a partir da persona
    - Peça ao usuário para escolher um nicho
    - Mostre 5 subnichos sugeridos a partir do nicho escolhido
    - Peça ao usuário para escolher um subnicho
    - Crie o produto com as informações fornecidas pelo usuário
    
    Você precisa responder no formato JSON com esses dois tipos:

    {
      "type": "text",
      "text": {
        "value": "your answer here..."
      }
    }

    {
      "type": "options",
      "text": {
        "value": "your question here..."
      },
      "options": {
        "values": [
          "option 1",
          "option 2"
        ]
      }
    }

    Exemplos:
       {
      "type": "options",
      "text": {
        "value": "Seu produto é para homem, mulher ou indefinido?"
      },
      "options": {
        "values": [
          "Homem",
          "Mulher",
          "Indefinido"
        ]
      }
    }
    `,
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-turbo-preview"
  });*/

  const assistant = await openai.beta.assistants.retrieve("asst_qQkbOvXXDXGEkEund3rLVAjZ");

  const openAIThread = await openai.beta.threads.create();
  
  return await prisma.thread.create({
    data: {
      id: openAIThread.id,
      sessionId: sessionId,
      assistantId: assistant.id
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messageContent, sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({
        error: 'Session ID is required',
        message: null
      });
    }

    const thread = await getOrCreateThread(sessionId);

    await prisma.message.create({
      data: {
        sessionId,
        role: 'user',
        content: messageContent,
        threadId: thread.id,
        assistantId: thread.assistantId
      }
    });

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: messageContent
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: thread.assistantId
    });

    let response = null;
    while (!response) {
      const runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

      if (runStatus.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(thread.id);
        const lastMessage = messages.data[0];
        
        const content = lastMessage.content[0];
        if (content.type === 'text') {
          response = JSON.parse(content.text.value);
        } else if (content.type === 'options') {
          response = JSON.parse(JSON.stringify(content.options.values));
        }

        await prisma.message.create({
          data: {
            sessionId,
            role: 'assistant',
            content: JSON.stringify(response),
            threadId: thread.id,
            assistantId: thread.assistantId
          }
        });
      } else if (runStatus.status === 'failed') {
        throw new Error('Assistant run failed');
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json({
      error: 'An error occurred while processing the request.',
      message: null
    });
  } finally {
    await prisma.$disconnect();
  }
}


