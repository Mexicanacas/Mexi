import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <nav className="fixed w-screen bg-mexi-black bg-opacity-50 p-4 ">
        <ul className="flex h-12 items-center justify-around md:text-4xl">
          <li>
            <Link href="/booking" className="hover:underline">
              Booking
            </Link>
          </li>
          <li className="relative top-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                height="150"
                width="150"
                style={{ aspectRatio: 'auto', height: 'auto', width: 'auto' }}
              />
            </Link>
          </li>
          <li>
            <Link href="/album" className="hover:underline">
              Album
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
