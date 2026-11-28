export type ProjectMedia = { src?: string; alt: string; caption?: string; en?: { alt: string; caption?: string }; fit?: 'cover' | 'contain' }
type TextMedia = { text?: string; images: ProjectMedia[] }
type VisualSystem = { typography?: string; color?: string; components?: string; graphicSystem?: string; images: ProjectMedia[] }

export type Project = {
  slug: string; number: string; title: string; categories: string[]; year?: string
  description?: string; timeline?: string; deliverables?: string[]
  featured: boolean; role?: string; tools: string[]; type?: string
  links?: { label: string; href: string }[]
  cover: ProjectMedia
  content: {
    context?: string; challenge?: string
    process: TextMedia; design: TextMedia; visualSystem: VisualSystem
    responsive: TextMedia; result: TextMedia; solution?: TextMedia; learnings?: TextMedia
  }
  en?: {
    categories?: string[]; description?: string; type?: string; timeline?: string
    role?: string; deliverables?: string[]; links?: { label: string; href: string }[]
    context?: string; challenge?: string; process?: string; design?: string
    visualSystem?: Omit<VisualSystem, 'images'>; responsive?: string; result?: string; solution?: string; learnings?: string
  }
}

// Published cases use existing project material. Add further cases when their images and text are ready.
const catalog: Project[] = [
  {
    "slug": "bruma",
    "number": "01",
    "title": "BRUMA",
    "categories": [
      "Revista digital",
      "Diseño editorial",
      "Dirección de arte"
    ],
    "featured": true,
    "year": "2026",
    "timeline": "2025–2026 · Proyecto académico",
    "description": "Una revista cultural que convierte la lectura en una experiencia visual e interactiva.",
    "type": "Revista cultural digital experimental",
    "role": "Identidad editorial, interfaz y desarrollo web",
    "tools": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "deliverables": [
      "Identidad editorial",
      "Sistema visual",
      "Interfaz adaptable",
      "Revista digital"
    ],
    "cover": {
      "src": "/projects/bruma/cover.jpg",
      "alt": "Revista BRUMA en portátil, tableta y móvil"
    },
    "content": {
      "context": "BRUMA es una revista cultural digital sobre arte, imagen y pensamiento contemporáneo. El proyecto conecta mi formación en Historia del Arte con el diseño interactivo: la interfaz forma parte de la manera de presentar y relacionar los contenidos.",
      "challenge": "Dar a la publicación una identidad propia y explorar una lectura menos lineal, manteniendo referencias de navegación que permitan orientarse dentro de una propuesta editorial experimental.",
      "process": {
        "text": "La propuesta se articula en secciones con distintos ritmos y formatos. Texto, archivo visual y contenidos sonoros amplían la experiencia de lectura y permiten conectar piezas sin trasladar literalmente las páginas de una revista impresa.",
        "images": []
      },
      "design": {
        "text": "La composición combina fondos oscuros, imágenes y acentos de color intenso. Los cambios de escala y las superposiciones generan una atmósfera reconocible, mientras la navegación ofrece un punto de referencia entre contenidos.",
        "images": [
          {
            "src": "/projects/bruma/editorial.webp",
            "alt": "Aplicaciones de la identidad editorial de BRUMA",
            "fit": "contain"
          }
        ]
      },
      "responsive": {
        "text": "La propuesta se presenta en escritorio, tableta y móvil. La adaptación reorganiza la composición y los tamaños de lectura, conservando la identidad editorial y el acceso a las secciones.",
        "images": []
      },
      "result": {
        "text": "Una revista digital desarrollada en HTML, CSS y JavaScript que reúne identidad, contenido e interacción. El proyecto explora cómo la dirección de arte puede intervenir también en la forma de navegar y leer.",
        "images": []
      },
      "visualSystem": {
        "images": [],
        "typography": "Contrastes de escala para diferenciar identidad, titulares y lectura.",
        "color": "Base oscura, acentos fluorescentes y fotografía en blanco y negro.",
        "components": "Navegación por secciones y bloques que combinan texto e imagen.",
        "graphicSystem": "Una identidad que admite capas y fragmentación manteniendo el vínculo entre sus piezas."
      }
    },
    "en": {
      "categories": [
        "Digital magazine",
        "Editorial design",
        "Art direction"
      ],
      "description": "A cultural magazine that turns reading into a visual and interactive experience.",
      "type": "Experimental digital culture magazine",
      "role": "Editorial identity, interface and web development",
      "timeline": "2025–2026 · Academic project",
      "deliverables": [
        "Editorial identity",
        "Visual system",
        "Responsive interface",
        "Digital magazine"
      ],
      "links": [
        {
          "label": "Visit the magazine",
          "href": "https://graficainteractiva.es/gra2pin/carmen_pm/"
        }
      ],
      "context": "BRUMA is a digital cultural magazine about art, image and contemporary thought. It connects my Art History background with interactive design: the interface becomes part of how the content is presented and connected.",
      "challenge": "Give the publication a distinctive identity and explore less linear reading, while retaining navigation cues within an experimental editorial approach.",
      "process": "The proposal is organised into sections with different rhythms and formats. Text, visual archives and sound content extend the reading experience without directly reproducing a printed magazine.",
      "design": "Dark backgrounds, images and vivid accents build a recognisable atmosphere. Changes in scale and layered elements shape the composition, while navigation provides a reference point between pieces.",
      "responsive": "Shown on desktop, tablet and mobile, the adaptation reorganises composition and reading sizes while preserving the editorial identity and access to sections.",
      "result": "A digital magazine built in HTML, CSS and JavaScript that brings identity, content and interaction together. It explores how art direction can also shape navigation and reading.",
      "visualSystem": {
        "typography": "Contrasts in scale distinguish identity, headlines and reading text.",
        "color": "A dark base, fluorescent accents and black-and-white photography.",
        "components": "Section navigation and editorial blocks combining text and image.",
        "graphicSystem": "An identity that accommodates layers and fragmentation while connecting its pieces."
      }
    },
    "links": [
      {
        "label": "Visitar la revista",
        "href": "https://graficainteractiva.es/gra2pin/carmen_pm/"
      }
    ]
  },
  {
    "slug": "dlab",
    "number": "02",
    "title": "DLAB",
    "categories": [
      "Identidad visual",
      "Packaging",
      "Diseño web"
    ],
    "featured": true,
    "year": "2026",
    "timeline": "2025–2026 · Proyecto académico / personal",
    "description": "Una identidad de cosmética que conecta producto y entorno digital a través del color y la experimentación.",
    "type": "Concepto de marca de cuidado de la piel",
    "role": "Identidad visual, packaging y concepto web",
    "tools": [],
    "deliverables": [
      "Identidad visual",
      "Packaging",
      "Concepto web",
      "Mockups de producto"
    ],
    "cover": {
      "src": "/projects/dlab/cover.jpg",
      "alt": "Concepto de tienda digital de DLAB en un portátil"
    },
    "content": {
      "context": "DLAB es una marca conceptual de cuidado de la piel. La propuesta explora un universo de belleza futurista y expresivo, con una identidad pensada para convivir en envases, imágenes de producto y una presencia digital.",
      "challenge": "Construir un lenguaje reconocible y coherente entre soportes físicos y digitales, manteniendo la presentación del producto dentro de una dirección visual atrevida.",
      "process": {
        "text": "La identidad se plantea como un sistema que se traslada entre envase y pantalla. El producto, la paleta y los recursos gráficos actúan como puntos de conexión entre las aplicaciones de la marca.",
        "images": []
      },
      "design": {
        "text": "La portada web da protagonismo al producto mediante una composición central, titulares de gran escala y contraste cromático. Las fichas, los formularios y los bloques de contenido extienden el sistema a otras partes de la experiencia digital.",
        "images": [
          {
            "src": "/projects/dlab/identity.webp",
            "alt": "Composiciones de interfaz y producto de DLAB",
            "fit": "contain"
          }
        ]
      },
      "responsive": {
        "images": []
      },
      "result": {
        "text": "Una propuesta de identidad aplicada al packaging y al concepto de tienda digital. El conjunto muestra cómo una misma dirección de arte puede dar continuidad a la experiencia de marca entre soportes.",
        "images": []
      },
      "visualSystem": {
        "images": [],
        "typography": "Titulares contundentes y diferencias de escala que acompañan al producto.",
        "color": "Contraste entre tonos oscuros, rosa y acentos de color vivo.",
        "graphicSystem": "Recursos gráficos expresivos y composiciones que vinculan el producto con el concepto de marca."
      }
    },
    "en": {
      "categories": [
        "Visual identity",
        "Packaging",
        "Web design"
      ],
      "description": "A skincare identity connecting product and digital presence through colour and experimentation.",
      "type": "Concept skincare brand",
      "role": "Visual identity, packaging and website concept",
      "timeline": "2025–2026 · Academic / personal project",
      "deliverables": [
        "Visual identity",
        "Packaging",
        "Website concept",
        "Product mockups"
      ],
      "context": "DLAB is a concept skincare brand. It explores a futuristic, expressive beauty universe, with an identity designed for packaging, product imagery and a digital presence.",
      "challenge": "Build a recognisable visual language across physical and digital formats, keeping the product visible within a bold art direction.",
      "process": "The identity is conceived as a system that moves between packaging and screen. The product, palette and graphic elements connect the different brand applications.",
      "design": "The homepage focuses on the product through a central composition, large headlines and colour contrast. Product details, forms and content blocks extend the system to other parts of the digital experience.",
      "result": "An identity proposal applied to packaging and a digital store concept, showing how consistent art direction can connect a brand across formats.",
      "visualSystem": {
        "typography": "Bold headlines and changes in scale complement the product.",
        "color": "Dark tones contrast with pink and vivid accents.",
        "graphicSystem": "Expressive graphics connect the product with the brand concept."
      }
    }
  },
  {
    "slug": "murcia-pedalea",
    "number": "03",
    "title": "Murcia Pedalea",
    "categories": [
      "UX/UI",
      "App móvil",
      "Identidad visual"
    ],
    "featured": true,
    "year": "2026",
    "timeline": "2025–2026 · Proyecto académico / personal",
    "description": "Una propuesta móvil para consultar rutas e incorporar la bicicleta a los desplazamientos cotidianos en Murcia.",
    "type": "Propuesta de aplicación de movilidad ciclista",
    "role": "Estructura de navegación, interfaz e identidad visual",
    "tools": [],
    "deliverables": [
      "Prototipo móvil",
      "Identidad visual",
      "Navegación",
      "Pantallas de interfaz"
    ],
    "cover": {
      "src": "/projects/murcia-pedalea/cover.webp",
      "alt": "Identidad de Murcia Pedalea en una aplicación móvil"
    },
    "content": {
      "context": "Murcia Pedalea reúne rutas ciclistas, información de seguridad y contenidos sobre movilidad local en una propuesta de aplicación móvil. El proyecto plantea una herramienta para acompañar los desplazamientos en bicicleta por Murcia.",
      "challenge": "Hacer comprensible la información que acompaña a un recorrido: distancia, duración, dificultad y características de la ruta. El objetivo de diseño es ayudar a elegir y seguir un trayecto desde una interfaz móvil.",
      "process": {
        "text": "El recorrido del prototipo conecta el acceso a la aplicación, la consulta de rutas, la ficha de un trayecto y su seguimiento. La navegación agrupa mapa, rutas, seguridad y perfil para separar acciones y contenidos.",
        "images": []
      },
      "design": {
        "text": "La ficha reúne mapa, distancia y duración para que la persona pueda consultar esos datos antes de iniciar la ruta.",
        "images": []
      },
      "solution": {
        "text": "Desde la ficha se puede iniciar el recorrido. Durante el trayecto, la pantalla reúne las indicaciones y la acción de finalizar.",
        "images": [
          {
            "src": "/projects/murcia-pedalea/screens.webp",
            "alt": "Pantallas de registro, rutas, ficha de trayecto y navegación de Murcia Pedalea",
            "fit": "contain"
          }
        ]
      },
      "responsive": {
        "images": []
      },
      "result": {
        "text": "Un prototipo de aplicación móvil acompañado de una identidad visual y pantallas que explican el recorrido principal, desde el acceso hasta el seguimiento de una ruta. El proyecto conecta organización de la información y diseño de interfaz.",
        "images": []
      },
      "visualSystem": {
        "images": [],
        "typography": "Jerarquía entre nombres de rutas, datos del recorrido, instrucciones y acciones.",
        "color": "Tonos verdes y fondos claros que vinculan la identidad con la movilidad en bicicleta.",
        "components": "Navegación inferior, fichas de ruta, indicadores de recorrido, mapas y botones de acción."
      }
    },
    "en": {
      "categories": [
        "UX/UI",
        "Mobile app",
        "Visual identity"
      ],
      "description": "A mobile proposal for exploring routes and making cycling part of everyday travel in Murcia.",
      "type": "Cycling mobility app proposal",
      "role": "Navigation structure, interface and visual identity",
      "timeline": "2025–2026 · Academic / personal project",
      "deliverables": [
        "Mobile prototype",
        "Visual identity",
        "Navigation",
        "Interface screens"
      ],
      "context": "Murcia Pedalea brings cycling routes, safety information and local mobility content together in a mobile app proposal designed to support cycling in Murcia.",
      "challenge": "Make route information understandable: distance, duration, difficulty and route characteristics. The design goal is to support choosing and following a journey on a mobile interface.",
      "process": "The prototype connects access to the app, route browsing, a route detail view and navigation. Maps, routes, safety and profile are grouped into distinct areas.",
      "design": "Route details group the map, distance and duration so the cyclist can review them before starting.",
      "solution": "Cyclists can start a route from its detail screen. During the ride, the screen presents directions and an action to finish.",
      "result": "A mobile app prototype with a visual identity and screens showing the main journey, from entry to following a route. The project connects information structure with interface design.",
      "visualSystem": {
        "typography": "A hierarchy between route names, journey data, directions and actions.",
        "color": "Green tones and light backgrounds visually connect the identity to cycling.",
        "components": "Bottom navigation, route details, journey indicators, maps and action buttons."
      }
    }
  },
  {
    "slug": "gilda-go",
    "number": "04",
    "title": "Gilda GO!",
    "categories": [
      "Diseño UI",
      "Juego interactivo",
      "Prototipo móvil"
    ],
    "featured": false,
    "year": "2026",
    "timeline": "2025–2026 · Proyecto académico / personal",
    "description": "La preparación de una gilda convertida en un juego móvil contrarreloj.",
    "type": "Prototipo de juego móvil",
    "role": "Identidad visual, pantallas y flujo de interacción",
    "tools": [],
    "deliverables": [
      "Identidad visual",
      "Pantallas de juego",
      "Flujo de interacción",
      "Prototipo móvil"
    ],
    "cover": {
      "src": "/projects/gilda-go/cover.webp",
      "alt": "Pantallas verdes y amarillas del juego Gilda GO!",
      "fit": "contain"
    },
    "content": {
      "context": "Gilda GO! transforma una tapa reconocible en una experiencia lúdica. La propuesta consiste en completar la secuencia de ingredientes antes de que termine el tiempo, con una identidad que conecta gastronomía e interacción.",
      "challenge": "Explicar una mecánica de juego breve y mantener claras las acciones, los ingredientes y la progresión de la partida dentro de una pantalla móvil.",
      "process": {
        "text": "El flujo conecta la presentación del juego, la elección de nivel y la partida. Las pantallas de ingredientes introducen el contenido visual de la experiencia y la selección de niveles organiza su progresión.",
        "images": []
      },
      "design": {
        "text": "La interfaz combina fondos verdes, acentos amarillos e imágenes de ingredientes. La numeración y los títulos diferencian los niveles, mientras las acciones principales destacan dentro de una composición de carácter lúdico.",
        "images": []
      },
      "responsive": {
        "images": []
      },
      "result": {
        "text": "Un prototipo móvil que reúne identidad visual, diseño de pantallas y un recorrido de juego. Explora cómo comunicar una mecánica sencilla a través de la interfaz y de sus respuestas visuales.",
        "images": []
      },
      "visualSystem": {
        "images": [],
        "color": "Verde y amarillo como base de una identidad enérgica y reconocible.",
        "components": "Bienvenida, selección de nivel y elementos de juego.",
        "graphicSystem": "Fotografía de ingredientes, recursos gastronómicos y tipografía expresiva."
      }
    },
    "en": {
      "categories": [
        "UI design",
        "Interactive game",
        "Mobile prototype"
      ],
      "description": "Preparing a gilda appetizer becomes a mobile game against the clock.",
      "type": "Mobile game prototype",
      "role": "Visual identity, screens and interaction flow",
      "timeline": "2025–2026 · Academic / personal project",
      "deliverables": [
        "Visual identity",
        "Game screens",
        "Interaction flow",
        "Mobile prototype"
      ],
      "context": "Gilda GO! turns a familiar appetizer into a playful experience. Players complete a sequence of ingredients before time runs out, with an identity connecting food and interaction.",
      "challenge": "Explain a short game mechanic and keep actions, ingredients and progression clear within a mobile screen.",
      "process": "The flow connects the game introduction, level selection and gameplay. Ingredient screens introduce the visual content, while level selection organises progression.",
      "design": "The interface combines green backgrounds, yellow accents and ingredient imagery. Numbering and headings distinguish levels, while primary actions stand out within a playful composition.",
      "result": "A mobile prototype bringing together visual identity, screen design and a game flow. It explores how an interface and visual feedback can communicate a simple mechanic.",
      "visualSystem": {
        "color": "Green and yellow form an energetic, recognisable identity.",
        "components": "Welcome screens, level selection and gameplay elements.",
        "graphicSystem": "Ingredient photography, food-inspired graphics and expressive typography."
      }
    }
  },
  {
    "slug": "muebles-alvarez",
    "number": "05",
    "title": "Muebles Álvarez",
    "categories": [
      "Diseño web",
      "Dirección de arte",
      "Diseño responsive"
    ],
    "featured": false,
    "year": "2026",
    "timeline": "2025–2026 · Proyecto académico / personal",
    "description": "Una propuesta web editorial para presentar mobiliario e interiorismo con una identidad contemporánea.",
    "type": "Propuesta de rediseño web",
    "role": "Dirección visual y diseño de interfaz",
    "tools": [],
    "deliverables": [
      "Dirección visual",
      "Rediseño de interfaz",
      "Pantallas web",
      "Adaptaciones responsive"
    ],
    "cover": {
      "src": "/projects/muebles-alvarez/cover.jpg",
      "alt": "Propuesta web de Muebles Álvarez en un ordenador"
    },
    "content": {
      "context": "Propuesta de rediseño para Muebles Álvarez Caravaca, una marca de mobiliario e interiorismo. Plantea una presencia digital más editorial, con protagonismo de la fotografía, el producto y la identidad de marca.",
      "challenge": "Actualizar la presentación visual de productos y servicios y organizar la información dentro de una interfaz coherente con el universo del mobiliario y el interiorismo.",
      "process": {
        "text": "El planteamiento parte de la relación entre producto, espacio e identidad. La estructura diferencia navegación, presentación de la marca y contenido de producto para construir una portada con una lectura clara.",
        "images": []
      },
      "design": {
        "text": "Los tonos cálidos, la composición espaciosa y la fotografía de mobiliario construyen una presencia serena. La tipografía adquiere un papel gráfico en la cabecera y convive con una navegación de escala más contenida.",
        "images": []
      },
      "responsive": {
        "text": "La propuesta incluye adaptaciones de la interfaz a distintos tamaños de pantalla. La prioridad es conservar el protagonismo de las imágenes y la jerarquía entre navegación, marca y contenido.",
        "images": []
      },
      "result": {
        "text": "Un concepto de rediseño web que conecta dirección de arte y presentación del producto. El conjunto explora una presencia digital más cuidada para el mobiliario y los servicios de interiorismo de la marca.",
        "images": []
      },
      "visualSystem": {
        "images": [],
        "typography": "Contraste entre la marca en gran formato y los textos de navegación e información.",
        "color": "Tonos neutros y cálidos que acompañan a las imágenes del mobiliario.",
        "graphicSystem": "Una dirección editorial que utiliza espacio, imagen y escala para presentar el producto."
      }
    },
    "en": {
      "categories": [
        "Web design",
        "Art direction",
        "Responsive design"
      ],
      "description": "An editorial website proposal for furniture and interior design with a contemporary identity.",
      "type": "Website redesign proposal",
      "role": "Visual direction and interface design",
      "timeline": "2025–2026 · Academic / personal project",
      "deliverables": [
        "Visual direction",
        "Interface redesign",
        "Website screens",
        "Responsive layouts"
      ],
      "context": "A redesign proposal for Muebles Álvarez Caravaca, a furniture and interior design brand. It proposes an editorial digital presence focused on photography, products and brand identity.",
      "challenge": "Update the visual presentation of products and services, organising information in an interface that fits the world of furniture and interior design.",
      "process": "The approach centres on product, space and identity. Navigation, brand presentation and product content are differentiated to create a clear homepage.",
      "design": "Warm tones, spacious composition and furniture photography create a calm presence. Typography takes on a graphic role in the header alongside more restrained navigation.",
      "responsive": "The proposal includes adaptations for different screen sizes, preserving the focus on imagery and the hierarchy between navigation, brand and content.",
      "result": "A website redesign concept connecting art direction and product presentation, exploring a more considered digital presence for the brand’s furniture and interior design services.",
      "visualSystem": {
        "typography": "Contrast between large-scale brand typography and navigation and information text.",
        "color": "Warm, neutral tones complement the furniture imagery.",
        "graphicSystem": "An editorial direction using space, image and scale to present the product."
      }
    }
  }
]

const priorityCase = catalog.find(project => project.slug === 'murcia-pedalea')
export const projects = priorityCase ? [priorityCase, ...catalog.filter(project => project !== priorityCase)] : catalog
export const featuredProjects = projects.filter((project) => project.featured)
export const moreProjects = projects.filter((project) => !project.featured)
export function getProject(slug: string) { return projects.find((project) => project.slug === slug) }
export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
