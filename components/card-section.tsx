'use client'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CardSectionProps {
  title: string
  cards: { id: number; title: string; imageUrl: string }[]
}

export function CardSection({ title, cards }: CardSectionProps) {
  const router = useRouter()

  const handleCardClick = (cardId: number, cardTitle: string) => {
    router.push(`/chatbot?id=${cardId}&title=${encodeURIComponent(cardTitle)}`)
  }

  return (
    <div className="mb-8 bg-[#151E13] rounded-xl p-0">
      <div className="bg-[#192C18] rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.id, card.title)}>
            <Card 
              className="relative overflow-hidden border-[#74fc05] border-2 rounded-2xl h-[180px] w-[300px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <CardContent className="p-0 flex flex-col items-center justify-between h-full">
                <Image    
                  src={card.imageUrl}
                  alt={card.title}
                  width={200}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

