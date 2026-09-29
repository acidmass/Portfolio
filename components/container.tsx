import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-10', className)}>{children}</div>
}

export function Eyebrow({ index, children, className }: { index?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3 text-muted-foreground', className)}>
      {index && <span className="text-foreground">({index})</span>}
      <span>{children}</span>
    </p>
  )
}
