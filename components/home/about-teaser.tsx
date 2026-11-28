'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { Container } from '../container'

export function AboutTeaser() {
  const { language } = useLanguage()
  return (
    <section aria-labelledby="experience-title" className="border-t border-white/20 bg-[#002FA7]">
      <Container className="grid gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-8">
          <h2 id="experience-title" className="max-w-[16ch] text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {copy(language, 'No solo lo diseño. También lo llevo a la web.', 'I don’t just design it. I bring it to the web.')}
          </h2>
          <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-[#DEE8FF]">
            {copy(language,
              'En Caza desde Casa trabajé en el rediseño y maquetación de páginas con Elementor, la adaptación responsive de una tienda WooCommerce y el desarrollo de interacciones con CSS y JavaScript.',
              'At Caza desde Casa, I worked on redesigning and building pages with Elementor, adapting a WooCommerce store for responsive layouts, and developing interactions with CSS and JavaScript.'
            )}
          </p>
          <Link href="/about" className="mt-8 inline-flex min-h-12 items-center gap-3 border-b border-white pb-1 font-semibold">
            {copy(language, 'Conocer mi experiencia', 'Explore my experience')} <ArrowUpRight aria-hidden size={18} />
          </Link>
        </div>
        <div className="grid gap-0 border-y border-white/30 md:col-span-4 md:col-start-9">
          {[
            { es: 'Diseño de interfaces', en: 'Interface design', tools: 'Figma · UI/UX' },
            { es: 'Desarrollo web', en: 'Web development', tools: 'HTML · CSS · JavaScript' },
            { es: 'Implementación', en: 'Implementation', tools: 'WordPress · Elementor · WooCommerce' },
          ].map((item) => (
            <div key={item.es} className="border-b border-white/25 py-5 last:border-0">
              <h3 className="text-xl font-semibold">{copy(language, item.es, item.en)}</h3>
              <p className="mt-1 text-sm text-[#DEE8FF]">{item.tools}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
