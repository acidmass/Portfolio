'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ContactLinks({ className }: { className?: string }) {
  const { language } = useLanguage()
  const rows = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}`, external: false },
    { label: 'LinkedIn', value: copy(language, 'Ver perfil', 'View profile'), href: site.linkedin, external: true },
    ...(site.cv.available
      ? [{
          label: 'CV',
          value: copy(language, 'Descargar PDF', 'Download PDF'),
          href: site.cv.href,
          download: true,
          external: false,
        }]
      : []),
  ]

  return (
    <ul className={cn('w-full min-w-0', className)}>
      {rows.map((row) => {
        const content = (
          <>
            <span className="eyebrow w-24 shrink-0 text-muted-foreground">{row.label}</span>
            <span className="min-w-0 flex-1 truncate text-lg md:text-xl">{row.value}</span>
            <span
              aria-hidden
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </>
        )
        const cls = 'group flex min-w-0 items-center gap-4 py-5'
        return (
          <li key={row.label}>
            {row.download ? (
              <a href={row.href} download className={cls}>
                {content}
              </a>
            ) : row.href.startsWith('/') ? (
              <Link href={row.href} className={cls}>
                {content}
              </Link>
            ) : (
              <a
                href={row.href}
                className={cls}
                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {content}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
