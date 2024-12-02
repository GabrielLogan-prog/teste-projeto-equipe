import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex w-[100%] justify-between items-center mb-8 border-b-2 border-gray-700  pb-6 px-[15%] " >
      <Image 
        src="/assets/logo-genius.png" 
        alt="Logo" 
        width={48} 
        height={48} 
        className="h-8 w-auto"
      />
      <Button  
        className="bg-black/95 w-[150px] h-[50px] border-[#74fc05] text-[#74fc05] hover:bg-[#B3DD01] hover:opacity-500 hover:text-white" 
        variant="outline"
      >
        Sair
      </Button>
    </header>
  )
}
