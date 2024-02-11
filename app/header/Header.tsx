import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <nav className="h-header fixed w-screen bg-mexi-black bg-opacity-50 p-4">
        <ul className="flex h-12 items-center justify-around md:text-4xl">
          <li>
            <Link href="/booking" className="hover:underline">
              Booking
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="h-header md:h-logo-big relative block w-auto md:top-12"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={500}
                height={500}
                className="aspect-auto h-full w-auto"
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
