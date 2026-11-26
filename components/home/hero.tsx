'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { getProject } from '@/lib/projects'
import { site } from '@/lib/site'
import { Container } from '../container'
import { ProjectImage } from '../project-image'

export function Hero() {
  const { language } = useLanguage()
  const highlight = getProject('bruma')

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-[#19151d] text-[#faf5f0]">
      <Container className="py-8 md:py-12">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-white/25 pb-4 font-mono text-xs uppercase tracking-wider">
          <span>{copy(language, 'Diseño UI/UX y web', 'UI/UX and web design')}</span>
          <span className="text-brand">{copy(language, site.availability, 'Available for junior roles')}</span>
        </div>
        <div className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_1fr] md:gap-12 md:py-16">
          <div>
            <h1 id="hero-title" className="text-[clamp(3.5rem,10vw,9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
              <span className="block">Carmen</span>
              <span className="block">María</span>
              <span className="block text-brand">Pérez</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed md:text-lg">
              {copy(language, 'De la Historia del Arte al diseño de interfaces. Diseño webs, publicaciones digitales y experiencias interactivas.', 'From art history to interface design. I design websites, digital publications and interactive experiences.')}
            </p>
            <Link href="#selected-work" className="mt-6 inline-block border-b border-brand pb-1 text-base font-semibold text-brand hover:text-white">
              {copy(language, 'Explorar proyectos', 'Explore projects')}
            </Link>
          </div>
          {highlight && (
            <Link href={`/projects/${highlight.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
              <ProjectImage media={highlight.cover} aspect="aspect-[4/3]" sizes="(min-width: 768px) 46vw, 95vw" priority interactive />
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-white/25 pt-3">
                <span className="text-2xl font-semibold">{highlight.title}</span>
                <span className="font-mono text-sm text-brand">{copy(language, 'Revista cultural digital', 'Digital culture magazine')}</span>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}
