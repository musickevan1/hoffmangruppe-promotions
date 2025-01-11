import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Hoffmangruppe</a>
        </Link>
        <nav className="space-x-8">
          <Link href="/about">
            <a className="hover:text-secondary">About</a>
          </Link>
          <Link href="/products">
            <a className="hover:text-secondary">Products</a>
          </Link>
          <Link href="/insights">
            <a className="hover:text-secondary">Insights</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-secondary">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
