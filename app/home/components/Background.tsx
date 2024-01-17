import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen text-white overflow-hidden relative">
      <Image
        src="/homepage-image.jpg"
        alt="Bilde av bandet"
        fill={true}
        objectFit="cover"
        priority={true}
        style={{ zIndex: -1 }}
      />
    </div>
  );
}
