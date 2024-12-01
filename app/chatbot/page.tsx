'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { ArrowLeft, Share2, Search, Bot, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = { role: 'user', content: input }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        })

        if (!response.ok) throw new Error('Failed to fetch response')

        const data = await response.json()
        const assistantMessage: Message = { role: 'assistant', content: data.content }
        setMessages(prev => [...prev, assistantMessage])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { role: 'assistant', content: 'Desculpe, ocorreu um erro. Por favor, tente novamente.' }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/95 border-b border-[#74fc05]/20">
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
                <span className="text-white font-semibold">Genius Ecom</span>
                <span className="text-[#C4F400] text-sm">✓</span>
              </div>
              <span className="text-gray-400 text-sm">Criador de Produtos</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-[#C4F400]">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-[#C4F400]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 flex flex-col items-center max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#192C18]">
            <Bot className="h-8 w-8 text-[#C4F400]" />
          </div>
          <h1 className="text-white text-xl font-semibold">Dúvidas? Fale conosco</h1>
          <p className="text-gray-400">Crie em um passe de mágica ✨</p>
        </div>

        {/* Video Section */}
        <div className="w-full aspect-video bg-[#151E13] rounded-lg overflow-hidden mb-6 relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QZE-HqQxOGQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Chat Section */}
        <ScrollArea className="flex-1 w-full mb-4" ref={scrollAreaRef}>
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
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-[#C4F400] text-black'
                      : 'bg-[#192C18] text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Section */}
        <div className="w-full flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
            placeholder="Como você gostaria de criar seu produto?"
            className="flex-1 bg-[#192C18] text-white border-[#88b337] focus:ring-[#C4F400]"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-[#C4F400] text-black hover:bg-[#88b337] hover:text-white"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  )
}

