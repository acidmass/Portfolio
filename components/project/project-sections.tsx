'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import type { Project, ProjectMedia } from '@/lib/projects'
import { Container } from '../container'
import { Paragraphs } from '../pending'
import { ProjectImage } from '../project-image'

export function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  const { language } = useLanguage()
  const englishTitles: Record<string, string> = {
    'Proyecto destacado': 'Featured project', Formación: 'Education',
    Experiencia: 'Experience', Herramientas: 'Tools', 'Áreas de diseño': 'Design areas',
    'CV y contacto': 'CV and contact',
  }
  return (
    <section aria-labelledby={`s-${number}`} className="border-t border-line">
      <Container className="grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-3">
          <h2 id={`s-${number}`} className="eyebrow flex items-center gap-3 md:sticky md:top-24">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-foreground">{number}</span>
            <span>{language === 'en' ? englishTitles[title] ?? title : title}</span>
          </h2>
        </div>
        <div className="min-w-0 md:col-span-9">{children}</div>
      </Container>
    </section>
  )
}

function MediaGrid({ images }: { images: ProjectMedia[] }) {
  const [first, ...rest] = images.filter((image) => image.src)
  if (!first) return null
  return (
    <div className="mt-10 space-y-6 md:space-y-8">
      <ProjectImage media={first} aspect="aspect-[16/9]" sizes="(min-width: 768px) 75vw, 100vw" />
      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {rest.map((image) => (
            <ProjectImage key={image.src} media={image} aspect="aspect-[4/3]" sizes="(min-width: 768px) 37vw, 100vw" />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectHero({ project }: { project: Project }) {
  const { language } = useLanguage()
  const p = localizeProject(project, language)
  return (
    <section aria-labelledby="project-title">
      <Container className="pb-12 pt-10 md:pb-20 md:pt-14">
        <div className="eyebrow flex items-center justify-between gap-4 pb-4 text-muted-foreground">
          <Link href="/work" className="link-underline text-foreground">{copy(language, 'Todos los proyectos', 'All projects')}</Link>
          <span>{copy(language, 'Proyecto', 'Project')} {p.number}</span>
        </div>
        <h1 id="project-title" className="mt-14 break-words text-5xl font-bold leading-[0.95] sm:text-7xl md:mt-20 md:text-8xl xl:text-[9rem]">
          {p.title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">{p.description}</p>
        <dl className="mt-10 grid gap-6 rounded-xl bg-secondary p-6 sm:grid-cols-[1fr_auto] md:mt-14 md:p-8">
          <div>
            <dt className="eyebrow text-muted-foreground">{copy(language, 'Áreas', 'Areas')}</dt>
            <dd className="mt-2">{p.categories.join(' · ')}</dd>
          </div>
          {p.year && <div>
            <dt className="eyebrow text-muted-foreground">{copy(language, 'Año', 'Year')}</dt>
            <dd className="mt-2">{p.year}</dd>
          </div>}
        </dl>
      </Container>
      <Container><ProjectImage media={p.cover} aspect="aspect-[16/10] md:aspect-[16/9]" priority /></Container>
    </section>
  )
}

export function ProjectOverview({ project }: { project: Project }) {
  const { language } = useLanguage()
  const p = localizeProject(project, language)
  const facts = [
    { label: copy(language, 'Mi aportación', 'My contribution'), value: p.role },
    { label: copy(language, 'Contexto del trabajo', 'Project setting'), value: p.timeline },
    { label: copy(language, 'Tipo de proyecto', 'Project type'), value: p.type },
    { label: copy(language, 'Herramientas', 'Tools'), value: p.tools.length ? p.tools.join(' · ') : undefined },
  ]
  return (
    <Section number="02" title={copy(language, 'El proyecto', 'The project')}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {facts.filter((fact) => fact.value).map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow text-muted-foreground">{fact.label}</dt>
            <dd className="mt-3 text-lg leading-relaxed">{fact.value}</dd>
          </div>
        ))}
      </dl>
      {!!p.deliverables?.length && (
        <div className="mt-10 border-t border-line pt-8">
          <p className="eyebrow text-muted-foreground">{copy(language, 'Qué incluye', 'Deliverables')}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {p.deliverables.map((item) => <li key={item} className="rounded-full bg-secondary px-4 py-2 text-sm">{item}</li>)}
          </ul>
        </div>
      )}
      {!!p.links?.length && (
        <div className="mt-8 flex flex-wrap gap-4">
          {p.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-colors hover:bg-brand-ink">{link.label}</a>)}
        </div>
      )}
    </Section>
  )
}

export function ProjectBody({ project }: { project: Project }) {
  const { language } = useLanguage()
  const { content: c } = localizeProject(project, language)
  const sections: { title: string; body: ReactNode }[] = []
  const addText = (title: string, text?: string, images: ProjectMedia[] = []) => {
    if (!text && !images.some((image) => image.src)) return
    sections.push({ title, body: <>
      {text && <Paragraphs text={text} className="max-w-3xl text-lg leading-relaxed md:text-xl" />}
      <MediaGrid images={images} />
    </> })
  }
  addText(copy(language, 'Punto de partida', 'Starting point'), c.context)
  addText(copy(language, 'El reto', 'The challenge'), c.challenge)
  addText(copy(language, 'Enfoque y estructura', 'Approach and structure'), c.process.text, c.process.images)
  addText(copy(language, 'Decisiones de diseño', 'Design decisions'), c.design.text, c.design.images)
  const visualItems = [
    { title: copy(language, 'Tipografía', 'Typography'), value: c.visualSystem.typography },
    { title: copy(language, 'Color', 'Colour'), value: c.visualSystem.color },
    { title: copy(language, 'Componentes', 'Components'), value: c.visualSystem.components },
    { title: copy(language, 'Sistema gráfico', 'Graphic system'), value: c.visualSystem.graphicSystem },
  ].filter((item) => item.value)
  if (visualItems.length || c.visualSystem.images.some((image) => image.src)) {
    sections.push({ title: copy(language, 'Sistema visual', 'Visual system'), body: <>
      <div className="grid gap-8 sm:grid-cols-2">
        {visualItems.map((item) => <div key={item.title}>
          <h3 className="text-xl font-medium">{item.title}</h3>
          <Paragraphs text={item.value!} className="mt-4 leading-relaxed text-muted-foreground" />
        </div>)}
      </div>
      <MediaGrid images={c.visualSystem.images} />
    </> })
  }
  addText(copy(language, 'Adaptación e interacción', 'Adaptation and interaction'), c.responsive.text, c.responsive.images)
  addText(copy(language, 'Resultado', 'Outcome'), c.result.text, c.result.images)
  return <>{sections.map((section, index) => <Section key={section.title} number={String(index + 3).padStart(2, '0')} title={section.title}>{section.body}</Section>)}</>
}

export function NextProject({ project }: { project: Project }) {
  const { language } = useLanguage()
  const p = localizeProject(project, language)
  return (
    <section aria-label={copy(language, 'Siguiente proyecto', 'Next project')} className="bg-foreground text-background">
      <Container className="py-20 md:py-32">
        <p className="eyebrow text-background/60">{copy(language, 'Siguiente proyecto', 'Next project')}</p>
        <Link href={`/projects/${p.slug}`} className="group mt-10 block md:mt-16">
          <span className="block font-mono text-sm text-background/60">{p.number}</span>
          <span className="mt-4 block break-words text-4xl font-bold leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl md:text-8xl">{p.title}</span>
          <span className="eyebrow mt-5 block text-background/60">{p.categories.join(' · ')}</span>
        </Link>
      </Container>
    </section>
  )
}
