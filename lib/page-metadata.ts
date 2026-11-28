import type { Metadata } from 'next'
import { site } from './site'

export function pageMetadata(path: string, title: string, description: string, image = '/projects/murcia-pedalea/cover.webp'): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: site.name,
      url: path,
      title: `${title} · ${site.name}`,
      description,
      images: [image],
    },
  }
}
