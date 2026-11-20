import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactLinks } from '@/components/contact-links'
import { Container } from '@/components/container'
import { ProjectImage } from '@/components/project-image'
import { Section } from '@/components/project/project-sections'
import { LocalizedText } from '@/components/localized-text'
import { about, capabilities, site } from '@/lib/site'
import { projects } from '@/lib/projects'
import { capabilityTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Carmen María Pérez, diseñadora junior de UI/UX y diseño visual en Murcia. Formación, experiencia en diseño y desarrollo web, y herramientas.',
}

export default function AboutPage() {
  const featuredProject = projects.find((project) => project.slug === 'murcia-pedalea')
  return (
    <>
      <section className="bg-brand">
        <Container className="pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="eyebrow flex items-center justify-between gap-4 pb-4 text-foreground/60">
            <span><LocalizedText es="Sobre mí" en="About" /></span>
            <span><LocalizedText es={site.location} en="Murcia · Spain" /></span>
          </div>
          <h1 className="mt-14 text-6xl font-bold leading-[0.86] sm:text-7xl md:mt-20 md:text-9xl xl:text-[10rem]">
            <LocalizedText es="Sobre mí" en="About me" />
          </h1>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
            <ProjectImage
              media={{ src: about.photo, alt: `Fotografía profesional de ${site.name}` }}
              aspect="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw"
              priority className="md:col-span-5"
            />
            <div className="md:col-span-6 md:col-start-7 md:self-center">
              <p className="text-balance text-2xl font-semibold leading-snug lg:text-3xl">
                <LocalizedText es={about.intro} en={about.introEn} />
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                <LocalizedText es={about.approach} en={about.approachEn} />
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                <LocalizedText es={about.goal} en={about.goalEn} />
              </p>
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-citrus px-4 py-2 text-sm font-medium">
                <span aria-hidden className="size-2 rounded-full bg-foreground" />
                <LocalizedText es={site.availability} en="Available for junior opportunities" />
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section number="01" title="Experiencia">
        <ul className="divide-y divide-line">
          {about.experience.map((item) => (
            <li key={item.title} className="py-7 first:pt-0">
              <h3 className="text-2xl font-semibold md:text-3xl">
                <LocalizedText es={item.title} en={item.titleEn} />
              </h3>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{item.detail}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                <LocalizedText es={item.description} en={item.descriptionEn} />
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="02" title="Formación">
        <ul className="divide-y divide-line">
          {about.education.map((item) => (
            <li key={item.title} className="py-6 first:pt-0">
              <h3 className="max-w-3xl text-xl font-medium leading-snug md:text-2xl">
                <LocalizedText es={item.title} en={item.titleEn} />
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                <LocalizedText es={item.detail} en={item.detailEn} />
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">
          <LocalizedText es={about.languages} en={about.languagesEn} />
        </p>
      </Section>

      <Section number="03" title="Áreas de diseño">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {capabilities.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}><LocalizedText es={item} en={capabilityTranslations[item] ?? item} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section number="04" title="Herramientas">
        <ul className="flex flex-wrap gap-3">
          {about.tools.map((tool) => (
            <li key={tool} className="rounded-full border border-line px-5 py-3">{tool}</li>
          ))}
        </ul>
      </Section>

      {featuredProject && (
        <Section number="05" title="Proyecto destacado">
          <div className="grid gap-8 lg:grid-cols-2">
            <Link href={`/projects/${featuredProject.slug}`} className="group block">
              <ProjectImage media={featuredProject.cover} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" interactive />
            </Link>
            <div className="self-center">
              <h3 className="text-3xl font-semibold md:text-4xl">{featuredProject.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                <LocalizedText es={featuredProject.description ?? ''} en={featuredProject.en?.description ?? ''} />
              </p>
              <Link href={`/projects/${featuredProject.slug}`} className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 font-semibold">
                <LocalizedText es="Ver proyecto" en="View project" />
              </Link>
            </div>
          </div>
        </Section>
      )}
      <Section number="06" title="CV y contacto"><ContactLinks className="max-w-2xl" /></Section>
    </>
  )
}
