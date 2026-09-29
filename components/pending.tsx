'use client'

import { useLanguage } from '@/components/language-provider'
import { copy } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Pending({ children, hint, className }: { children: React.ReactNode; hint?: string; className?: string }) {
  const { language } = useLanguage()

  return (
    <div className={cn('border border-dashed border-foreground/25 px-5 py-4', className)}>
      <p className="eyebrow text-foreground/70">{copy(language, 'Contenido pendiente', 'Content pending')}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
      {hint && <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">{hint}</p>}
    </div>
  )
}

export function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn('space-y-5', className)}>
      {text.split(/\n{2,}/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}
