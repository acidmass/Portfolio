'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { about } from '@/lib/site'
import { Container, Eyebrow } from '../container'

export function AboutTeaser() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="about-title">
      <Container className="grid gap-8 py-20 md:grid-cols-12 md:gap-8 md:py-32">
        <Eyebrow index="01" className="md:col-span-3">
          {copy(language, 'Sobre mí', 'About me')}
        </Eyebrow>
        <div className="md:col-span-8 md:col-start-5">
          <h2
            id="about-title"
            className="text-balance text-3xl font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl"
          >
            {copy(language, 'Diseño en el punto donde se encuentran estructura y expresión visual.', 'Design where structure meets visual expression.')}
          </h2>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-8">
            <p className="leading-relaxed text-muted-foreground md:col-span-5">
              {copy(
                language,
                about.intro,
                'I am Carmen, a UI/UX and visual designer with a background in Interactive Graphic Design and Art History. I am especially interested in the intersection of digital products, web design and visual direction.',
              )}
            </p>
            <div className="md:col-span-3 md:self-end md:text-right">
              <Link href="/about" className="link-underline text-sm">
                {copy(language, 'Más sobre mí', 'More about me')} →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
