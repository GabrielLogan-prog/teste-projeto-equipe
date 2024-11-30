import Image from 'next/image'

export function WelcomeBanner() {
  return (
    <div className="rounded-lg p-0 h-full w-full flex justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-4 z-10 w-[100%]">
        <Image 
          src="/logo-large.png" 
          alt="Genius" 
          width={800} 
          height={200} 
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

