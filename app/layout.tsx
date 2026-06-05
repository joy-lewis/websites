import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wandi de Carvalho Lucas | Art Portfolio',
  description: 'Artist based in Maastricht, Netherlands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>WANDI DE CARVALHO LUCAS</h1>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>MAASTRICHT, NL</p>
          <nav>
            <Link href="/">Gallery</Link>
            <Link href="/bio">Bio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Wandi de Carvalho Lucas</p>
        </footer>
      </body>
    </html>
  )
}
