'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy, type Language } from '@/lib/i18n'
import { navigation, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Container } from './container'

export function SiteHeader() {
  const pathname = usePathname()
  const modal = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const navLabels = language === 'en' ? ['Work', 'About', 'Contact'] : ['Proyectos', 'Sobre mí', 'Contacto']

  useEffect(() => {
    const dialog = modal.current
    if (!open || !dialog) return
    dialog.showModal()
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const desktop = window.matchMedia('(min-width: 64rem)')
    const close = () => setOpen(false)
    desktop.addEventListener('change', close)
    window.addEventListener('popstate', close)
    return () => {
      desktop.removeEventListener('change', close)
      window.removeEventListener('popstate', close)
      document.documentElement.style.overflow = previous
      dialog.close()
    }
  }, [open])

  const isActive = (href: string) => pathname === href || (href === '/work' && pathname.startsWith('/projects'))

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 text-foreground backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between md:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={copy(language, `${site.name} · Ir al inicio`, `${site.name} · Go to homepage`)}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
        >
          <Image
            src="/icon.svg"
            alt=""
            width={56}
            height={56}
            priority
            className="size-full object-contain"
          />
        </Link>

        <nav aria-label={language === 'en' ? 'Primary' : 'Principal'} className="hidden lg:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn('rounded-full px-4 py-2 text-sm transition-colors hover:bg-secondary', isActive(item.href) && 'bg-foreground text-background hover:bg-foreground')}
                >
                  {navLabels[navigation.indexOf(item)]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div role="group" aria-label={language === 'en' ? 'Language' : 'Idioma'} className="flex rounded-full border border-line p-1">
            {(['es', 'en'] as const).map((option: Language) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${language === option ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            aria-label={copy(language, 'Ir a contacto', 'Go to contact')}
            className="hidden size-10 items-center justify-center rounded-full bg-brand transition-transform hover:rotate-45 sm:flex"
          >
            <ArrowUpRight aria-hidden size={18} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:rotate-6 lg:hidden"
          >
            <span className="sr-only">{open ? (language === 'en' ? 'Close menu' : 'Cerrar menú') : language === 'en' ? 'Open menu' : 'Abrir menú'}</span>
            {open ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
          </button>
        </div>
      </Container>

      <dialog
        ref={modal}
        aria-label={copy(language, 'Navegación', 'Navigation')}
        onCancel={() => setOpen(false)}
        id="mobile-menu"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-background text-foreground"
      >
        <Container className="flex h-full flex-col justify-between pb-10 pt-8">
          <button type="button" className="mb-5 flex min-h-11 items-center gap-2 self-end" onClick={() => setOpen(false)}>
            {copy(language, 'Cerrar menú', 'Close menu')} <X aria-hidden size={20} />
          </button>
          <nav aria-label={language === 'en' ? 'Mobile' : 'Móvil'}>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'flex items-baseline justify-between border-b border-line py-5 text-4xl font-semibold',
                      isActive(item.href) && 'text-muted-foreground',
                    )}
                  >
                    {navLabels[navigation.indexOf(item)]}
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
      </dialog>
    </header>
  )
}
