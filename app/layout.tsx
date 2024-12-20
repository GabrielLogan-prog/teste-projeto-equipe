import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plataforma de Marketing',
  description: 'Plataforma de criação e otimização de produtos e estratégias de marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
    
      <body className={inter.className}>  
      <div className=" w-[100%] bg-black flex  ">
        <Header />
      </div>
        <div className="min-h-screen bg-black flex justify-center items-center">
          <main className="container mx-auto px-4 transform scale-75 origin-top">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

