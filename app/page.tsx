import { pageMetadata } from '@/lib/page-metadata'
import { AboutTeaser } from '@/components/home/about-teaser'
import { FinalCta } from '@/components/home/final-cta'
import { Hero } from '@/components/home/hero'
import { SelectedWork } from '@/components/home/selected-work'

export const metadata = pageMetadata('/', 'Diseñadora junior UI/UX, web y visual', 'Portfolio de Carmen María Pérez. Explora proyectos de interfaces, diseño visual y desarrollo web, descarga mi CV o contacta conmigo.')

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutTeaser />
      <FinalCta />
    </>
  )
}
