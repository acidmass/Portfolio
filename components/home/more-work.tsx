'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { moreProjects } from '@/lib/projects'
import { Container, Eyebrow } from '../container'

export function MoreWork() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="more-title" className="border-t border-line">
      <Container className="grid gap-10 py-28 md:grid-cols-12 md:gap-8 md:py-40">
        <div className="md:col-span-3">
          <Eyebrow>{copy(language, 'Otros proyectos', 'Other projects')}</Eyebrow>
          <h2 id="more-title" className="mt-6 text-3xl font-medium md:text-4xl">
            {copy(language, 'Más proyectos', 'More work')}
          </h2>
        </div>

        <ul className="md:col-span-8 md:col-start-5">
          {moreProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 border-t border-line py-6 md:grid-cols-[minmax(0,1fr)_12rem_auto] md:gap-x-6 md:py-8 lg:grid-cols-[minmax(0,1fr)_16rem_auto] lg:gap-x-8"
              >
                <span className="min-w-0 text-2xl font-semibold transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-2 md:text-4xl">
                  {project.title}
                </span>
                <span className="eyebrow col-start-1 row-start-2 text-muted-foreground md:col-start-2 md:row-start-1">
                  {localizeProject(project, language).categories.join(' · ')}
                </span>
                <span
                  aria-hidden
                  className="col-start-2 row-start-1 flex size-9 items-center justify-center rounded-full bg-brand transition-transform duration-300 group-hover:rotate-45 md:col-start-3"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
