import { AboutTeaser } from '@/components/home/about-teaser'
import { FinalCta } from '@/components/home/final-cta'
import { Hero } from '@/components/home/hero'
import { MoreWork } from '@/components/home/more-work'
import { SelectedWork } from '@/components/home/selected-work'
import { WhatIDo } from '@/components/home/what-i-do'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <SelectedWork />
      <WhatIDo />
      <MoreWork />
      <FinalCta />
    </>
  )
}
