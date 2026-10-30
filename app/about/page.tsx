import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactLinks } from '@/components/contact-links'
import { Container } from '@/components/container'
import { Pending } from '@/components/pending'
import { ProjectImage } from '@/components/project-image'
import { Section } from '@/components/project/project-sections'
import { LocalizedText } from '@/components/localized-text'
import { about, capabilities, site } from '@/lib/site'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sobre Carmen María Pérez, diseñadora junior UI/UX & Visual con formación en Diseño Gráfico Interactivo e Historia del Arte.',
}

export default function AboutPage() {
  const featuredProject = projects.find((project) => project.slug === 'murcia-pedalea')
  const capabilityTranslations: Record<string, string> = {
    Visual: 'Visual',
    Digital: 'Digital',
    'Arquitectura de información': 'Information architecture',
    Prototipos: 'Prototypes',
    'Dirección de arte': 'Art direction',
    'Branding digital': 'Digital branding',
    'Sistemas visuales': 'Visual systems',
    Tipografía: 'Typography',
    'Jerarquía visual': 'Visual hierarchy',
    'Producto digital': 'Digital products',
    Interacción: 'Interaction',
    Microinteracciones: 'Microinteractions',
  }

  return (
    <>
      <section className="bg-brand">
        <Container className="pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="eyebrow flex items-center justify-between pb-4 text-foreground/60">
          <span><LocalizedText es="Sobre mí" en="About" /></span>
          <span><LocalizedText es={site.location} en="Murcia · Spain" /></span>
        </div>
        <h1 className="mt-14 text-6xl font-bold leading-[0.86] sm:text-7xl md:mt-20 md:text-9xl xl:text-[10rem]">
          <LocalizedText es="Sobre mí" en="About me" />
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <ProjectImage
            media={{ src: about.photo, alt: `Fotografía profesional de ${site.name}` }}
            aspect="aspect-[4/5]"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
            className="md:col-span-5"
          />
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="text-balance text-2xl font-semibold leading-snug md:text-4xl">
              <LocalizedText
                es={about.intro}
                en="I am Carmen, a UI/UX and visual designer with a background in Interactive Graphic Design and Art History. I am especially interested in the intersection of digital products, web design and visual direction."
              />
            </p>
            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-citrus px-4 py-2 text-sm font-medium">
              <span aria-hidden className="size-2 rounded-full bg-foreground" />
              <LocalizedText es={site.availability} en="Available for junior opportunities" />
            </p>
          </div>
        </div>
      </Container>
      </section>

      {featuredProject && (
        <Section number="01" title="Proyecto destacado">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <Link href={`/projects/${featuredProject.slug}`} className="group block md:col-span-7">
              <ProjectImage
                media={featuredProject.cover}
                aspect="aspect-[16/10]"
                sizes="(min-width: 768px) 60vw, 100vw"
                interactive
              />
            </Link>
            <div className="md:col-span-5 md:self-end">
              <p className="eyebrow text-muted-foreground">
                <LocalizedText
                  es={featuredProject.categories.join(' · ')}
                  en={(featuredProject.en?.categories ?? featuredProject.categories).join(' · ')}
                />
              </p>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                <LocalizedText
                  es={featuredProject.content.challenge ?? featuredProject.description ?? ''}
                  en={featuredProject.en?.challenge ?? featuredProject.en?.description ?? featuredProject.description ?? ''}
                />
              </p>
              <Link href={`/projects/${featuredProject.slug}`} className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-semibold">
                <LocalizedText es="Ver caso de estudio" en="Read case study" /> ↗
              </Link>
            </div>
          </div>
        </Section>
      )}

      <Section number="02" title="Formación">
        <ul>
          {about.education.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 py-5 md:flex-row md:justify-between">
              <span className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                <LocalizedText
                  es={item.title}
                  en={item.title === 'Diseño Gráfico Interactivo' ? 'Interactive Graphic Design' : 'Art History'}
                />
              </span>
              <span className="font-mono text-xs text-muted-foreground md:self-center">
                {item.detail ?? <LocalizedText es="[Pendiente · centro y años]" en="[Pending · institution and years]" />}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="03" title="Experiencia">
        {about.experience.length ? (
          <ul>
            {about.experience.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 py-5 md:flex-row md:justify-between">
                <span className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{item.title}</span>
                {item.detail && <span className="text-muted-foreground">{item.detail}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <Pending hint="lib/site.ts → about.experience" className="max-w-2xl">
            <LocalizedText es="Experiencia profesional, prácticas o colaboraciones." en="Professional experience, internships or collaborations." />
          </Pending>
        )}
      </Section>

      <Section number="04" title="Áreas de diseño">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {capabilities.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                <LocalizedText
                  es={group.title}
                  en={group.title === 'Visual' ? 'Visual' : group.title === 'Digital' ? 'Digital' : group.title}
                />
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>
                    <LocalizedText es={item} en={capabilityTranslations[item] ?? item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section number="05" title="Intereses de diseño">
        <ul className="grid gap-4 sm:grid-cols-3">
          {about.interests.map((item, i) => (
            <li key={item} className="pt-4">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-6 text-2xl font-medium tracking-[-0.02em]">
                <LocalizedText
                  es={item}
                  en={item === 'Producto digital' ? 'Digital products' : item === 'Diseño web' ? 'Web design' : 'Visual direction'}
                />
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="06" title="CV & contacto">
        <ContactLinks className="max-w-2xl" />
      </Section>
    </>
  )
}
