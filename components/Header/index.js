import Link from "next/link";

const Header = () => {
   return  (
    <header className="header">
        <div className="logo">
            <Link href="/">Home</Link>
        </div>
        <ul className="navigation">
          <li>
            <Link href="/tentang">Tentang</Link>
          </li>
          <li>
            <Link href="/kontak">Kontak</Link>
          </li>
        </ul>
      </header>
   )
}

export default Header;