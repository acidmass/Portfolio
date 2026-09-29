import type { Metadata } from 'next'
import { ContactLinks } from '@/components/contact-links'
import { Container } from '@/components/container'
import { Pending } from '@/components/pending'
import { ProjectImage } from '@/components/project-image'
import { Section } from '@/components/project/project-sections'
import { LocalizedText } from '@/components/localized-text'
import { about, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sobre Carmen María Pérez, diseñadora junior UI/UX & Visual con formación en Diseño Gráfico Interactivo e Historia del Arte.',
}

export default function AboutPage() {
  return (
    <>
      <Container className="pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="eyebrow flex items-center justify-between pb-4 text-muted-foreground">
          <span><LocalizedText es="Sobre mí" en="About" /></span>
          <span><LocalizedText es={site.location} en="Murcia · Spain" /></span>
        </div>
        <h1 className="mt-16 text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.9] tracking-[-0.05em] md:mt-24">
          <LocalizedText es="Sobre mí" en="About me" />
        </h1>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-8">
          <ProjectImage
            media={{ src: about.photo, alt: `Fotografía profesional de ${site.name}` }}
            aspect="aspect-[4/5]"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
            className="md:col-span-5"
          />
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="text-balance text-2xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
              <LocalizedText
                es={about.intro}
                en="I am Carmen, a UI/UX and visual designer with a background in Interactive Graphic Design and Art History. I am especially interested in the intersection of digital products, web design and visual direction."
              />
            </p>
            <p className="mt-8 flex items-center gap-2.5 text-sm">
              <span aria-hidden className="size-1.5 rounded-full bg-foreground" />
              <LocalizedText es={site.availability} en="Available for junior opportunities" />
            </p>
          </div>
        </div>
      </Container>

      <Section number="01" title="Formación">
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

      <Section number="02" title="Experiencia">
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

      <Section number="03" title="Herramientas">
        {about.tools.length ? (
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xl">
            {about.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        ) : (
          <Pending hint="lib/site.ts → about.tools" className="max-w-2xl">
            <LocalizedText es="Herramientas y software con los que trabajas." en="Tools and software you work with." />
          </Pending>
        )}
      </Section>

      <Section number="04" title="Intereses de diseño">
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

      <Section number="05" title="CV & contacto">
        <ContactLinks className="max-w-2xl" />
      </Section>
    </>
  )
}
