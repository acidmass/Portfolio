'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import type { Project, ProjectMedia } from '@/lib/projects'
import { site } from '@/lib/site'
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
          <span>{copy(language, 'Proyecto', 'Project')}</span>
        </div>
        <h1 id="project-title" className="mt-14 break-words text-5xl font-bold leading-[0.95] sm:text-7xl md:mt-20 md:text-8xl xl:text-[9rem]">
          {p.title}
        </h1>
        {p.description && <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">{p.description}</p>}
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
      {p.cover.src && <Container><ProjectImage media={p.cover} aspect="aspect-[16/10] md:aspect-[16/9]" priority /></Container>}
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
  const visibleFacts = facts.filter(fact => fact.value?.trim())
  const links = (p.links ?? []).filter(link => {
    try {
      return Boolean(link.label.trim()) && ['http:', 'https:'].includes(new URL(link.href).protocol)
    } catch {
      return false
    }
  })
  if (!visibleFacts.length && !links.length && !p.deliverables?.length) return null
  return (
    <Section number="02" title={copy(language, 'El proyecto', 'The project')}>
      {!!visibleFacts.length && <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {visibleFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow text-muted-foreground">{fact.label}</dt>
            <dd className="mt-3 text-lg leading-relaxed">{fact.value}</dd>
          </div>
        ))}
      </dl>}
      {!!p.deliverables?.length && (
        <div className="mt-10 border-t border-line pt-8">
          <p className="eyebrow text-muted-foreground">{copy(language, 'Qué incluye', 'Deliverables')}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {p.deliverables.map((item) => <li key={item} className="rounded-full bg-secondary px-4 py-2 text-sm">{item}</li>)}
          </ul>
        </div>
      )}
      {!!links.length && (
        <div className="mt-8 flex flex-wrap gap-4">
          {links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-colors hover:bg-brand-ink">{link.label}</a>)}
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
    if (!text?.trim() && !images.some((image) => image.src)) return
    sections.push({ title, body: <>
      {text && <Paragraphs text={text} className="max-w-3xl text-lg leading-relaxed md:text-xl" />}
      <MediaGrid images={images} />
    </> })
  }
  addText(copy(language, 'Punto de partida', 'Starting point'), c.context)
  addText(copy(language, 'El reto', 'The challenge'), c.challenge)
  addText(copy(language, 'Metodología', 'Approach'), c.process.text, c.process.images)
  addText(copy(language, 'Decisiones de diseño', 'Design decisions'), c.design.text, c.design.images)
  const visualItems = [
    { title: copy(language, 'Tipografía', 'Typography'), value: c.visualSystem.typography },
    { title: copy(language, 'Color', 'Colour'), value: c.visualSystem.color },
    { title: copy(language, 'Componentes', 'Components'), value: c.visualSystem.components },
    { title: copy(language, 'Sistema gráfico', 'Graphic system'), value: c.visualSystem.graphicSystem },
  ].filter((item) => item.value)
  if (visualItems.length || c.visualSystem.images.some((image) => image.src)) {
    sections.push({ title: copy(language, 'Sistema visual', 'Visual system'), body: <>
      {!!visualItems.length && <div className="grid gap-8 sm:grid-cols-2">
        {visualItems.map((item) => <div key={item.title}>
          <h3 className="text-xl font-medium">{item.title}</h3>
          <Paragraphs text={item.value!} className="mt-4 leading-relaxed text-muted-foreground" />
        </div>)}
      </div>}
      <MediaGrid images={c.visualSystem.images} />
    </> })
  }
  addText(copy(language, 'Adaptación e interacción', 'Adaptation and interaction'), c.responsive.text, c.responsive.images)
  addText(copy(language, 'Solución', 'Solution'), c.solution?.text, c.solution?.images)
  addText(copy(language, 'Resultado', 'Outcome'), c.result.text, c.result.images)
  addText(copy(language, 'Aprendizajes', 'Lessons learned'), c.learnings?.text, c.learnings?.images)
  return <>{sections.map((section, index) => <Section key={section.title} number={String(index + 3).padStart(2, '0')} title={section.title}>{section.body}</Section>)}</>
}

export function NextProject({ project }: { project: Project }) {
  const { language } = useLanguage()
  const p = localizeProject(project, language)
  return (
    <section aria-label={copy(language, 'Siguiente proyecto', 'Next project')} className="bg-foreground text-background">
      <Container className="py-20 md:py-32">
        <p className="eyebrow text-background/80">{copy(language, 'Siguiente proyecto', 'Next project')}</p>
        <Link href={`/projects/${p.slug}`} className="group mt-10 block md:mt-16">
          <span className="mt-4 block break-words text-4xl font-bold leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl md:text-8xl">{p.title}</span>
          <span className="eyebrow mt-5 block text-background/80">{p.categories.join(' · ')}</span>
        </Link>
      </Container>
    </section>
  )
}

export function ProjectContactCta() {
  const { language } = useLanguage()
  return (
    <section aria-labelledby="project-contact-title" className="bg-[#DCE5FF] text-[#00246E]">
      <Container className="py-16 md:py-24">
        <h2 id="project-contact-title" className="max-w-[19ch] text-4xl font-semibold leading-tight md:text-5xl">
          {copy(language, '¿Te gustaría que aportara a tu equipo?', 'Could I contribute to your team?')}
        </h2>
        <p className="mt-4 max-w-[55ch] leading-relaxed text-[#294A8C]">
          {copy(language, 'Estoy buscando oportunidades junior en UI/UX, diseño web y diseño visual.', 'I’m looking for junior opportunities in UI/UX, web and visual design.')}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center rounded-full bg-[#002FA7] px-6 font-semibold text-white">
            {copy(language, 'Contactar', 'Get in touch')}
          </a>
          {site.cv.available && (
            <a href={site.cv.href} download className="inline-flex min-h-12 items-center rounded-full border border-[#002FA7] px-6 font-semibold text-[#002FA7]">
              {copy(language, 'Descargar CV', 'Download CV')}
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
