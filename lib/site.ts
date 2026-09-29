// Datos generales del portfolio. Sustituye los valores marcados como PENDIENTE por tus datos reales.

export const site = {
  name: 'Carmen María Pérez',
  role: 'Diseñadora junior UI/UX & Visual',
  location: 'Murcia · España',
  availability: 'Disponible para oportunidades junior',
  email: 'carmenmaria.perezm1@gmail.com',
  // PENDIENTE: la URL de tu perfil de LinkedIn
  linkedin: 'https://www.linkedin.com/',
  cv: {
    // Coloca tu PDF en /public/cv/ con este nombre y cambia `available` a true.
    href: '/cv/carmen-maria-perez-cv.pdf.pdf',
    available: true,
  },  
}

export const navigation = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const capabilities = [
  {
    title: 'UI/UX',
    items: ['Interfaces', 'Wireframes', 'User flows', 'Arquitectura de información', 'Prototipos'],
  },
  {
    title: 'Web',
    items: ['Web design', 'Responsive design', 'HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    title: 'Visual',
    items: ['Dirección de arte', 'Branding digital', 'Sistemas visuales', 'Tipografía', 'Jerarquía visual'],
  },
  {
    title: 'Digital',
    items: ['Producto digital', 'Interacción', 'Microinteracciones', 'Motion'],
  },
]

// Contenido de la página About. Los campos vacíos se muestran como placeholders.
export const about = {
  intro:
    'Soy Carmen, diseñadora UI/UX y visual con formación en Diseño Gráfico Interactivo e Historia del Arte. Me interesa especialmente el punto donde se encuentran producto digital, diseño web y dirección visual.',
  photo: '/images/carmen-maria-perez-cv.png' as string | undefined,
  education: [
    { title: 'Diseño Gráfico Interactivo', detail: undefined as string | undefined },
    { title: 'Historia del Arte', detail: undefined as string | undefined },
  ],
  experience: [] as { title: string; detail?: string }[],
  tools: [] as string[],
  interests: ['Producto digital', 'Diseño web', 'Dirección visual'],
}
