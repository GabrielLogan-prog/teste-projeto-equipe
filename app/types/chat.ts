export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  threadId?: string;
  assistantId?: string;
  sessionId?: string;
  createdAt?: Date;
}

export interface ChatResponse {
  message: string | null;
  error?: string;
  messages?: Message[];
}

export interface AssistantRun {
  id: string;
  status: 'queued' | 'in_progress' | 'completed' | 'failed';
  assistant_id: string;
  thread_id: string;
}

export interface Thread {
  id: string;
  sessionId: string;
  assistantId: string;
  createdAt: Date;
  updatedAt: Date;
} 