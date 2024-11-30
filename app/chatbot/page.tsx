'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Aqui será implementada a lógica de integração com a API do ChatGPT posteriormente
      setMessages(prev => [...prev, { text: "Resposta temporária do chatbot.", isUser: false }])
      setInput('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black/95 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
      <div className="flex-grow overflow-auto mb-4 bg-[#192C18] border-[#88b337] border-2 rounded-lg p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-[#C4F400] text-black' : 'bg-[#151E13]'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Digite sua mensagem..."
          className="flex-grow bg-[#151E13] text-white border-[#88b337]"
        />
        <Button onClick={handleSend} className="bg-[#C4F400] text-black hover:bg-[#88b337] hover:text-white">
          Enviar
        </Button>
      </div>
    </div>
  )
}

