'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { featuredProjects, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { Container, Eyebrow } from '../container'
import { ProjectImage } from '../project-image'

export function SelectedWork() {
  const { language } = useLanguage()

  return (
    <section id="selected-work" aria-labelledby="selected-title">
      <Container className="py-20 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow index="02">{copy(language, 'Proyectos seleccionados', 'Selected projects')}</Eyebrow>
            <h2
              id="selected-title"
              className="mt-6 text-5xl font-medium tracking-[-0.045em] md:text-8xl"
            >
              {copy(language, 'Trabajo seleccionado', 'Selected work')}
            </h2>
          </div>
          <Link href="/work" className="link-underline self-start text-sm md:self-auto">
            {copy(language, 'Ver todos los proyectos', 'View all projects')} →
          </Link>
        </div>

        <ol className="mt-16 space-y-24 md:mt-24 md:space-y-40">
          {featuredProjects.map((project, i) => (
            <li key={project.slug}>
              <FeaturedEntry project={localizeProject(project, language)} layout={(['a', 'b', 'c'] as const)[i % 3]} language={language} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function FeaturedEntry({ project, layout, language }: { project: Project; layout: 'a' | 'b' | 'c'; language: 'es' | 'en' }) {
  if (layout === 'c') {
    return (
      <Link href={`/projects/${project.slug}`} className="group block">
        <ProjectImage media={project.cover} aspect="aspect-[16/9]" interactive />
        <div className="mt-6 grid gap-6 pt-4 md:grid-cols-12 md:gap-8">
          <span className="font-mono text-sm md:col-span-1">{project.number}</span>
          <h3 className="text-4xl font-medium tracking-[-0.035em] md:col-span-5 md:text-6xl">{project.title}</h3>
          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow text-muted-foreground">{project.categories.join(' · ')}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
            <ViewLabel language={language} />
          </div>
        </div>
      </Link>
    )
  }

  const reversed = layout === 'b'

  return (
    <Link href={`/projects/${project.slug}`} className="group grid gap-6 md:grid-cols-12 md:gap-8">
      <ProjectImage
        media={project.cover}
        aspect="aspect-[16/9]"
        sizes="(min-width: 768px) 66vw, 100vw"
        interactive
        className={cn(reversed ? 'md:order-2 md:col-span-6 md:col-start-7' : 'md:col-span-8')}
      />
      <div
        className={cn(
          'md:self-end',
          reversed ? 'md:order-1 md:col-span-4 md:col-start-2 md:row-start-1' : 'md:col-span-4',
        )}
      >
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <span className="font-mono text-sm">{project.number}</span>
          <span className="eyebrow text-muted-foreground">{project.categories.join(' · ')}</span>
        </div>
        <h3 className="mt-6 text-4xl font-medium tracking-[-0.035em] md:mt-10 md:text-6xl">{project.title}</h3>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ViewLabel language={language} />
      </div>
    </Link>
  )
}

function ViewLabel({ language }: { language: 'es' | 'en' }) {
  return (
    <span className="link-underline mt-6 inline-block text-sm group-hover:[background-size:100%_1px]">
      {copy(language, 'Ver proyecto', 'View project')} →
    </span>
  )
}
