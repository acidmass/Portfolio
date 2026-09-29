import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Eyebrow } from '@/components/container'
import { ProjectImage } from '@/components/project-image'
import { LocalizedText } from '@/components/localized-text'
import { projectDescriptions } from '@/lib/i18n'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Proyectos de UI/UX, diseño web, branding y diseño visual de Carmen María Pérez.',
}

export default function WorkPage() {
  return (
    <Container className="pb-24 pt-10 md:pb-40 md:pt-14">
      <div className="eyebrow flex items-center justify-between pb-4 text-muted-foreground">
        <span><LocalizedText es="Índice de proyectos" en="Project index" /></span>
        <span>({String(projects.length).padStart(2, '0')})</span>
      </div>
      <h1 className="mt-16 text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.9] tracking-[-0.05em] md:mt-24">
        <LocalizedText es="Proyectos" en="Work" />
      </h1>

      <ol className="mt-20 grid gap-x-8 gap-y-20 md:mt-32 md:grid-cols-2 md:gap-y-32">
        {projects.map((project, i) => (
          <li key={project.slug} className={cn(i % 2 === 1 && 'md:mt-40')}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <ProjectImage
                media={project.cover}
                aspect={i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/3]'}
                sizes="(min-width: 768px) 50vw, 100vw"
                interactive
              />
              <div className="mt-5 flex items-baseline justify-between gap-4 pt-4">
                <span className="font-mono text-sm">{project.number}</span>
                <Eyebrow>
                  <LocalizedText
                    es={project.categories.join(' · ')}
                    en={(project.en?.categories ?? project.categories).join(' · ')}
                  />
                </Eyebrow>
              </div>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] md:text-5xl">{project.title}</h2>
              {project.description && (
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  <LocalizedText
                    es={project.description}
                    en={project.en?.description ?? projectDescriptions[project.slug] ?? project.description}
                  />
                </p>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  )
}
