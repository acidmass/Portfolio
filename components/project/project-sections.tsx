'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import type { Project, ProjectMedia } from '@/lib/projects'
import { Container } from '../container'
import { Paragraphs, Pending } from '../pending'
import { ProjectImage } from '../project-image'

const hintFor = (slug: string, field: string) => `lib/projects.ts → ${slug} → ${field}`

export function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  const { language } = useLanguage()
  const englishTitles: Record<string, string> = {
    'Proyecto destacado': 'Featured project',
    Formación: 'Education',
    Experiencia: 'Experience',
    Herramientas: 'Tools',
    'Áreas de diseño': 'Design areas',
    'Intereses de diseño': 'Design interests',
    'CV & contacto': 'CV & contact',
    'Sistema visual': 'Visual system',
    'Resultado final': 'Final result',
  }

  return (
    <section aria-labelledby={`s-${number}`} className="border-t border-line">
      <Container className="grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-3">
          <h2 id={`s-${number}`} className="eyebrow flex gap-3 md:sticky md:top-24">
            <span className="flex size-8 items-center justify-center rounded-full bg-brand text-foreground">{number}</span>
            <span>{language === 'en' ? englishTitles[title] ?? title : title}</span>
          </h2>
        </div>
        <div className="md:col-span-9">{children}</div>
      </Container>
    </section>
  )
}

function TextOrPending({ text, label, hint }: { text?: string; label: string; hint: string }) {
  if (text) return <Paragraphs text={text} className="max-w-2xl text-lg leading-relaxed md:text-xl" />
  return (
    <Pending hint={hint} className="max-w-2xl">
      {label}
    </Pending>
  )
}

