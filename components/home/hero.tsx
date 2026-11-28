'use client'

import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Asterisk, Download } from 'lucide-react'
import { Collectible } from '@/components/collectible'
import { Container } from '@/components/container'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'

export function Hero() {
  const { language } = useLanguage()

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-background">
      <Container className="pb-8 pt-8 md:pb-12 md:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/30 pb-5 text-sm">
          <span className="font-medium">{copy(language, 'Diseño UI/UX · Web · Visual', 'UI/UX · Web · Visual design')}</span>
          <span className="inline-flex items-center gap-2 text-[#E1E9FF]">
            <span aria-hidden className="size-2 rounded-full bg-[#E1E9FF]" />
            {copy(language, 'Disponible para oportunidades junior', 'Available for junior roles')}
          </span>
        </div>

        <div className="grid items-center gap-x-8 gap-y-10 pb-8 pt-10 md:grid-cols-[minmax(0,1.3fr)_minmax(19rem,0.7fr)] md:pb-14 md:pt-14">
          <div className="relative z-10 min-w-0">
            <h1 id="hero-title" className="max-w-[13ch] font-bold leading-[0.91] tracking-[-0.035em] text-[clamp(3.55rem,8vw,6rem)]">
              <span className="block">{copy(language, 'Diseño', 'Digital')}</span>
              <span className="block">{copy(language, 'digital', 'design')}</span>
              <span className="block text-[#D9E5FF]">{copy(language, 'con intención.', 'with intent.')}</span>
            </h1>
            <p className="mt-8 max-w-[43ch] text-lg leading-relaxed text-[#E4EBFF] md:text-xl">
              {copy(language,
                'Soy Carmen María Pérez. Diseño interfaces en Figma y las llevo a la web con HTML, CSS, JavaScript y WordPress. Me interesa que una buena idea también funcione.',
                'I’m Carmen María Pérez. I design interfaces in Figma and bring them to the web with HTML, CSS, JavaScript and WordPress. I care about making good ideas work.'
              )}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="#selected-work" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#002FA7] transition-transform duration-300 hover:-translate-y-1">
                {copy(language, 'Explorar proyectos', 'Explore projects')} <ArrowDownRight aria-hidden size={19} />
              </Link>
              {site.cv.available && (
                <a href={site.cv.href} download className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#002FA7]">
                  {copy(language, 'Descargar CV', 'Download CV')} <Download aria-hidden size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[23rem] md:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#DCE5FF] px-5 pb-5 pt-4 text-[#002FA7]">
              <div aria-hidden className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full border border-[#002FA7]/15" />
              <div aria-hidden className="pointer-events-none absolute -left-20 bottom-10 size-64 rounded-full border border-[#002FA7]/15" />
              <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em]">
                <span>{copy(language, 'Diseño que se mueve', 'Design in motion')}</span>
                <Asterisk aria-hidden size={18} strokeWidth={2} />
              </div>
              <Collectible />
              <p className="relative z-10 mt-1 border-t border-[#002FA7]/20 pt-4 text-sm leading-snug">
                {copy(language, 'Entre identidad visual, interacción y código.', 'Where visual identity, interaction and code meet.')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-foreground/30 pt-5 text-sm text-[#E4EBFF]">
          <span>{copy(language, 'Murcia, España · Remoto / híbrido', 'Murcia, Spain · Remote / hybrid')}</span>
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline underline-offset-4">
            {copy(language, '¿Hablamos de una oportunidad?', 'Have an opportunity in mind?')} <ArrowUpRight aria-hidden size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
