import { productPrompt } from '@/app/constants/prompts';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const runAssistant = async (prompt: string,assistant_id: string) => {
  return `
  
  `
};

// Armazena as respostas de cada conversa
const conversationResponses = new Map<string, Record<string, string>>();
const conversationSteps = new Map<string, number>();

// Define the chat flow
const chatFlow = [
  {
    id: 1,
    type: 'question',
    variable: 'PROPOSTA',
    message: 'Qual é a proposta do seu produto?',
    value: ''
  },
  {
    id: 2, 
    type: 'question',
    variable: 'OBJETIVO',
    message: 'Qual é o maior objetivo do seu cliente ao comprar seu produto?',
    value: ''
  },
  {
    id: 3,
    type: 'question',
    variable: 'DESCRICAO', 
    message: 'Descreva em poucas palavras como funciona o seu produto:',
    value: '',
  },
  {
    id: 4,
    type: 'generation',
    variable: 'RESULTADO',
    message: 'Gerando resultado com base nas suas respostas...',
    value: '',
  }
];

export async function GET() {
  // Gera um ID único para a nova conversa
  const conversationId = Date.now().toString();
  
  // Inicializa o estado da conversa
  conversationResponses.set(conversationId, {});
  conversationSteps.set(conversationId, 0);
  
  // Retorna o primeiro passo com o ID da conversa
  return NextResponse.json({
    ...chatFlow[0],
    conversationId
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { id, value, conversationId } = body;
  
  if (!conversationId || !conversationResponses.has(conversationId)) {
    return NextResponse.json({ error: 'Conversa inválida' }, { status: 400 });
  }
  
  const currentStep = conversationSteps.get(conversationId) || 0;
  const responses = conversationResponses.get(conversationId) || {};
  
  // Salva a resposta
  responses[chatFlow[currentStep].variable] = value;
  conversationResponses.set(conversationId, responses);
  
  // Avança para o próximo passo
  conversationSteps.set(conversationId, currentStep + 1);
  const nextStep = currentStep + 1;
  
  // Verifica se há mais mensagens
  if (nextStep < chatFlow.length) {
    if (chatFlow[nextStep].type === 'generation') {
      // Gera resultado usando AI
      const result = await generateResult(responses);
      responses['RESULTADO'] = result || '';
      
      // Salva os dados no banco de dados
      await saveProductCreation(responses);
      
      // Limpa os dados da conversa após finalizar
      conversationResponses.delete(conversationId);
      conversationSteps.delete(conversationId);
      
      return NextResponse.json({ 
        complete: true,
        responses
      });
    } else {
      return NextResponse.json({
        ...chatFlow[nextStep],
        conversationId
      });
    }
  } else {
    // Conversa completa
    // Limpa os dados da conversa
    conversationResponses.delete(conversationId);
    conversationSteps.delete(conversationId);
    
    return NextResponse.json({ 
      complete: true,
      responses
    });
  }
}

async function generateResult(responses: Record<string, string>): Promise<string> {
  const prompt = `${productPrompt}
    Seguindo exatamente o modelo de estrutura nos exemplos acima, crie um nome do produto, uma promessa agressiva, um mecanismo e uma oferta irresistível para um produto digital relacionado ao nicho abaixo:

    ${responses['DESCRICAO']}: ${responses['PROPOSTA']} ${responses['OBJETIVO']}

    Na saída você pode criar variações das copies das headlines. O valor do produto também deve ser LOW TICKET, sempre abaixo de R$67,00. Mantenha os títulos do que está sendo pedido. Evite comentário!
`;
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
        { role: 'system', content: productPrompt },
        { role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 10000,
  });

  return response.choices[0].message.content || '';
}

async function saveProductCreation(responses: Record<string, string>) {
  try {
    /*await prisma.productCreation.create({
      data: {
        emailUsuario: 'user@example.com', 
        nomeProduto: responses['PROPOSTA'] || '',
        infoProduto: responses['RESULTADO'] || '', 
        beneficiosProduto: responses['OBJETIVO'] || '',
        objecoesProduto: '',
        prosecontraProduto: '',
        motivosProduto: '',
        perdasProduto: '',
        modulosProduto: '',
        modulo1Produto: '',
        modulo2Produto: '',
        modulo3Produto: '',
        modulo4Produto: '',
        modulo5Produto: '',
        modulo6Produto: '',
        orderbumpProduto: '',
        headlineProduto: '',
        descricaoProduto: responses['DESCRICAO'] || '',
        infoPersona: '',
        caracteristicasPersona: '',
        nichos: '',
        nichoEscolhido: '',
      }
    });*/
  } catch (error) {
    console.error('Error saving product creation:', error);
  }
}
