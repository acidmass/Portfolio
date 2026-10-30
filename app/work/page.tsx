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
    <>
      <section className="bg-brand">
        <Container className="pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="eyebrow flex items-center justify-between pb-4 text-foreground/60">
            <span><LocalizedText es="Índice de proyectos" en="Project index" /></span>
            <span>({String(projects.length).padStart(2, '0')})</span>
          </div>
          <h1 className="mt-14 text-6xl font-bold leading-[0.86] sm:text-7xl md:mt-20 md:text-9xl xl:text-[10rem]">
            <LocalizedText es="Proyectos" en="Work" />
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/75">
            <LocalizedText es="Ideas que toman forma en marcas, productos digitales y experiencias web." en="Ideas brought to life through brands, digital products and web experiences." />
          </p>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <ol className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {projects.map((project, i) => (
            <li key={project.slug} className={cn(i % 2 === 1 && 'md:mt-28')}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <ProjectImage
                media={project.cover}
                aspect={i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/3]'}
                sizes="(min-width: 768px) 50vw, 100vw"
                interactive
              />
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                <Eyebrow className="text-right">
                  <LocalizedText
                    es={project.categories.join(' · ')}
                    en={(project.en?.categories ?? project.categories).join(' · ')}
                  />
                </Eyebrow>
              </div>
              <h2 className="mt-4 flex items-center justify-between gap-4 text-3xl font-semibold md:text-5xl">
                {project.title}<span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-citrus text-lg transition-transform group-hover:rotate-45">↗</span>
              </h2>
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
    </>
  )
}
