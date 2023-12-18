import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex gap-5 items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height="100" width="100" />
      </Link>

      <nav>
        <ul className="flex gap-5 text-4xl">
          <li>
            <Link href="/booking">Booking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
