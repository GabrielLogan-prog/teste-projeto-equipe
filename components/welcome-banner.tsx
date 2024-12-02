import Image from 'next/image'

export function WelcomeBanner() {
  return (
    <div className="rounded-lg h-full w-full relative overflow-hidden">
      <Image 
        src="/logo-large.png" 
        alt="Genius" 
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}

