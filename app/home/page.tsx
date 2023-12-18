import Image from 'next/image';

export default function Home() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <Image src="/logo.png" alt="Logo" fill={true} loading="lazy"></Image>
    </div>
  );
}
