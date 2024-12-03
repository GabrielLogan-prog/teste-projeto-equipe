import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('sessionId');
    
    if (!sessionId) {
      return NextResponse.json({
        messages: [],
        error: 'Session ID is required'
      });
    }

    const chatHistory = await prisma.Message.findMany({
      where: {
        sessionId: sessionId
      },
      orderBy: {
        createdAt: 'asc'
      },
      select: {
        role: true,
        content: true,
        createdAt: true,
        threadId: true,
        assistantId: true
      }
    });

    const messages = chatHistory.map(msg => ({
      role: msg.role as 'user' | 'assistant' | 'system',
      content: msg.content,
      threadId: msg.threadId,
      assistantId: msg.assistantId
    }));

    return NextResponse.json({
      messages: messages
    });
    
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return NextResponse.json({
      messages: [],
      error: 'Failed to fetch chat history'
    });
  } finally {
    await prisma.$disconnect();
  }
} 