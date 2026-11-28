import { AboutTeaser } from '@/components/home/about-teaser'
import { FinalCta } from '@/components/home/final-cta'
import { Hero } from '@/components/home/hero'
import { SelectedWork } from '@/components/home/selected-work'

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
