'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { Container, Eyebrow } from '../container'
import { ContactLinks } from '../contact-links'

export function FinalCta() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="cta-title" className="bg-brand">
      <Container className="grid grid-cols-1 gap-12 py-28 md:grid-cols-12 md:gap-8 md:py-40">
        <div className="md:col-span-7">
          <Eyebrow index="05">{copy(language, 'Contacto', 'Contact')}</Eyebrow>
          <h2
            id="cta-title"
            className="mt-6 text-balance text-5xl font-medium leading-none md:text-7xl"
          >
            {copy(language, '¿Tienes un proyecto en mente?', 'Have a project in mind?')}
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-2xl font-semibold text-background transition-transform hover:-translate-y-1 md:text-3xl"
          >
            {copy(language, 'Hablemos', "Let's talk")} ↗
          </Link>
        </div>
        <ContactLinks className="md:col-span-4 md:col-start-9 md:self-end" />
      </Container>
    </section>
  )
}
