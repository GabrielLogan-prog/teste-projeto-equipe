'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from 'lucide-react'

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  currentName: string
  onConfirm: (newName: string) => void
}

export function EditProfileModal({ isOpen, onClose, currentName, onConfirm }: EditProfileModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newName = formData.get('name') as string
    onConfirm(newName)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#192C18] rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">Editar Perfil</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {currentName?.slice(0, 2).toUpperCase() || 'CN'}
            </div>
          </div>
          
          <Input
            name="name"
            defaultValue={currentName}
            className="bg-[#151E13] border-none text-white"
          />
          
          <Button 
            type="submit"
            className="w-full h-[50px] bg-[#C4F400] text-black hover:bg-[#88b337] hover:text-white transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Confirmar
          </Button>
        </form>
      </div>
    </div>
  )
}

