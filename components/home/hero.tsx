'use client'

import Link from 'next/link'
import { Collectible } from '@/components/collectible'
import { Container } from '@/components/container'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'

export function Hero() {
  const { language } = useLanguage()
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-8 py-10 md:grid-cols-[1.5fr_1fr] md:py-16">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted-foreground md:text-lg">
            {copy(language, 'Diseñadora UI/UX · Diseño web · Diseño visual', 'UI/UX designer · Web design · Visual design')}
          </p>
          <h1 id="hero-title" className="mt-5 max-w-[12ch] text-balance text-[clamp(3.4rem,8vw,7.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
            {copy(language, 'Diseño digital con intención.', 'Digital design with intent.')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {copy(language, 'Soy Carmen María Pérez. Diseño y prototipo interfaces en Figma y las convierto en webs adaptables con HTML, CSS, JavaScript y WordPress.', 'I’m Carmen María Pérez. I design and prototype interfaces in Figma and build responsive websites with HTML, CSS, JavaScript and WordPress.')}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#selected-work" className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 font-semibold text-background hover:bg-brand-ink">
              {copy(language, 'Ver proyectos', 'Explore projects')}
            </Link>
            {site.cv.available && <a href={site.cv.href} download className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
              {copy(language, 'Descargar CV', 'Download CV')}
            </a>}
          </div>
        </div>
        <Collectible />
      </Container>
    </section>
  )
}
