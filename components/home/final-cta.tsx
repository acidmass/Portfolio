'use client'

import { ArrowUpRight, Download } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Container } from '../container'

export function FinalCta() {
  const { language } = useLanguage()
  return (
    <section aria-labelledby="cta-title" className="bg-[#DCE5FF] text-[#00246E]">
      <Container className="py-20 md:py-32">
        <h2 id="cta-title" className="max-w-[15ch] text-balance text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          {copy(language, '¿Diseñamos algo que importe?', 'Shall we design something meaningful?')}
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[#294A8C]">
          {copy(language,
            'Busco una oportunidad junior en UI/UX, diseño web o diseño visual. Si crees que puedo aportar a tu equipo, me encantará conoceros.',
            'I’m looking for a junior opportunity in UI/UX, web or visual design. If my work could contribute to your team, I’d love to connect.'
          )}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#002FA7] px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
            {copy(language, 'Escríbeme', 'Email me')} <ArrowUpRight aria-hidden size={19} />
          </a>
          {site.cv.available && <a href={site.cv.href} download className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#002FA7] px-6 py-3 font-semibold text-[#002FA7] transition-colors hover:bg-[#002FA7] hover:text-white">
            {copy(language, 'Descargar CV', 'Download CV')} <Download aria-hidden size={18}/>
          </a>}
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-[#002FA7]/25 pt-5 text-sm font-medium">
          <span>{site.email}</span>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">LinkedIn <ArrowUpRight aria-hidden size={16}/></a>
        </div>
      </Container>
    </section>
  )
}
