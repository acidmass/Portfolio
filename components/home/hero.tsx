'use client'

import Link from 'next/link'
import { Collectible } from '@/components/collectible'
import { Container } from '@/components/container'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'

export function Hero() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden border-b border-line bg-[#faf1e9] text-[#421723]">
      <Container className="grid items-center gap-5 py-9 sm:py-12 md:grid-cols-[1.12fr_1fr] md:gap-6 md:py-16 xl:py-20">
        <div>
          <p className="eyebrow mb-5 md:mb-8">
            {copy(language, 'Diseñadora UI y web · Murcia', 'UI & web designer · Murcia')}
          </p>
          <h1 id="hero-title" className="text-[clamp(3.2rem,7.5vw,7rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
            Carmen María
            <span className="block font-serif text-[1.12em] font-normal italic tracking-[-0.05em] text-[#81364a]">Pérez</span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-[#593b40] md:mt-8 md:text-xl">
            {copy(language, 'Estudié Historia del Arte y hoy diseño interfaces y desarrollo webs. En BRUMA reuní las dos cosas en una revista cultural que diseñé y programé.', 'I studied Art History and now design interfaces and build websites. BRUMA brings both together in a cultural magazine I designed and coded.')}
          </p>
          <Link href="#selected-work" className="mt-5 inline-flex min-h-11 items-center gap-3 border-b border-current text-sm font-semibold md:mt-8">
            {copy(language, 'Ver mis proyectos', 'Explore my work')} <span aria-hidden>↘</span>
          </Link>
        </div>
        <Collectible />
      </Container>
    </section>
  )
}
