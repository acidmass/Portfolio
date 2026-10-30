import type { Metadata } from 'next'
import { ContactLinks } from '@/components/contact-links'
import { Container } from '@/components/container'
import { LocalizedText } from '@/components/localized-text'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacta con Carmen María Pérez para oportunidades junior, proyectos web, UI/UX o colaboraciones.',
}

export default function ContactPage() {
  return (
    <section className="bg-citrus">
      <Container className="pb-24 pt-10 md:pb-40 md:pt-14">
        <div className="eyebrow flex items-center justify-between pb-4 text-foreground/60">
          <span><LocalizedText es="Contacto" en="Contact" /></span>
          <span><LocalizedText es={site.location} en="Murcia · Spain" /></span>
        </div>
        <h1 className="mt-14 max-w-[12ch] text-6xl font-bold leading-[0.86] sm:text-7xl md:mt-20 md:text-9xl xl:text-[9rem]">
          <LocalizedText es="Trabajemos juntos." en="Let's work together." />
        </h1>
        <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-lg leading-relaxed md:text-xl">
              <LocalizedText
                es="Si buscas incorporar a una diseñadora junior, tienes un proyecto web o de UI/UX, o te apetece colaborar, escríbeme. Estaré encantada de hablar contigo."
                en="If you are looking for a junior designer, have a web or UI/UX project, or would like to collaborate, get in touch. I would love to hear from you."
              />
            </p>
            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-background px-4 py-2 text-sm">
              <span aria-hidden className="size-2 rounded-full bg-foreground" />
              <LocalizedText es={site.availability} en="Available for junior opportunities" />
            </p>
          </div>
          <ContactLinks className="md:col-span-6 md:col-start-7" />
        </div>
      </Container>
    </section>
  )
}
