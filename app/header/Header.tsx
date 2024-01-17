import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex fixed justify-between items-center p-4 h-28 bg-black w-screen bg-opacity-10 gap-5 text-4xl">
          <li>
            <Link href="/booking">Booking</Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                fill={true}
                objectFit="contain"
              />
            </Link>
          </li>
          <li>
            <Link href="/album">Album</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
