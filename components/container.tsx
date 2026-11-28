import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-10', className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3 text-muted-foreground', className)}>
      <span>{children}</span>
    </p>
  )
}
