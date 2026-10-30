'use client'

import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { capabilities } from '@/lib/site'
import { Container, Eyebrow } from '../container'

export function WhatIDo() {
  const { language } = useLanguage()
  const englishItems: Record<string, string> = {
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
    <section aria-labelledby="what-title" className="border-t border-line">
      <Container className="py-28 md:py-40">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <Eyebrow index="03" className="md:col-span-3">
            {copy(language, 'Disciplinas', 'Disciplines')}
          </Eyebrow>
          <h2
            id="what-title"
            className="text-5xl font-medium leading-none md:col-span-8 md:col-start-5 md:text-8xl"
          >
            {copy(language, 'Qué hago', 'What I do')}
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {capabilities.map((group, i) => (
            <div key={group.title} className={i % 2 === 0 ? 'rounded-xl bg-brand p-6 md:p-8' : 'rounded-xl bg-citrus p-6 md:p-8'}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-semibold md:text-3xl">{group.title}</h3>
                <span className="font-mono text-xs text-foreground/60">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-8">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-foreground/15 py-2.5 text-[15px] text-foreground/75">
                    {language === 'en' ? englishItems[item] ?? item : item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
