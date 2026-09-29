'use client'

import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Container } from '../container'

export function Statement() {
  const { language } = useLanguage()

  return (
    <section aria-label={copy(language, 'Enfoque', 'Approach')} className="bg-foreground text-background">
      <Container className="py-24 md:py-40">
        <div className="eyebrow flex items-center justify-between pb-4 text-background/60">
          <span>
            <span className="text-background">(05)</span> {copy(language, 'Enfoque', 'Approach')}
          </span>
          <span>{copy(language, 'Nota personal', 'A personal note')}</span>
        </div>

        <blockquote className="mt-16 md:mt-28">
          <p className="max-w-[16ch] text-balance text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.98] tracking-[-0.045em] md:ml-[8.33%]">
            {copy(language, 'Diseño para que las cosas sean claras antes de ser llamativas.', 'I design for clarity before spectacle.')}
          </p>
          <footer className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
            <p className="leading-relaxed text-background/70 md:col-span-4 md:col-start-8 md:text-lg">
              {copy(language, 'Me interesa crear soluciones digitales que tengan una lógica detrás, pero que también tengan carácter.', 'I am interested in creating digital solutions with a clear rationale and a character of their own.')}
            </p>
            <cite className="eyebrow not-italic text-background/60 md:col-span-3 md:row-start-1">
              — {site.name}
            </cite>
          </footer>
        </blockquote>
      </Container>
    </section>
  )
}
