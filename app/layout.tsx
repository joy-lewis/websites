import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
          <Link href="/" className="logo-link">
            <Image
              src="/logo.png"
              alt="Wandi de Carvalho Lucas"
              width={90}
              height={60}
              className="site-logo"
              priority
            />
          </Link>
          <nav>
            <Link href="/">Gallery</Link>
            <Link href="/bio">Bio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Wandi de Carvalho Lucas</p>
          <p>Maastricht, Netherlands</p>
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
