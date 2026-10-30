'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { navigation, site } from '@/lib/site'
import { Container } from './container'

export function SiteFooter() {
  const { language } = useLanguage()
  const labels = language === 'en' ? ['Work', 'About', 'Contact'] : ['Proyectos', 'Sobre mí', 'Contacto']

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="space-y-1">
          <p className="text-base font-bold tracking-tight">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {copy(language, site.role, 'Junior UI/UX & Visual Designer')}
          </p>
        </div>
        <nav aria-label={copy(language, 'Pie de página', 'Footer')}>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {labels[index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-8 md:justify-end">
          <p className="eyebrow text-muted-foreground">© {new Date().getFullYear()}</p>
          <a href="#top" className="eyebrow link-underline">
            {copy(language, 'Volver arriba', 'Back to top')} ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
