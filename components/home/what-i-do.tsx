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
    <section aria-labelledby="what-title">
      <Container className="py-20 md:py-32">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <Eyebrow index="03" className="md:col-span-3">
            {copy(language, 'Disciplinas', 'Disciplines')}
          </Eyebrow>
          <h2
            id="what-title"
            className="text-5xl font-medium tracking-[-0.045em] md:col-span-8 md:col-start-5 md:text-8xl"
          >
            {copy(language, 'Qué hago', 'What I do')}
          </h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {capabilities.map((group, i) => (
            <div key={group.title}>
              <div className="flex items-baseline justify-between pt-4">
                <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">{group.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-8">
                {group.items.map((item) => (
                  <li key={item} className="py-2.5 text-[15px] text-muted-foreground">
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
