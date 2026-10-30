'use client'

import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Container } from '../container'

export function Statement() {
  const { language } = useLanguage()

  return (
    <section aria-label={copy(language, 'Enfoque', 'Approach')} className="bg-citrus">
      <Container className="py-28 md:py-40">
        <div className="eyebrow flex items-center justify-between border-t border-foreground/20 pb-4 pt-4 text-foreground/60">
          <span>
            <span className="text-foreground">(05)</span> {copy(language, 'Enfoque', 'Approach')}
          </span>
          <span>{copy(language, 'Nota personal', 'A personal note')}</span>
        </div>

        <blockquote className="mt-16 md:mt-28">
          <p className="max-w-[16ch] text-balance text-5xl font-medium leading-none sm:text-6xl md:ml-[8.33%] md:text-8xl xl:text-[7rem]">
            {copy(language, 'Diseño para que las cosas sean claras antes de ser llamativas.', 'I design for clarity before spectacle.')}
          </p>
          <footer className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
            <p className="leading-relaxed text-foreground/75 md:col-span-4 md:col-start-8 md:text-lg">
              {copy(language, 'Me interesa crear soluciones digitales que tengan una lógica detrás, pero que también tengan carácter.', 'I am interested in creating digital solutions with a clear rationale and a character of their own.')}
            </p>
            <cite className="eyebrow not-italic text-foreground/60 md:col-span-3 md:row-start-1">
              — {site.name}
            </cite>
          </footer>
        </blockquote>
      </Container>
    </section>
  )
}
