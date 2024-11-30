import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8 border-b border-gray-700   " >
      <Image 
        src="/logo.png" 
        alt="Logo" 
        width={48} 
        height={48} 
        className="h-12 w-auto"
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
