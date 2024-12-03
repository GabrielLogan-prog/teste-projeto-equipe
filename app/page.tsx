//import { Header } from "@/components/header"
import { UserCard } from "@/components/user-card"
import { CardSection } from "@/components/card-section"
import { WelcomeBanner } from "@/components/welcome-banner"

// Dados mockados para as seções de cards
const sections = [
  {
    title: "Criação de Produto",
    cards: [
      { id: 1, title: "Criador de Produto", imageUrl: "/assets/criadores/PRODUTOS.webp" },
      { id: 2, title: "Criador-de-Order-Bump", imageUrl: "/assets/criadores/ORDER-BUMP.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/criadores/UPSELL.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/criadores/DOWNSELL.webp" },
    ]
  },
  {
    title: "Otimização de Produto",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/otimizacao/NOMES.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/otimizacao/PROMESSAS.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/otimizacao/MECANISMOS.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/otimizacao/OFERTAS.webp" },
    ]
  },
  {
    title: "Criação de Estrategias",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/estrategia/capturaLeads.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/estrategia/criacao-desafio.webp"},
      { id: 3, title: "Card 3", imageUrl: "/assets/estrategia/escada-de-valor.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/estrategia/gancho-historia-oferta.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/estrategia/tripware.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/estrategia/webinario.webp" },
      { id: 7, title: "Card 4", imageUrl: "/assets/estrategia/remarketing.webp" },
    ]
  },
  {
    title: "Ativos para Anuncios",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/ativosanuncio/copy-anuncio.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/ativosanuncio/criador-criativo.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/ativosanuncio/headlines.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/ativosanuncio/segmentacao-facebook.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/ativosanuncio/persona.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/ativosanuncio/persona-nicho.webp" },
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
  
  {
    title: "Scripts Zap ECOM",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c7-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c7-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c7-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c7-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c7-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c7-6.png" },
      { id: 7, title: "Card 4", imageUrl: "/img/c7-7.png" },
      { id: 8, title: "Card 4", imageUrl: "/img/c7-8.png" },
      { id: 9, title: "Card 4", imageUrl: "/img/c7-9.png" },
      { id: 10, title: "Card 4", imageUrl: "/img/c7-10.png" },
      { id: 11, title: "Card 4", imageUrl: "/img/c7-11.png" },
      { id: 12, title: "Card 4", imageUrl: "/img/c7-12.png" },
    
    ]
  },
  
  {
    title: "Geradores de Email",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c8-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c8-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c8-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c8-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c8-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c8-6.png" },
      { id: 7, title: "Card 4", imageUrl: "/img/c8-7.png" },
      { id: 8, title: "Card 4", imageUrl: "/img/c8-8.png" },
      { id: 9, title: "Card 4", imageUrl: "/img/c8-9.png" },
      
    
    ]
  },
  
  {
    title: "Scripts VSL",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c9-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c9-2.png" },
       
    ]
  },
  
  {
    title: "Expert's Ecom",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/img/c10-1.png" },
      { id: 2, title: "Card 2", imageUrl: "/img/c10-2.png" },
      { id: 3, title: "Card 3", imageUrl: "/img/c10-3.png" },
      { id: 4, title: "Card 4", imageUrl: "/img/c10-4.png" },
      { id: 5, title: "Card 4", imageUrl: "/img/c10-5.png" },
      { id: 6, title: "Card 4", imageUrl: "/img/c10-6.png" },
      { id: 7, title: "Card 4", imageUrl: "/img/c10-7.png" },
      { id: 8, title: "Card 4", imageUrl: "/img/c10-8.png" },
      { id: 9, title: "Card 4", imageUrl: "/img/c10-9.png" },
      { id: 10, title: "Card 4", imageUrl: "/img/c10-10.png" },
      { id: 11, title: "Card 4", imageUrl: "/img/c10-11.png" },
      { id: 12, title: "Card 4", imageUrl: "/img/c10-12.png" },
      { id: 13, title: "Card 4", imageUrl: "/img/c10-13.png" },
      { id: 14, title: "Card 4", imageUrl: "/img/c10-14.png" },
      { id: 15, title: "Card 4", imageUrl: "/img/c10-15.png" },
      { id: 16, title: "Card 4", imageUrl: "/img/c10-16.png" },
      { id: 17, title: "Card 4", imageUrl: "/img/c10-17.png" },
      { id: 18, title: "Card 4", imageUrl: "/img/c10-18.png" },
      { id: 19, title: "Card 4", imageUrl: "/img/c10-19.png" },
      { id: 20, title: "Card 4", imageUrl: "/img/c10-20.png" },
       
    ]
  },

  {
    title: "Expert's Gringos",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/experts-gringos/alex-hormozi.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/experts-gringos/ann-handley.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/experts-gringos/bernadette-jiwa.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/experts-gringos/carmen-simon.webp" },
      { id: 5, title: "Card 5", imageUrl: "/assets/experts-gringos/cloude-hopkins.webp" },
      { id: 6, title: "Card 6", imageUrl: "/assets/experts-gringos/dan-kennedy.webp" },
      { id: 7, title: "Card 7", imageUrl: "/assets/experts-gringos/david-ogilvy.webp" },
      { id: 8, title: "Card 8", imageUrl: "/assets/experts-gringos/donald-miller.webp" },
      { id: 9, title: "Card 9", imageUrl: "/assets/experts-gringos/eugene-schwartz.webp" },
      { id: 10, title: "Card 10", imageUrl: "/assets/experts-gringos/frank-kern.webp" },
      { id: 11, title: "Card 11", imageUrl: "/assets/experts-gringos/gary-halbert-copy.webp" },
      { id: 12, title: "Card 12", imageUrl: "/assets/experts-gringos/grant-cardone.webp" },
      { id: 13, title: "Card 13", imageUrl: "/assets/experts-gringos/jay-abraham.webp" },
      { id: 14, title: "Card 14", imageUrl: "/assets/experts-gringos/jeff-walker.webp" },
      { id: 15, title: "Card 15", imageUrl: "/assets/experts-gringos/jim-edwards.webp" },
      { id: 16, title: "Card 16", imageUrl: "/assets/experts-gringos/john-caples.webp" },
      { id: 17, title: "Card 17", imageUrl: "/assets/experts-gringos/jon-benson.webp" },
      { id: 18, title: "Card 18", imageUrl: "/assets/experts-gringos/joseph-sugarman.webp" },
      { id: 19, title: "Card 19", imageUrl: "/assets/experts-gringos/matthew-luhn.webp" },
      { id: 20, title: "Card 20", imageUrl: "/assets/experts-gringos/michael-hauge.webp" },
      { id: 21, title: "Card 21", imageUrl: "/assets/experts-gringos/neil-petel.webp" },
      { id: 22, title: "Card 22", imageUrl: "/assets/experts-gringos/oli-gardner.webp" },
      { id: 23, title: "Card 23", imageUrl: "/assets/experts-gringos/paul-smith.webp" },
      { id: 24, title: "Card 24", imageUrl: "/assets/experts-gringos/ray-edwards.webp" },
      { id: 25, title: "Card 25", imageUrl: "/assets/experts-gringos/robert-cialdini.webp" },
      { id: 26, title: "Card 26", imageUrl: "/assets/experts-gringos/robert-collier.webp" },
      { id: 27, title: "Card 27", imageUrl: "/assets/experts-gringos/russell-brunson.webp" },
      { id: 28, title: "Card 28", imageUrl: "/assets/experts-gringos/ryan-deiss.webp" },
      { id: 29, title: "Card 29", imageUrl: "/assets/experts-gringos/sean-ellis.webp" },
      { id: 30, title: "Card 30", imageUrl: "/assets/experts-gringos/seth-godin.webp" },
       
    ]
  },
  
  // Adicione as outras seções aqui seguindo o mesmo padrão
]

export default function Home() {
  return (
    
    <div className="min-h-screen bg-black/95 text-white py-8">
      <div className="max-w-[1920px] mx-auto px-4">

        <div className="relative mb-8 pb-2">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 mb-8 ">
            <div className="col-span-2 md:col-span-3 flex justify-left  border-0 ">
              <UserCard />
            </div>
            <div className="col-span-2 md:col-span-9 p-0 w-full">
              <WelcomeBanner />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b6fc05] to-transparent"></div>
        </div>
        {sections.map((section, index) => (
          <CardSection key={index} title={section.title} cards={section.cards} />
        ))}
      </div>
    </div>
  )
}





