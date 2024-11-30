'use client'


import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [...messages, userMessage],
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch response')
        }

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
    <div className="flex flex-col h-screen bg-black/95 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
      <div className="flex-grow overflow-auto mb-4 bg-[#192C18] border-[#88b337] border-2 rounded-lg p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-[#C4F400] text-black' : 'bg-[#151E13]'}`}>
              {message.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
          placeholder="Digite sua mensagem..."
          className="flex-grow bg-[#151E13] text-white border-[#88b337]"
          disabled={isLoading}
        />
        <Button 
          onClick={handleSend} 
          className="bg-[#C4F400] text-black hover:bg-[#88b337] hover:text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>
    </div>
  )
}

