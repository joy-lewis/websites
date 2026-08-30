import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Barlow, Nunito } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// Closest Google Font to DIN Neuzeit Grotesk — used for all headings
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-heading',
  display: 'swap',
})

// Closest Google Font to Avenir Light — used for all body text
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
  display: 'swap',
})

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
    <html lang="en" className={`${barlow.variable} ${nunito.variable}`}>
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
            <Link href="/">gallery.</Link>
            <Link href="/exhibits">exhibits.</Link>
            <Link href="/bio">bio.</Link>
            <Link href="/contact">contact.</Link>
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
