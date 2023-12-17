import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="flex bg-lime-400">
    <Link href="/">
      <Image src="/logo.png" alt="Logo" height="100" width="100" />
    </Link>

    <nav>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Hjem</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}