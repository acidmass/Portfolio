'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Container } from '../container'

export function Hero() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="hero-title">
      <Container className="pb-20 pt-10 md:pb-32 md:pt-14">
        <div className="relative isolate mt-12 md:mt-16">
          <h1
            id="hero-title"
            className="relative z-10 text-[clamp(3.25rem,11.5vw,11rem)] font-medium leading-[0.92] tracking-[-0.05em]"
          >
            <span className="block">{copy(language, 'Diseño digital', 'Digital design')}</span>
            <span className="block md:pl-[16.6%]">{copy(language, 'con intención.', 'with intent.')}</span>
          </h1>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <Link
            href="#selected-work"
            className="inline-flex h-11 items-center gap-3 bg-foreground px-5 text-sm text-background transition-colors hover:bg-foreground/85"
          >
            {copy(language, 'Ver proyectos', 'View selected work')} <span aria-hidden>↓</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center border border-line px-5 text-sm transition-colors hover:border-foreground"
          >
            {copy(language, 'Sobre mí', 'About me')}
          </Link>
          {site.cv.available && (
            <a
              href={site.cv.href}
              download
              className="inline-flex h-11 items-center gap-3 border border-line px-5 text-sm transition-colors hover:border-foreground"
            >
              {copy(language, 'Descargar CV', 'Download CV')} <span aria-hidden>↓</span>
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
