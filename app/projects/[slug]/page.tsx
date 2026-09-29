import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextProject, ProjectBody, ProjectHero, ProjectOverview } from '@/components/project/project-sections'
import { getNextProject, getProject, projects } from '@/lib/projects'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description ?? `${project.title} — ${project.categories.join(' · ')}`,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <article>
      <ProjectHero project={project} />
      <div className="mt-16 md:mt-24">
        <ProjectOverview project={project} />
        <ProjectBody project={project} />
      </div>
      <NextProject project={getNextProject(slug)} />
    </article>
  )
}
