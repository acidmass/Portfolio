'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { copy, localizeProject } from '@/lib/i18n'
import { featuredProjects } from '@/lib/projects'
import { Container } from '../container'
import { ProjectImage } from '../project-image'

export function SelectedWork() {
  const { language } = useLanguage()

  return (
    <section id="selected-work" aria-labelledby="selected-title" className="bg-[#E8EEFF] text-[#00246E]">
      <Container className="py-16 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="selected-title" className="max-w-[12ch] text-5xl font-semibold leading-[0.94] tracking-tight md:text-[clamp(4rem,7vw,6rem)]">
            {copy(language, 'El trabajo habla.', 'Let the work speak.')}
          </h2>
          <Link href="/work" className="inline-flex min-h-12 items-center gap-2 border-b border-[#00246E] text-sm font-semibold transition-colors hover:text-[#0046D0]">
            {copy(language, 'Ver todos los proyectos', 'See all projects')} <ArrowUpRight aria-hidden size={18} />
          </Link>
        </div>
        <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#274783] md:text-lg">
          {copy(language, 'Interfaces, webs e identidades: distintas formas de convertir una idea en algo que se puede usar.', 'Interfaces, websites and identities: different ways of turning an idea into something people can use.')}
        </p>

        <ol className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
          {featuredProjects.map((source, index) => {
            const project = localizeProject(source, language)
            const first = index === 0
            return (
              <li key={project.slug} className={first ? 'md:col-span-2' : ''}>
                <Link href={`/projects/${project.slug}`} className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${first ? 'overflow-hidden rounded-[1.4rem] bg-white md:grid md:grid-cols-[1.35fr_0.85fr] md:items-center' : ''}`}>
                  <div className="overflow-hidden">
                    <ProjectImage media={project.cover} aspect={first ? 'aspect-[4/3] md:aspect-[5/4]' : 'aspect-[4/3]'} interactive sizes={first ? '(min-width: 768px) 65vw, 100vw' : '(min-width: 768px) 45vw, 100vw'} />
                  </div>
                  <div className={first ? 'px-6 pb-8 pt-7 md:px-10 md:py-10' : 'border-t border-[#00246E]/20 pt-5'}>
                    <p className="text-sm font-medium text-[#426095]">{project.categories.join(' · ')}</p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className={`font-semibold leading-tight tracking-tight ${first ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>{project.title}</h3>
                      <ArrowUpRight aria-hidden className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={25} />
                    </div>
                    <p className="mt-5 max-w-[37ch] text-base leading-relaxed text-[#274783] md:text-lg">{project.description}</p>
                    {first && <span className="mt-7 inline-flex border-b border-[#00246E] pb-1 text-sm font-semibold">{copy(language, 'Descubrir el caso de estudio', 'Explore the case study')}</span>}
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
