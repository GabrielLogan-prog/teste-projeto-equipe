//import { Header } from "@/components/header"
import { UserCard } from "@/components/user-card"
import { CardSection } from "@/components/card-section"
import { WelcomeBanner } from "@/components/welcome-banner"

// Dados mockados para as seções de cards
const sections = [
  {
    title: "Criação de Produto",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/criadores/PRODUTOS.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/criadores/ORDER-BUMP.webp" },
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
      { id: 1, title: "Card 1", imageUrl: "/assets/geradorcopy/aida.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/geradorcopy/beneficios.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/geradorcopy/analogias.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/geradorcopy/gatilhos-mentais.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/geradorcopy/motivos-para-comprar.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/geradorcopy/pas.webp" },
      { id: 7, title: "Card 4", imageUrl: "/assets/geradorcopy/quebra-objecoes.webp" },
      { id: 8, title: "Card 4", imageUrl: "/assets/geradorcopy/prova-social.webp" },
      { id: 9, title: "Card 4", imageUrl: "/assets/geradorcopy/gerador-de-faq.webp" },
     
    ]
  },
  
  {
    title: "Scripts Chat ECOM",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/script-chatecom/captura-sem-template.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/script-chatecom/conversao-sem-template.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/script-chatecom/captura-template-whatsapp.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/script-chatecom/conversao-templatewhats.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/script-chatecom/captura-templateInsta.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/script-chatecom/conversao-templateInsta.webp" },
      
    ]
  },
  
  {
    title: "Scripts Zap ECOM",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/script-zapecom/vendas-automatico.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/script-zapecom/envio-de-entregavel.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/script-zapecom/upsell.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/script-zapecom/downsell.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/script-zapecom/compra-aprovada.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/script-zapecom/rec-checkout-abandonado.webp" },
      { id: 7, title: "Card 4", imageUrl: "/assets/script-zapecom/rec-pixgerado.webp" },
      { id: 8, title: "Card 4", imageUrl: "/assets/script-zapecom/rec-boletogerado.webp" },
      { id: 9, title: "Card 4", imageUrl: "/assets/script-zapecom/rec-pagamento-recusado.webp" },
      { id: 10, title: "Card 4", imageUrl: "/assets/script-zapecom/rec-assinatura-cancelada.webp" },
      { id: 11, title: "Card 4", imageUrl: "/assets/script-zapecom/recupera-reembolso.webp" },
      { id: 12, title: "Card 4", imageUrl: "/assets/script-zapecom/remarketing.webp" },
    
    ]
  },
  
  {
    title: "Geradores de Email",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/gerador-email/gerador-de-newsletter.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/gerador-email/compra-aprovada.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/gerador-email/email-checkout-abandonado.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/gerador-email/email-pix-gerado.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/gerador-email/email-boleto-gerado.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/gerador-email/email-pagamento-recusado.webp" },
      { id: 7, title: "Card 4", imageUrl: "/assets/gerador-email/email-assinatura-cancelada.webp" },
      { id: 8, title: "Card 4", imageUrl: "/assets/gerador-email/email-reembolso.webp" },
      { id: 9, title: "Card 4", imageUrl: "/assets/gerador-email/email-remarketing.webp" },
      
    
    ]
  },
  
  {
    title: "Scripts VSL",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/scripts-vsl/vsl-jon-benson.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/scripts-vsl/vsl-para-upsell.webp" },
       
    ]
  },
  
  {
    title: "Expert's Ecom",
    cards: [
      { id: 1, title: "Card 1", imageUrl: "/assets/experts-ecom/experts-contingencia.webp" },
      { id: 2, title: "Card 2", imageUrl: "/assets/experts-ecom/experts-copywriting-ofertas.webp" },
      { id: 3, title: "Card 3", imageUrl: "/assets/experts-ecom/experts-criativos.webp" },
      { id: 4, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-dropshiping-ecom.webp" },
      { id: 5, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-encapsulados.webp" },
      { id: 6, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-espionagem.webp" },
      { id: 7, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-estrategias.webp" },
      { id: 8, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-facebookads.webp" },
      { id: 9, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-ferramentas.webp" },
      { id: 10, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-funil-vendas.webp" },
      { id: 11, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-google-youtube-ads.webp" },
      { id: 12, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-hot+18.webp" },
      { id: 13, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-igaming.webp" },
      { id: 14, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-kwai-ads.webp" },
      { id: 15, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-latam.webp" },
      { id: 16, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-pagina-vendas.webp" },
      { id: 17, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-recupera-vendas.webp" },
      { id: 18, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-tiktok-ads.webp" },
      { id: 19, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-typebot.webp" },
      { id: 20, title: "Card 4", imageUrl: "/assets/experts-ecom/experts-vsl.webp" },
       
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





