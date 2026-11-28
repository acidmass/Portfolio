'use client'

import Link from 'next/link'
import { Collectible } from '@/components/collectible'
import { Container } from '@/components/container'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'

export function Hero() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="py-8 md:py-12">
        <h1 id="hero-title" className="text-center text-[clamp(2.8rem,11.6vw,10.5rem)] md:text-[clamp(4rem,8.9vw,8.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.035em]">
          Carmen María Pérez
        </h1>
        <div className="mt-8 grid items-center gap-6 md:mt-10 md:grid-cols-[1fr_1.2fr_1fr] md:gap-8">
          <p className="text-center text-2xl font-medium leading-tight md:text-left md:text-4xl">
            {copy(language, 'Diseñadora de interfaces y webs', 'Interface and web designer')}
          </p>
          <Collectible />
          <div className="mx-auto max-w-xs text-center md:mx-0 md:text-left">
            <p className="text-base leading-relaxed md:text-lg">
              {copy(language, 'Desde Murcia, diseño y desarrollo proyectos que van de una revista cultural a una app de movilidad.', 'Based in Murcia, I design and build projects ranging from a cultural magazine to a cycling app.')}
            </p>
            <Link href="#selected-work" className="mt-4 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
              {copy(language, 'Ver proyectos', 'Explore my work')}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
