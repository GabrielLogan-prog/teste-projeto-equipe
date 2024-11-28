import { Header } from "@/components/header"
import { UserCard } from "@/components/user-card"
import { CardSection } from "@/components/card-section"
import { WelcomeBanner } from "@/components/welcome-banner"

// Dados mockados para as seções de cards
const sections = [
  {
    title: "Criação de Produto",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c1-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c1-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c1-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c1-4.png" },
    ]
  },
  {
    title: "Otimização de Produto",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c2-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c2-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c2-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c2-4.png" },
    ]
  },
  {
    title: "Criação de Estrategias",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c3-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c3-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c3-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c3-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c3-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c3-6.png" },
      { id: 7, title: "Card 4", imageUrl: "/img/c3-7.png" },
    ]
  },
  {
    title: "Ativos para Anuncios",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c4-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c4-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c4-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c4-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c4-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c4-6.png" },
    ]
  },
  
  {
    title: "Gerador de Copy",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c5-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c5-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c5-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c5-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c5-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c5-6.png" },
      { id: 7, title: "Card 4", imageUrl: "/img/c5-7.png" },
      { id: 8, title: "Card 4", imageUrl: "/img/c5-8.png" },
      { id: 9, title: "Card 4", imageUrl: "/img/c5-9.png" },
     
    ]
  },
  
  {
    title: "Scripts Chat ECOM",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c6-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c6-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c6-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c6-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c6-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c6-6.png" },
      
    ]
  },
  
  // Adicione as outras seções aqui seguindo o mesmo padrão
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black/95 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-3 flex justify-left">
            <UserCard />
          </div>
          <div className="col-span-9 p-0 w-full">
            <WelcomeBanner />
          </div>
        </div>
        {sections.map((section, index) => (
          <CardSection key={index} title={section.title} cards={section.cards} />
        ))}
      </div>
    </div>
  )
}




