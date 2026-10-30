'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { getProject } from '@/lib/projects'
import { site } from '@/lib/site'
import { Container, Eyebrow } from '../container'
import { ProjectImage } from '../project-image'

export function Hero() {
  const { language } = useLanguage()
  const highlight = getProject('dlab')

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-citrus px-4 py-2 text-foreground">
            <span aria-hidden className="size-2 rounded-full bg-foreground" />
            {copy(language, 'Disponible para proyectos', 'Available for projects')}
          </p>
          <Eyebrow>{copy(language, site.location, 'Murcia · Spain')}</Eyebrow>
        </div>

        <h1 id="hero-title" className="mt-14 text-6xl font-bold leading-[0.86] tracking-tight sm:text-7xl md:mt-20 md:text-9xl xl:text-[9rem]">
          <span className="block">{copy(language, 'Diseño digital', 'Digital design')}</span>
          <span className="block text-brand-ink">{copy(language, 'con intención.', 'with intent.')}</span>
        </h1>

        <div className="mt-10 flex flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
            {copy(language, site.role, 'UI/UX and visual designer')}
          </p>
          <Link
            href="#selected-work"
            className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-1 md:self-auto"
          >
            {copy(language, 'Explorar proyectos', 'Explore projects')} <span aria-hidden>↘</span>
          </Link>
        </div>

        {highlight && (
          <Link href={`/projects/${highlight.slug}`} className="group relative mt-12 block overflow-hidden rounded-xl bg-foreground md:mt-16">
            <ProjectImage media={highlight.cover} aspect="aspect-[4/3] md:aspect-[21/9]" sizes="100vw" priority interactive />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8">
              <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold sm:px-5 sm:py-3 sm:text-sm">
                {copy(language, 'Proyecto destacado · DLAB', 'Featured project · DLAB')}
              </span>
              <span aria-hidden className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-xl transition-transform group-hover:rotate-45 sm:size-14">↗</span>
            </div>
          </Link>
        )}
      </Container>
    </section>
  )
}
