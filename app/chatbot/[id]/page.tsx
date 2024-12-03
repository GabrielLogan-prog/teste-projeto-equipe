'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { ArrowLeft, Share2, Search, Bot, Send, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { v4 as uuidv4 } from 'uuid';

interface Message {
  role: 'user' | 'assistant'
  content: string
  type?: 'text' | 'options'
  options?: string[]
}

interface ChatStep {
  id: number
  type: string
  variable: string
  message: string
  value: string
}

export default function ChatbotPage() {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Como deseja criar seu produto?',
      options: ['Tenho produto', 'Quero criar produto'],
      type: 'options'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState<ChatStep | null>({ 
    id: 1, 
    type: 'initial', 
    variable: 'initial', 
    message: 'Como posso ajudar você hoje?', 
    value: '' 
  })
  const [conversationId, setConversationId] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const processedSteps = useRef(new Set<number>())
  const [sessionId, setSessionId] = useState<string>(Array.isArray(id) ? id[0] : id || '')

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages])


  
  // Initialize session when component mounts
  useEffect(() => {
    if (!id) {
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      loadChatHistory(newSessionId);
    } else {
      loadChatHistory(id as string);
    }
  }, [id]);

  // Update loadChatHistory to use sessionId
  const loadChatHistory = async (sid: string) => {
    try {
      const response = await fetch(`/api/chat/history?sessionId=${sid}`);
      if (!response.ok) throw new Error('Failed to load chat history');
      
      const data = await response.json();
      if (data.messages.length > 0) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  // Update handleSend to include sessionId
  const handleSend = async (selectedOption?: string) => {
    if ((!input.trim() && !selectedOption) || isLoading) return;

    try {
      setIsLoading(true);
      
      const userMessage: Message = { role: 'user', content: selectedOption || input };
      setMessages(prev => [...prev, userMessage]);
      
      setInput('');
      
      setMessages(prev => [...prev, { role: 'assistant', content: 'Digitando...', type: 'text' }]);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messageContent: selectedOption || input,
          sessionId: sessionId 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages.pop(); // Remove typing message
        if (data) {
          return [...newMessages, { 
            role: 'assistant', 
            content: data?.text?.value || 'Escolha uma das opções:',
            //type: 'options',
            options: data?.options?.values ? data?.options?.values : []
          }];
        } else {
          return [...newMessages, { 
            role: 'assistant', 
            content: 'Desculpe, não consegui processar sua mensagem.',
            type: 'text'
          }];
        }
      });

    } catch (error) {
      console.error('Error sending message:', error);
      // Show error message in chat
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages.pop(); // Remove typing message
        return [...newMessages, { 
          role: 'assistant', 
          content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.', 
          type: 'text'
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/95 border-b border-[#74fc05]/20">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[#C4F400]">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png"
              alt="Genius Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold text-base">Genius Ecom</span>
                <span className="text-[#C4F400] text-sm">✓</span>
              </div>
              <span className="text-gray-400 text-xs">
                {isLoading ? (
                  <div className="flex items-center">
                    <span className="mr-1">Digitando</span>
                    <span className="animate-pulse">.</span>
                    <span className="animate-pulse animation-delay-200">.</span>
                    <span className="animate-pulse animation-delay-400">.</span>
                  </div>
                ) : (
                  "Criador de Produtos"
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-[#C4F400]">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-[#C4F400]">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-4 max-h-[90vh] overflow-hidden">
        <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
          <div className="flex flex-col items-center gap-2 mb-4 mt-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#192C18]">
              <Bot className="h-8 w-8 text-[#C4F400]" />
            </div>
            <h1 className="text-white text-xl font-semibold">Dúvidas? Fale conosco</h1>
            <p className="text-gray-400 text-sm">Crie em um passe de mágica ✨</p>
          </div>

          {/* Chat Section */}
          <ScrollArea 
            className="flex-1 w-full mb-4 pr-4" 
            ref={scrollAreaRef}
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarFallback>
                        <Bot className="h-5 w-5 text-[#C4F400]" />
                      </AvatarFallback>
                    </Avatar>
                  )}<div>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[500px] text-sm ${
                      message.role === 'user'
                        ? 'bg-[#C4F400] text-black'
                        : 'bg-[#192C18] text-white'
                    }`}
                  > 
                    <div>
                      <ReactMarkdown
                        className="space-y-2"
                        components={{
                          p: ({node, ...props}) => (
                            <p className="my-1" {...props} />
                          ),
                          ul: ({node, ...props}) => (
                            <ul className="my-3 ml-4 list-disc" {...props} />
                          ),
                          ol: ({node, ...props}) => (
                            <ol className="my-3 ml-4 list-decimal" {...props} />
                          ),
                          h1: ({node, ...props}) => (
                            <h1 className="mt-4 mb-2" {...props} />
                          ),
                          h2: ({node, ...props}) => (
                            <h2 className="mt-3 mb-2" {...props} />
                          ),
                          hr: ({node, ...props}) => (
                            <hr className="!my-4 opacity-50" {...props} />
                          )
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                      
                      </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.options?.map((option, idx) => (
                            <Button 
                              key={idx}
                              variant="outline" 
                              size="sm" 
                              className="text-white bg-white/10 hover:text-[#C4F400]"
                              onClick={() => handleSend(option)}
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Section */}
          {messages[messages.length - 1]?.type !== 'options' && (
            <div className="w-full flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentStep?.message || "Como posso ajudar você?"}
                className="flex-1 bg-[#192C18] text-white border-[#88b337] focus:ring-[#C4F400] text-sm py-2 px-3 h-[40px]"
                disabled={isLoading}
              />
              <Button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-[#C4F400] text-black hover:bg-[#88b337] hover:text-white text-sm py-2 px-4 h-[40px]"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-1" />
                    Enviar
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
