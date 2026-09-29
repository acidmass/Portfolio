// Datos de proyectos. Edita aquí títulos, textos e imágenes.
// Cualquier campo sin rellenar (undefined o sin `src`) se muestra como placeholder en la web.
// Para añadir una imagen: guárdala en /public/projects/<slug>/ y pon su ruta en `src`.

export type ProjectMedia = {
  src?: string
  alt: string
  caption?: string
  fit?: 'cover' | 'contain'
}

export type Project = {
  slug: string
  number: string
  title: string
  categories: string[]
  year?: string
  description?: string
  timeline?: string
  deliverables?: string[]
  en?: {
    categories?: string[]
    description?: string
    type?: string
    timeline?: string
    deliverables?: string[]
    context?: string
    challenge?: string
  }
  featured: boolean
  role?: string
  tools: string[]
  type?: string
  cover: ProjectMedia
  content: {
    context?: string
    challenge?: string
    process: { text?: string; images: ProjectMedia[] }
    design: { text?: string; images: ProjectMedia[] }
    visualSystem: {
      typography?: string
      color?: string
      components?: string
      graphicSystem?: string
      images: ProjectMedia[]
    }
    responsive: { text?: string; images: ProjectMedia[] }
    result: { images: ProjectMedia[] }
  }
}

function media(title: string, label: string, count: number): ProjectMedia[] {
  return Array.from({ length: count }, (_, i) => ({
    alt: `${title} — ${label} ${String(i + 1).padStart(2, '0')}`,
  }))
}

function emptyContent(title: string): Project['content'] {
  return {
    process: { images: media(title, 'proceso', 2) },
    design: { images: media(title, 'diseño', 3) },
    visualSystem: { images: media(title, 'sistema visual', 2) },
    responsive: { images: media(title, 'responsive', 2) },
    result: { images: media(title, 'resultado', 3) },
  }
}

