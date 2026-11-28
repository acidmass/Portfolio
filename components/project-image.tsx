'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { localizeProjectMedia } from '@/lib/i18n'
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

  if (!localizedMedia.src?.trim()) return null
  return (
    <figure className={cn('w-full', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg bg-surface transition-colors duration-500',
          aspect,
        )}
      >
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
      </div>
      {localizedMedia.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{localizedMedia.caption}</figcaption>}
    </figure>
  )
}
