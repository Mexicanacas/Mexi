import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Los Mexicanacas</h1>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1
      }}>
        <Image src="/background-image.jpg" alt="Bilde av sanger" layout='fill' objectFit='cover'></Image>
      </div>
    </main>
  )
}