export const projects: Project[] = [
  {
    slug: 'bruma',
    number: '01',
    title: 'BRUMA',
    categories: ['Revista digital', 'Editorial', 'Dirección de arte'],
    year: '2026',
    timeline: '2025–2026 · Proyecto académico / personal',
    type: 'Revista digital interactiva · Interfaz editorial · Dirección de arte',
    deliverables: ['Prototipo de revista digital', 'Identidad editorial', 'Sistema visual', 'Pantallas interactivas', 'Dirección de arte'],
    description: 'Revista digital experimental sobre arte, cultura visual y perspectivas contemporáneas.',
    en: {
      categories: ['Digital magazine', 'Editorial', 'Art direction'],
      description: 'Experimental digital magazine about art, visual culture and contemporary perspectives.',
      type: 'Interactive digital magazine · Editorial interface · Art direction',
      timeline: '2025–2026 · Academic / personal project',
      deliverables: ['Digital magazine prototype', 'Editorial identity', 'Visual system', 'Interactive screens', 'Art direction'],
      context: 'BRUMA is an experimental digital magazine focused on art, visual culture and contemporary perspectives. It explores new ways of digital reading through an atmospheric, fragmented editorial interface where typography, image and navigation become part of the visual discourse.',
      challenge: 'Design a digital-first editorial experience that moves beyond the traditional magazine format, combining critical thinking, visual storytelling and interface design in an immersive, expressive and contemporary reading experience.',
    },
    featured: true,
    tools: [],
    cover: {
      src: '/projects/bruma/cover.jpg',
      alt: 'Diseño web responsive de la revista cultural Bruma en portátil, tablet y móvil',
    },
    content: {
      ...emptyContent('BRUMA'),
      context: 'BRUMA es una revista digital experimental centrada en el arte, la cultura visual y las perspectivas contemporáneas. Explora nuevas formas de lectura digital a través de una interfaz editorial atmosférica y fragmentada, donde la tipografía, la imagen y la navegación forman parte del discurso visual.',
      challenge: 'Diseñar una experiencia editorial digital que vaya más allá del formato tradicional de revista y combine pensamiento crítico, narrativa visual y diseño de interfaz en una lectura inmersiva, expresiva y contemporánea.',
    },
  },
  {
    slug: 'dlab',
    number: '02',
    title: 'DLAB',
    categories: ['Branding digital', 'Packaging', 'Diseño web'],
    year: '2026',
    timeline: '2025–2026 · Proyecto académico / personal',
    type: 'Branding digital · Diseño de packaging · Diseño web',
    deliverables: ['Identidad visual', 'Packaging', 'Concepto de web', 'Mockups de producto'],
    description: 'Concepto de marca de cuidado de la piel con una identidad visual futurista.',
    en: {
      categories: ['Digital branding', 'Packaging', 'Web design'],
      description: 'Skincare brand concept with a futuristic visual identity.',
      type: 'Digital branding · Packaging design · Web design',
      timeline: '2025–2026 · Academic / personal project',
      deliverables: ['Visual identity', 'Packaging', 'Website concept', 'Product mockups'],
      context: 'DLAB is a visual identity and product design project for a contemporary skincare brand. It explores a futuristic, experimental beauty universe through bold graphics, vibrant colors and a digital-first visual language.',
      challenge: 'Create a distinctive skincare brand with a strong visual personality, communicating innovation, self-care and digital beauty through a bold identity system, attractive packaging and an engaging online presence.',
    },
    featured: true,
    tools: [],
    cover: {
      src: '/projects/dlab/cover.jpg',
      alt: 'Diseño de marca y tienda digital DLAB mostrado en un portátil',
    },
    content: {
      ...emptyContent('DLAB'),
      context: 'DLAB es un proyecto de identidad visual y diseño de producto para una marca contemporánea de cuidado de la piel. Explora un universo de belleza futurista y experimental mediante gráficos atrevidos, colores vibrantes y un lenguaje visual digital.',
      challenge: 'Crear una marca de skincare distintiva y con una personalidad visual fuerte, que comunique innovación, autocuidado y belleza digital mediante una identidad atrevida, un packaging atractivo y una presencia online visualmente envolvente.',
    },
  },
  {
    slug: 'murcia-pedalea',
    number: '03',
    title: 'Murcia Pedalea',
    categories: ['UX/UI', 'App móvil', 'Identidad visual'],
    year: '2026',
    timeline: '2025–2026 · Proyecto académico / personal',
    type: 'Diseño UX/UI · App móvil · Identidad visual',
    deliverables: ['Prototipo de app móvil', 'Identidad visual', 'Estructura UX', 'Pantallas UI', 'Presentación'],
    description: 'App móvil municipal e identidad visual para fomentar el uso cotidiano de la bicicleta en Murcia.',
    en: {
      categories: ['UX/UI', 'Mobile app', 'Visual identity'],
      description: 'Municipal cycling app and visual identity designed to encourage everyday cycling in Murcia.',
      type: 'UX/UI design · Mobile app · Visual identity',
      timeline: '2025–2026 · Academic / personal project',
      deliverables: ['Mobile app prototype', 'Visual identity', 'UX structure', 'UI screens', 'Presentation'],
      context: 'Murcia Pedalea is a mobile app and visual identity project designed to encourage everyday cycling in Murcia. The proposal responds to the need for a clearer, more accessible digital tool connecting cycling routes, safety information and local mobility resources.',
      challenge: 'Design a user-friendly mobile experience that helps people feel more confident using a bicycle in their daily routine by improving access to routes, cycling information and public mobility resources.',
    },
    featured: true,
    tools: [],
    cover: {
      src: '/projects/murcia-pedalea/cover.png',
      alt: 'Pantallas y mockups de la aplicación móvil Murcia Pedalea',
      fit: 'contain',
    },
    content: {
      ...emptyContent('Murcia Pedalea'),
      context: 'Murcia Pedalea es una app móvil y un proyecto de identidad visual diseñado para fomentar el uso cotidiano de la bicicleta en Murcia. La propuesta responde a la necesidad de una herramienta digital más clara y accesible que conecte rutas ciclistas, información de seguridad y recursos de movilidad local.',
      challenge: 'Diseñar una experiencia móvil fácil de usar que ayude a las personas a sentirse más seguras al incorporar la bicicleta a su rutina, facilitando el acceso a rutas, información ciclista y recursos públicos de movilidad.',
    },
  },
  {
    slug: 'cante-de-las-minas',
    number: '04',
    title: 'Cante de las Minas',
    categories: ['Branding', 'Art Direction', 'Digital'],
    featured: false,
    tools: [],
    cover: { alt: 'Cante de las Minas — imagen principal' },
    content: emptyContent('Cante de las Minas'),
  },
  {
    slug: 'gilda-go',
    number: '05',
    title: 'Gilda GO!',
    categories: ['UI', 'Juego interactivo', 'Prototipo móvil'],
    year: '2026',
    timeline: '2025–2026 · Proyecto académico / personal',
    type: 'Diseño UI · Juego interactivo · Prototipo móvil',
    deliverables: ['Prototipo de juego móvil', 'Pantallas UI', 'Flujo de interacción', 'Identidad visual'],
    description: 'Juego móvil interactivo inspirado en la tapa tradicional de la gilda.',
    en: {
      categories: ['UI', 'Interactive game', 'Mobile prototype'],
      description: 'Interactive mobile game inspired by the traditional gilda appetizer.',
      type: 'UI design · Interactive game · Mobile prototype',
      timeline: '2025–2026 · Academic / personal project',
      deliverables: ['Mobile game prototype', 'UI screens', 'Interaction flow', 'Visual identity'],
      context: 'Gilda GO! is an interactive mobile game inspired by the traditional gilda appetizer. It uses quick actions, visual feedback and playful interaction, challenging players to build the correct ingredient sequence before time runs out.',
      challenge: 'Design a simple, playful and visually engaging mobile game that combines intuitive interaction, clear feedback and a distinctive visual identity.',
    },
    featured: false,
    tools: [],
    cover: { alt: 'Gilda Go — imagen principal' },
    content: {
      ...emptyContent('Gilda GO!'),
      context: 'Gilda GO! es un juego móvil interactivo inspirado en la tapa tradicional de la gilda. La experiencia se basa en acciones rápidas, respuesta visual e interacción lúdica: hay que completar la secuencia correcta de ingredientes antes de que se acabe el tiempo.',
      challenge: 'Diseñar una experiencia de juego móvil sencilla, lúdica y visualmente atractiva, que combine una interacción intuitiva, respuestas claras y una identidad visual propia.',
    },
  },
  {
    slug: 'muebles-alvarez',
    number: '06',
    title: 'Muebles Álvarez',
    categories: ['Diseño web', 'Dirección de arte', 'Diseño responsive'],
    year: '2026',
    timeline: '2025–2026 · Proyecto académico / personal',
    type: 'Diseño web · Dirección de arte · Diseño responsive',
    deliverables: ['Rediseño web', 'Pantallas UI', 'Layouts responsive', 'Dirección visual'],
    description: 'Rediseño web para una marca de muebles y diseño de interiores.',
    en: {
      categories: ['Web design', 'Art direction', 'Responsive design'],
      description: 'Website redesign for a furniture and interior design brand.',
      type: 'Web design · Art direction · Responsive design',
      timeline: '2025–2026 · Academic / personal project',
      deliverables: ['Website redesign', 'UI screens', 'Responsive layouts', 'Visual direction'],
      context: 'Muebles Álvarez Caravaca is a website redesign project for a furniture and interior design brand. The proposal creates a more contemporary, editorial digital presence through clean layouts, refined typography and a warmer visual direction.',
      challenge: 'Modernize the brand’s online experience, improve the presentation of products and services, and communicate a more elegant, curated and professional image.',
    },
    featured: false,
    tools: [],
    cover: {
      src: '/projects/muebles-alvarez/cover.jpg',
      alt: 'Diseño web de Muebles Álvarez con una chaise longue en portada',
    },
    content: {
      ...emptyContent('Muebles Álvarez'),
      context: 'Muebles Álvarez Caravaca es un proyecto de rediseño web para una marca de muebles y diseño de interiores. La propuesta crea una presencia digital más contemporánea y editorial mediante composiciones limpias, tipografía cuidada y una dirección visual más cálida.',
      challenge: 'Modernizar la experiencia online de la marca, mejorar la presentación de productos y servicios y transmitir una imagen más elegante, cuidada y profesional.',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]
}
