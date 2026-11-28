'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { featuredProjects } from '@/lib/projects'
import { Container } from '../container'
import { ProjectImage } from '../project-image'

export function SelectedWork() {
  const { language } = useLanguage()
  const trackRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const count = featuredProjects.length

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const getCards = useCallback(() => {
    return Array.from(trackRef.current?.querySelectorAll<HTMLElement>('[data-project-slide]') ?? [])
  }, [])

  const moveTo = useCallback((index: number) => {
    const track = trackRef.current
    const cards = getCards()
    if (!track || !cards.length) return
    const next = Math.min(Math.max(index, 0), cards.length - 1)
    track.scrollTo({
      left: cards[next].offsetLeft - cards[0].offsetLeft,
      behavior: reducedMotion ? 'instant' : 'smooth',
    })
    setActive(next)
  }, [getCards, reducedMotion])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const cards = getCards()
        if (!cards.length) return
        const current = cards.reduce((best, card, index) => {
          const left = Math.abs(card.getBoundingClientRect().left - track.getBoundingClientRect().left)
          return left < best.distance ? { index, distance: left } : best
        }, { index: 0, distance: Number.POSITIVE_INFINITY })
        setActive(current.index)
      })
    }
    const observer = new ResizeObserver(update)
    observer.observe(track)
    track.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      track.removeEventListener('scroll', update)
    }
  }, [getCards])

  return (
    <section id="selected-work" aria-labelledby="selected-title" className="overflow-hidden border-t border-line">
      <Container className="pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 id="selected-title" className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl">
              {copy(language, 'Proyectos que hablan por mí.', 'Work that speaks for me.')}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {copy(language,
                'Diseño de interfaces, experiencias web e identidad visual. Desliza para descubrir cómo trabajo.',
                'Interfaces, web experiences and visual identity. Browse the projects to see how I work.'
              )}
            </p>
          </div>
          <div className="flex items-center gap-3" aria-label={copy(language, 'Controles de proyectos', 'Project controls')}>
            <span className="mr-2 font-mono text-sm tabular-nums text-muted-foreground" aria-live="polite" aria-atomic="true">
              {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <button type="button" aria-label={copy(language, 'Proyecto anterior', 'Previous project')} disabled={active === 0} onClick={() => moveTo(active - 1)}
              className="flex size-12 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-[#002FA7] disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowLeft aria-hidden size={21} />
            </button>
            <button type="button" aria-label={copy(language, 'Proyecto siguiente', 'Next project')} disabled={active === count - 1} onClick={() => moveTo(active + 1)}
              className="flex size-12 items-center justify-center rounded-full bg-white text-[#002FA7] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowRight aria-hidden size={21} />
            </button>
          </div>
        </div>

        <ol ref={trackRef} aria-label={copy(language, 'Proyectos seleccionados', 'Selected projects')}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 [scrollbar-width:thin] [scrollbar-color:#B9CCFF_transparent] md:mt-14 md:gap-8">
          {featuredProjects.map((source) => {
            const project = localizeProject(source, language)
            return (
              <li key={project.slug} data-project-slide className="w-[min(85vw,660px)] shrink-0 snap-start sm:w-[min(72vw,720px)] lg:w-[min(65vw,820px)]">
                <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-[#E3EBFF] text-[#002568] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                  <div className="relative overflow-hidden">
                    <ProjectImage media={project.cover} aspect="aspect-[4/3] md:aspect-[16/10]" sizes="(min-width: 1024px) 820px, (min-width: 640px) 72vw, 85vw" interactive />
                    <span className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-[#002FA7] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-5 px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
                    <div>
                      <p className="text-sm font-medium text-[#31569C]">{project.categories.join(' · ')}</p>
                      <h3 className="mt-3 text-3xl font-semibold leading-none tracking-tight sm:text-5xl">{project.title}</h3>
                    </div>
                    <p className="max-w-[52ch] text-base leading-relaxed text-[#294A83]">{project.description}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {copy(language, 'Arrastra, desliza o utiliza las flechas', 'Drag, swipe or use the arrows')}
          </p>
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
            {copy(language, 'Ver todos los proyectos', 'See all projects')} <ArrowUpRight aria-hidden size={17} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
