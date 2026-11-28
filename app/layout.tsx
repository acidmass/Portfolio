import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { LanguageProvider } from '@/components/language-provider'
import { LocalizedText } from '@/components/localized-text'
import './globals.css'

const bodyFont = localFont({ src: './fonts/dm-sans-latin-wght-normal.woff2', variable: '--font-body', weight: '100 1000', display: 'swap' })
const displayFont = localFont({ src: './fonts/archivo-narrow-latin-wght-normal.woff2', variable: '--font-display', weight: '400 700', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL("https://carmenmariaperez.com"),
  title: {
    default: 'Carmen María Pérez — Diseñadora UI/UX & Visual',
    template: '%s — Carmen María Pérez',
  },
  description:
    'Portfolio de Carmen María Pérez, diseñadora junior UI/UX & Visual especializada en diseño web, producto digital y sistemas visuales. Murcia, España.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#002FA7',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body id="top" className="antialiased">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
            <LocalizedText es="Saltar al contenido" en="Skip to content" />
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
