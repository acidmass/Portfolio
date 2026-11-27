'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { Container, Eyebrow } from '../container'

export function AboutTeaser() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="about-title" className="bg-brand">
      <Container className="grid gap-8 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <Eyebrow index="02" className="md:col-span-3">
          {copy(language, 'Sobre mí', 'About me')}
        </Eyebrow>
        <div className="md:col-span-8 md:col-start-5">
          <h2
            id="about-title"
            className="text-balance text-3xl font-semibold leading-tight md:text-6xl"
          >
            {copy(language, 'Del diseño a una tienda en WordPress.', 'From design to a WordPress shop.')}
          </h2>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-8">
            <p className="leading-relaxed text-foreground/75 md:col-span-5">
              {copy(
                language,
                'En Caza desde Casa maqueté páginas con Elementor, adapté la tienda WooCommerce a móvil y desarrollé interacciones con CSS y JavaScript.',
                'At Caza desde Casa, I built pages in Elementor, adapted the WooCommerce shop for mobile and developed interactions with CSS and JavaScript.',
              )}
            </p>
            <div className="md:col-span-3 md:self-end md:text-right">
              <Link href="/about" className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background">
                {copy(language, 'Ver mi experiencia', 'View my experience')} <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
