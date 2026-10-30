'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { about } from '@/lib/site'
import { Container, Eyebrow } from '../container'

export function AboutTeaser() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="about-title" className="bg-brand">
      <Container className="grid gap-8 py-28 md:grid-cols-12 md:gap-8 md:py-40">
        <Eyebrow index="01" className="md:col-span-3">
          {copy(language, 'Sobre mí', 'About me')}
        </Eyebrow>
        <div className="md:col-span-8 md:col-start-5">
          <h2
            id="about-title"
            className="text-balance text-3xl font-semibold leading-tight md:text-6xl"
          >
            {copy(language, 'Diseño en el punto donde se encuentran estructura y expresión visual.', 'Design where structure meets visual expression.')}
          </h2>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-8">
            <p className="leading-relaxed text-foreground/75 md:col-span-5">
              {copy(
                language,
                about.intro,
                'I am Carmen, a UI/UX and visual designer with a background in Interactive Graphic Design and Art History. I am especially interested in the intersection of digital products, web design and visual direction.',
              )}
            </p>
            <div className="md:col-span-3 md:self-end md:text-right">
              <Link href="/about" className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background">
                {copy(language, 'Conóceme mejor', 'Get to know me')} <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
