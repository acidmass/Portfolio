'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { featuredProjects } from '@/lib/projects'
import { Container } from '../container'
import { ProjectImage } from '../project-image'

export function SelectedWork() {
  const { language } = useLanguage()

  return (
    <section id="selected-work" aria-labelledby="selected-title">
      <Container className="py-14 md:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 id="selected-title" className="text-4xl font-medium tracking-tight md:text-6xl">
            {copy(language, 'Proyectos seleccionados', 'Selected work')}
          </h2>
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline underline-offset-4">
            {copy(language, 'Ver todos', 'View all')} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <ol className="mt-7 grid gap-x-8 gap-y-10 md:mt-10 md:grid-cols-2 md:gap-y-14">
          {featuredProjects.map((source, index) => {
            const project = localizeProject(source, language)
            const first = index === 0
            return (
              <li key={project.slug} className={first ? 'md:col-span-2' : ''}>
                <Link href={`/projects/${project.slug}`} className={`group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${first ? 'md:grid md:grid-cols-[1.35fr_1fr] md:items-center md:gap-12' : ''}`}>
                  <ProjectImage media={project.cover} aspect={first ? 'aspect-[4/3] md:aspect-[3/2]' : 'aspect-[4/3]'} interactive sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className={first ? 'mt-4 md:mt-0' : 'mt-4'}>
                    <p className="text-sm text-muted-foreground">{project.categories.join(' · ')}</p>
                    <h3 className={`mt-2 font-semibold leading-tight tracking-tight ${first ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                      {project.title} <ArrowUpRight aria-hidden className="inline size-[0.65em] align-baseline text-brand-ink" />
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
