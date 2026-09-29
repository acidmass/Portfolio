import type { Project, ProjectMedia } from './projects'

export type Language = 'es' | 'en'

export function copy(language: Language, spanish: string, english: string) {
  return language === 'en' ? english : spanish
}

export const projectDescriptions: Record<string, string> = {
  bruma: 'Design and development of an experimental digital culture magazine.',
  dlab: 'Visual identity and graphic system for a digital project.',
  'murcia-pedalea': 'Experience and interface design for a cycling mobility platform.',
}

const coverAltTexts: Record<string, string> = {
  bruma: 'Responsive website design for Bruma cultural magazine, shown on laptop, tablet and phone',
  dlab: 'DLAB brand identity and online store displayed on a laptop',
  'murcia-pedalea': 'Mockup of the Murcia Pedalea mobile app',
  'cante-de-las-minas': 'Cante de las Minas project cover image',
  'gilda-go': 'Gilda Go project cover image',
  'muebles-alvarez': 'Muebles Álvarez website featuring a chaise longue on its homepage',
}

export function localizeProjectMedia(media: ProjectMedia, language: Language): ProjectMedia {
  if (language === 'es') return media
  const slug = media.src?.split('/')[2]

  return {
    ...media,
    alt: (slug && coverAltTexts[slug]) || media.alt
      .replace('Fotografía profesional de', 'Professional photo of')
      .replace('proceso', 'process')
      .replace('diseño', 'design')
      .replace('sistema visual', 'visual system')
      .replace('resultado', 'result'),
  }
}

export function localizeProject(project: Project, language: Language): Project {
  if (language === 'es') return project

  const content = project.content
  const english = project.en
  return {
    ...project,
    categories: english?.categories ?? project.categories,
    description: english?.description ?? projectDescriptions[project.slug] ?? project.description,
    type: english?.type ?? project.type,
    timeline: english?.timeline ?? project.timeline,
    deliverables: english?.deliverables ?? project.deliverables,
    cover: localizeProjectMedia(project.cover, language),
    content: {
      ...content,
      context: english?.context ?? content.context,
      challenge: english?.challenge ?? content.challenge,
      process: { ...content.process, images: content.process.images.map((media) => localizeProjectMedia(media, language)) },
      design: { ...content.design, images: content.design.images.map((media) => localizeProjectMedia(media, language)) },
      visualSystem: { ...content.visualSystem, images: content.visualSystem.images.map((media) => localizeProjectMedia(media, language)) },
      responsive: { ...content.responsive, images: content.responsive.images.map((media) => localizeProjectMedia(media, language)) },
      result: { ...content.result, images: content.result.images.map((media) => localizeProjectMedia(media, language)) },
    },
  }
}