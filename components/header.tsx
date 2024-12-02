import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex w-[100%] justify-between items-center mb-0 border-b-2 border-gray-700  pb-2 pt-2 px-[15%] " >
      <Image 
        src="/assets/logo-genius.png" 
        alt="Logo" 
        width={48} 
        height={48} 
        className="h-8 w-auto"
      />
      <Button  
        className="bg-black/95 w-[151px] h-[50px] border-[#b6fc05] text-[#b6fc05] hover:bg-[#B3DD01] hover:opacity-500 hover:text-white" 
        variant="outline"
      >
        Sair
      </Button>
    </header>
  )
}
