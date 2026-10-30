'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProjectMedia } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { ProjectMedia } from '@/lib/projects'

type ProjectImageProps = {
  media: ProjectMedia
  aspect?: string
  className?: string
  sizes?: string
  priority?: boolean
  interactive?: boolean
}

export function ProjectImage({
  media,
  aspect = 'aspect-[4/3]',
  className,
  sizes = '100vw',
  priority,
  interactive,
}: ProjectImageProps) {
  const { language } = useLanguage()
  const localizedMedia = localizeProjectMedia(media, language)

  return (
    <figure className={cn('w-full', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg bg-surface transition-colors duration-500',
          interactive && !localizedMedia.src && 'group-hover:bg-surface-hover',
          aspect,
        )}
      >
        {localizedMedia.src ? (
          <Image
            src={localizedMedia.src}
            alt={localizedMedia.alt}
            fill
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            preload={priority}
            className={cn(
              localizedMedia.fit === 'contain' ? 'object-contain' : 'object-cover',
              'transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]',
              interactive && localizedMedia.fit !== 'contain' && 'group-hover:scale-[1.02]',
            )}
          />
        ) : (
          <ImagePlaceholder label={localizedMedia.alt} language={language} />
        )}
      </div>
      {localizedMedia.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{localizedMedia.caption}</figcaption>}
    </figure>
  )
}

function ImagePlaceholder({ label, language }: { label: string; language: 'es' | 'en' }) {
  return (
    <div role="img" aria-label={`Imagen pendiente: ${label}`} className="absolute inset-0">
      <span aria-hidden className="absolute left-3 top-3 size-2.5 border-l border-t border-foreground/40" />
      <span aria-hidden className="absolute right-3 top-3 size-2.5 border-r border-t border-foreground/40" />
      <span aria-hidden className="absolute bottom-3 left-3 size-2.5 border-b border-l border-foreground/40" />
      <span aria-hidden className="absolute bottom-3 right-3 size-2.5 border-b border-r border-foreground/40" />
      <div aria-hidden className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center">
        <span className="eyebrow text-foreground/70">{copy(language, 'Imagen pendiente', 'Image pending')}</span>
        <span className="eyebrow text-muted-foreground">{label}</span>
      </div>
    </div>
  )
}
