'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { copy, type Language } from '@/lib/i18n'
import { navigation, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Container } from './container'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const navLabels = language === 'en' ? ['Work', 'About', 'Contact'] : ['Proyectos', 'Sobre mí', 'Contacto']

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => pathname === href || (href === '/work' && pathname.startsWith('/projects'))

  return (
    <header className="sticky top-0 z-50 bg-foreground text-background">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-[13px] font-bold uppercase tracking-[0.07em] sm:text-sm md:text-lg"
        >
          {site.name}
        </Link>

        <nav aria-label={language === 'en' ? 'Primary' : 'Principal'} className="hidden lg:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn('link-underline text-sm transition-opacity hover:opacity-75', isActive(item.href) && 'font-semibold')}
                >
                  {navLabels[navigation.indexOf(item)]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div role="group" aria-label={language === 'en' ? 'Language' : 'Idioma'} className="flex gap-1">
            {(['es', 'en'] as const).map((option: Language) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`eyebrow border px-2 py-1 transition-colors ${language === option ? 'border-background bg-background text-foreground' : 'border-background/30 text-background/70 hover:border-background hover:text-background'}`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="eyebrow -mr-2 p-2 lg:hidden"
          >
            {open ? (language === 'en' ? 'Close' : 'Cerrar') : language === 'en' ? 'Menu' : 'Menú'}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 bg-background text-foreground md:top-20 lg:hidden"
      >
        <Container className="flex h-full flex-col justify-between pb-10 pt-8">
          <nav aria-label={language === 'en' ? 'Mobile' : 'Móvil'}>
            <ul>
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'flex items-baseline justify-between py-5 text-4xl font-medium tracking-[-0.03em]',
                      isActive(item.href) && 'text-muted-foreground',
                    )}
                  >
                    {navLabels[navigation.indexOf(item)]}
                    <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{copy(language, site.location, 'Murcia · Spain')}</p>
            <p>{copy(language, site.availability, 'Available for junior opportunities')}</p>
          </div>
        </Container>
      </div>
    </header>
  )
}