function MediaGrid({ images }: { images: ProjectMedia[] }) {
  const [first, ...rest] = images
  if (!first) return null
  return (
    <div className="mt-10 space-y-4 md:space-y-8">
      <ProjectImage media={first} aspect="aspect-[16/10]" sizes="(min-width: 768px) 75vw, 100vw" />
      {rest.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
          {rest.map((img) => (
            <ProjectImage key={img.alt} media={img} aspect="aspect-[4/5]" sizes="(min-width: 768px) 37vw, 100vw" />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectHero({ project }: { project: Project }) {
  const { language } = useLanguage()
  const localizedProject = localizeProject(project, language)

  return (
    <section aria-labelledby="project-title">
      <Container className="pb-12 pt-10 md:pb-20 md:pt-14">
        <div className="eyebrow flex items-center justify-between pb-4 text-muted-foreground">
          <Link href="/work" className="link-underline text-foreground">
            ← {copy(language, 'Proyectos', 'Work')}
          </Link>
          <span>01 — {copy(language, 'Proyecto', 'Project')} {project.number}</span>
        </div>
        <h1
          id="project-title"
          className="mt-14 text-6xl font-bold leading-[0.86] sm:text-7xl md:mt-20 md:text-9xl xl:text-[10rem]"
        >
          {localizedProject.title}
        </h1>
        <dl className="mt-12 grid grid-cols-2 gap-4 rounded-xl bg-secondary p-6 md:mt-16 md:grid-cols-12 md:gap-8 md:p-8">
          <div className="md:col-span-3">
            <dt className="eyebrow text-muted-foreground">{copy(language, 'Proyecto', 'Project')}</dt>
            <dd className="mt-2 font-mono text-sm">{project.number}</dd>
          </div>
          <div className="md:col-span-5">
            <dt className="eyebrow text-muted-foreground">{copy(language, 'Categorías', 'Categories')}</dt>
            <dd className="mt-2">{localizedProject.categories.join(' · ')}</dd>
          </div>
          <div className="md:col-span-3">
            <dt className="eyebrow text-muted-foreground">{copy(language, 'Año', 'Year')}</dt>
            <dd className="mt-2">{project.year ?? <span className="text-muted-foreground">{copy(language, '[Pendiente]', '[Pending]')}</span>}</dd>
          </div>
        </dl>
      </Container>
      <Container>
        <ProjectImage media={localizedProject.cover} aspect="aspect-[4/3] md:aspect-[21/10]" priority />
      </Container>
    </section>
  )
}

export function ProjectOverview({ project }: { project: Project }) {
  const { language } = useLanguage()
  const localizedProject = localizeProject(project, language)
  const facts = [
    { label: copy(language, 'Tipo de proyecto', 'Project type'), value: localizedProject.type },
    { label: copy(language, 'Cronología', 'Timeline'), value: localizedProject.timeline },
  ]
  return (
    <Section number="02" title={copy(language, 'Resumen', 'Overview')}>
      {localizedProject.description ? (
        <p className="max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
          {localizedProject.description}
        </p>
      ) : (
        <Pending hint={hintFor(project.slug, 'description')} className="max-w-2xl">
          {copy(language, 'Descripción breve del proyecto.', 'A short overview of the project.')}
        </Pending>
      )}
      <dl className="mt-12 grid gap-8 sm:grid-cols-2">
        {facts.filter((fact) => fact.value).map((f) => (
          <div key={f.label} className="pt-4">
            <dt className="eyebrow text-muted-foreground">{f.label}</dt>
            <dd className="mt-3">{f.value}</dd>
          </div>
        ))}
      </dl>
      {localizedProject.deliverables && localizedProject.deliverables.length > 0 && (
        <div className="mt-10 pt-4">
          <p className="eyebrow text-muted-foreground">{copy(language, 'Entregables', 'Deliverables')}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">{localizedProject.deliverables.join(' · ')}</p>
        </div>
      )}
    </Section>
  )
}

export function ProjectBody({ project }: { project: Project }) {
  const { language } = useLanguage()
  const localizedProject = localizeProject(project, language)
  const { content: c, slug } = localizedProject
  const vs = [
    { title: copy(language, 'Tipografía', 'Typography'), value: c.visualSystem.typography, field: 'visualSystem.typography' },
    { title: 'Color', value: c.visualSystem.color, field: 'visualSystem.color' },
    { title: copy(language, 'Componentes', 'Components'), value: c.visualSystem.components, field: 'visualSystem.components' },
    { title: copy(language, 'Sistema gráfico', 'Graphic system'), value: c.visualSystem.graphicSystem, field: 'visualSystem.graphicSystem' },
  ]

  return (
    <>
      <Section number="03" title="Context">
        <TextOrPending text={c.context} label={copy(language, 'Contexto del proyecto: punto de partida, cliente o encargo, público.', 'Project context: starting point, client or brief, and audience.')} hint={hintFor(slug, 'content.context')} />
      </Section>
      <Section number="04" title="Challenge">
        <TextOrPending text={c.challenge} label={copy(language, 'Reto principal del proyecto y objetivos.', 'Main project challenge and objectives.')} hint={hintFor(slug, 'content.challenge')} />
      </Section>
      <Section number="05" title="Process">
        <TextOrPending text={c.process.text} label={copy(language, 'Proceso de trabajo: investigación, wireframes, iteraciones.', 'Work process: research, wireframes and iterations.')} hint={hintFor(slug, 'content.process.text')} />
        <MediaGrid images={c.process.images} />
      </Section>
      <Section number="06" title="Design">
        <TextOrPending text={c.design.text} label={copy(language, 'Explicación de las decisiones de diseño.', 'An explanation of the design decisions.')} hint={hintFor(slug, 'content.design.text')} />
        <MediaGrid images={c.design.images} />
      </Section>
      <Section number="07" title={copy(language, 'Sistema visual', 'Visual system')}>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {vs.map((item) => (
            <div key={item.title} className="pt-4">
              <h3 className="text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
              <div className="mt-4">
                {item.value ? (
                  <Paragraphs text={item.value} className="leading-relaxed text-muted-foreground" />
                ) : (
                  <p className="font-mono text-xs text-muted-foreground">[{copy(language, 'Pendiente', 'Pending')} · {item.field}]</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <MediaGrid images={c.visualSystem.images} />
      </Section>
      <Section number="08" title={copy(language, 'Responsive / Interacción', 'Responsive / Interaction')}>
        <TextOrPending text={c.responsive.text} label={copy(language, 'Comportamiento responsive e interacciones.', 'Responsive behavior and interactions.')} hint={hintFor(slug, 'content.responsive.text')} />
        <MediaGrid images={c.responsive.images} />
      </Section>
      <Section number="09" title={copy(language, 'Resultado final', 'Final result')}>
        <MediaGrid images={c.result.images} />
      </Section>
    </>
  )
}

export function NextProject({ project }: { project: Project }) {
  const { language } = useLanguage()
  const localizedProject = localizeProject(project, language)

  return (
    <section aria-label="Siguiente proyecto" className="bg-foreground text-background">
      <Container className="py-20 md:py-32">
        <p className="eyebrow flex gap-3 text-background/60">
          <span>10</span>
          <span className="text-background">{copy(language, 'Siguiente proyecto', 'Next project')}</span>
        </p>
        <Link href={`/projects/${project.slug}`} className="group mt-10 flex items-end justify-between gap-6 md:mt-16">
          <span>
            <span className="block font-mono text-sm text-background/60">{project.number}</span>
            <span className="mt-3 block text-5xl font-bold leading-[0.86] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-3 sm:text-6xl md:text-8xl xl:text-[8rem]">
              {localizedProject.title}
            </span>
            <span className="eyebrow mt-5 block text-background/60">{localizedProject.categories.join(' · ')}</span>
          </span>
          <span aria-hidden className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-4xl text-foreground transition-transform duration-500 group-hover:translate-x-2 md:size-20 md:text-6xl">
            →
          </span>
        </Link>
      </Container>
    </section>
  )
}
