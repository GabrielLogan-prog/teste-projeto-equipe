'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EditProfileModal } from "./edit-profile-modal"

export function UserCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState("Logan")

  return (
    <>
      <Card className="bg-[#192C18] text-white border-[#88b337]  w-[400px]">
        <CardContent className="p-4 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-3 text-lg font-bold">
            {userName.slice(0, 2).toUpperCase()}
          </div>
          <h2 className="text-lg font-medium mt-5">Olá, {userName}!</h2>
          <Button 
            variant="outline" 
            className="w-[180px] h-[50px] mt-12 bg-[#C4F400] border-[#88b337] text-[black] hover:bg-[#C4F400] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Ver Perfil
          </Button>
        </CardContent>
      </Card>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentName={userName}
        onConfirm={setUserName}
      />
    </>
  )
}

