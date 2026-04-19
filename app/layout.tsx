import type { Metadata } from 'next'
import { Cormorant_Garamond, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { PretextProvider } from '@/components/PretextProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Refresh My Web | Website Optimization & Maintenance',
  description: 'We transform outdated websites into high-performing digital assets.',
  alternates: {
    canonical: 'https://refreshmyweb.com',
  },
  openGraph: {
    title: 'Refresh My Web | Website Optimization & Maintenance',
    description: 'We transform outdated websites into high-performing digital assets.',
    url: 'https://refreshmyweb.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <a href="#main" style={{ position: 'absolute', top: '-1000px', left: 0, padding: '1rem', background: 'var(--paper)', color: 'var(--ink)', zIndex: 100000 }}>Skip to content</a>
          <PretextProvider>
            <div id="main" role="main">
              {children}
            </div>
          </PretextProvider>
        

        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Refresh My Web",
              "url": "https://refreshmyweb.com"
            })
          }}
        />
      </body>
    </html>
  )
}
