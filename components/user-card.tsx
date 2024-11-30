import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function UserCard() {
  return (
    <Card className="bg-[#192C18] text-white w-[400px]">
      <CardContent className="p-4 flex flex-col items-center ">
        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-3 text-lg font-bold">
          GL
        </div>
        <h2 className="text-lg font-medium mb-3">Olá, Logan!</h2>
        <Button 
          variant="outline" 
          className="w-[180px] h-[50px] bg-[#C4F400] border-[#88b337] text-[black] hover:bg-[#88b337]  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          Ver Perfil
        </Button>
      </CardContent>
    </Card>
  )
}
