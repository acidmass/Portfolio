'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { featuredProjects, type Project } from '@/lib/projects'
import { Container, Eyebrow } from '../container'
import { ProjectImage } from '../project-image'

export function SelectedWork() {
  const { language } = useLanguage()

  return (
    <section id="selected-work" aria-labelledby="selected-title" className="border-t border-line">
      <Container className="py-28 md:py-40">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow index="02">{copy(language, 'Proyectos seleccionados', 'Selected projects')}</Eyebrow>
            <h2
              id="selected-title"
              className="mt-6 text-5xl font-medium leading-none md:text-8xl"
            >
              {copy(language, 'Trabajo seleccionado', 'Selected work')}
            </h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-3 self-start rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background md:self-auto">
            {copy(language, 'Ver todos los proyectos', 'View all projects')} ↗
          </Link>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-24 md:gap-x-10 md:gap-y-24">
          {featuredProjects.map((project, i) => (
            <li key={project.slug}>
              <FeaturedEntry project={localizeProject(project, language)} language={language} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function FeaturedEntry({ project, language }: { project: Project; language: 'es' | 'en' }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <ProjectImage
        media={project.cover}
        aspect="aspect-[4/3]"
        sizes="(min-width: 640px) 50vw, 100vw"
        interactive
      />
      <div className="mt-5">
        <p className="text-xs font-medium text-muted-foreground">
          {project.number} · {project.categories.join(' · ')}
        </p>
        <div className="mt-3 flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold leading-tight md:text-4xl">{project.title}</h3>
          <span aria-label={copy(language, 'Ver proyecto', 'View project')} className="flex size-10 items-center justify-center rounded-full bg-brand text-lg transition-transform duration-300 group-hover:rotate-45">↗</span>
        </div>
      </div>
    </Link>
  )
}
