// Datos oficiales del Portfolio de Patricia Aparicio Díaz (Patri Aparicio)
export const portfolioData = {
  profile: {
    fullName: "Patricia Aparicio Díaz",
    displayName: "Patri Aparicio",
    title: "Desarrolladora Frontend Junior // React & JavaScript",
    tagline: "Desarrolladora Frontend Junior especializada en React, JavaScript moderno, Tailwind CSS, Testing (Vitest & Testing Library) y diseño con Figma y Stitch. Actualmente cursando un bootcamp intensivo de más de 600 horas para convertirse en Full Stack.",
    location: "Sevilla, España",
    phone: "627 50 52 39",
    email: "apariciodiazpatricia@gmail.com",
    availability: "Disponible de forma inmediata para puestos de Frontend Junior (remoto / híbrido)",
    socialLinks: {
      github: "https://github.com/apariciodiazpatricia-cell",
      linkedin: "https://linkedin.com/in/patriciaapariciodiaz",
      vercel: "https://vercel.com/apariciodiazpatricia-cells-projects",
      email: "mailto:apariciodiazpatricia@gmail.com"
    },
    bio: [
      "Desarrolladora Frontend Junior con sólida base en React, JavaScript moderno, Testing automatizado (Vitest, React Testing Library), maquetación responsiva con Tailwind CSS y herramientas de diseño como Figma y Stitch.",
      "Actualmente inmersa en un bootcamp intensivo de más de 600 horas de desarrollo web para completar su formación y titularse como Full Stack.",
      "Aporta una valiosa trayectoria previa en coordinación de equipos, gestión operativa y atención al cliente, destacando por su cercanía, rigor y resolución ágil de problemas."
    ],
    stats: [
      { label: "Proyectos Clave", value: "4+" },
      { label: "Bootcamp Intensivo", value: "+600 Horas" },
      { label: "Especialidad", value: "Frontend Jr" },
      { label: "Enfoque", value: "Full Stack" }
    ]
  },

  defaultCvText: `
PATRICIA APARICIO DÍAZ (Patri Aparicio)
Email: apariciodiazpatricia@gmail.com | Tel: 627 50 52 39 | Sevilla, España
Perfil: Desarrolladora Frontend Junior en formación intensiva en Bootcamp de más de 600 horas para convertirse en Full Stack.
Stack Técnico: HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Testing (Vitest, React Testing Library, Jest), Vite, Figma, Stitch, Git, GitHub, Vercel.
En formación Backend: Node.js, Express, PostgreSQL, SQL, REST APIs.
Herramientas IA: Google Gemini API, OpenAI, ElevenLabs, Suno.
Disponibilidad: Inmediata para puestos de Frontend Junior (remoto o híbrido en Sevilla).
  `.trim(),

  skills: {
    frontend: [
      { name: "React 19 / 18", level: 90, category: "Core" },
      { name: "JavaScript (ES6+)", level: 90, category: "Core" },
      { name: "Tailwind CSS & Modern CSS", level: 95, category: "Styling" },
      { name: "React Router & Hooks", level: 88, category: "Routing" },
      { name: "HTML5 & Responsive Design", level: 95, category: "UX/UI" }
    ],
    designAndTools: [
      { name: "Figma (UI/UX & Prototyping)", level: 92, category: "Design" },
      { name: "Stitch (Generative UI)", level: 88, category: "Prototyping" },
      { name: "Design Systems & Tokens", level: 85, category: "UX/UI" },
      { name: "Wireframing & User Flows", level: 86, category: "UX" },
      { name: "Git & GitHub Workflow", level: 88, category: "DevOps" }
    ],
    backendAndAi: [
      { name: "Node.js & Express API", level: 78, category: "Backend" },
      { name: "Google Gemini 2.5 Flash API", level: 88, category: "AI & LLM" },
      { name: "RESTful APIs & CRUD Endpoints", level: 90, category: "Integration" },
      { name: "PostgreSQL & Data Modeling", level: 75, category: "Database" },
      { name: "APIs Externas (Meteo / Vercel)", level: 88, category: "APIs" }
    ],
    testing: [
      { name: "Vitest (Unit Testing Suites)", level: 88, category: "Testing" },
      { name: "React Testing Library", level: 85, category: "Testing" },
      { name: "Component Testing & Mocks", level: 85, category: "Testing" },
      { name: "Test Assertions & Snapshots", level: 84, category: "Quality" },
      { name: "Clean Code & QA Standards", level: 86, category: "Quality" }
    ],
    softSkills: [
      "Testing & Calidad de Código",
      "Prototipado Figma & Stitch",
      "Resolución Ágil de Problemas",
      "Atención al Detalle UI/UX",
      "Aprendizaje Acelerado",
      "Comunicación & Trabajo en Equipo"
    ]
  },

  projects: [
    {
      id: "world-cup-2026",
      title: "WORLD CUP 2026",
      subtitle: "App deportiva en tiempo real con estadísticas y calendario dinámico",
      description: "Aplicación completa desarrollada en React para la Copa Mundial 2026. Integra consumo de APIs deportivas, estadísticas dinámicas, filtros en tiempo real, navegación con React Router y arquitectura de componentes reutilizables y escalables.",
      tags: ["React", "Vite", "Sports APIs", "React Router", "Tailwind CSS", "Dynamic Stats"],
      highlight: "Consumo de APIs deportivas y estadísticas dinámicas",
      github: "https://github.com/apariciodiazpatricia-cell",
      demo: "https://world-cup2026-sigma-weld.vercel.app/",
      badge: "Deportes & Data",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: "habitatcode",
      title: "HABITATCODE",
      subtitle: "Plataforma inmobiliaria moderna para estudiantes",
      description: "Plataforma de búsqueda y gestión de alojamientos estudiantiles construida en React basada en sistemas de diseño en Figma. Experiencia 100% responsive, filtros avanzados de ubicación y precios, y micro-interacciones fluidas.",
      tags: ["React", "Figma Design", "Responsive Design", "Modern UI", "Filters"],
      highlight: "Diseño fiel a Figma con alta fidelidad y UX adaptativa",
      github: "https://github.com/apariciodiazpatricia-cell",
      demo: "https://vercel.com/apariciodiazpatricia-cells-projects",
      video: "/assets/inmobiliaria-demo-Bv8omhny.mp4",
      badge: "Inmobiliaria & UX",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "valhalla-chatarrero",
      title: "VALHALLA DEL CHATARRERO",
      subtitle: "E-commerce inmersivo con temática post-apocalíptica",
      description: "Interfaz de comercio electrónico con estética cyber-punk/post-apocalíptica. Incluye componentes React avanzados, catálogo interactivo con filtros, carrito de compra reactivo, integración meteorológica en tiempo real y efectos visuales vanguardistas.",
      tags: ["React", "E-Commerce", "OpenWeather API", "Audio/Video FX", "State Management"],
      highlight: "Integración meteorológica en tiempo real y UI inmersiva",
      github: "https://github.com/apariciodiazpatricia-cell",
      demo: "https://vercel.com/apariciodiazpatricia-cells-projects",
      video: "/assets/valhalla-demo-CyQQvO7S.mp4",
      badge: "E-Commerce & Clima",
      color: "from-orange-600 to-red-600"
    },
    {
      id: "buhardilla-retro",
      title: "LA BUHARDILLA RETRO",
      subtitle: "E-commerce vintage (60s, 70s, 80s) con API propia CRUD y Meteo API",
      description: "Plataforma de comercio electrónico interactiva con temática retro y catálogo de artículos icónicos de los años 60, 70 y 80. Desarrollada en React, consume una API propia para operaciones CRUD completas (crear, leer, actualizar y eliminar artículos y gestión de usuarios), junto a la integración en directo de la API meteorológica para adaptar el ambiente visual en tiempo real.",
      tags: ["React", "Custom API (CRUD)", "Gestión Usuarios", "Meteo API", "Vintage UI", "Tailwind CSS"],
      highlight: "API propia con CRUD completo de artículos/usuarios + Meteo API en vivo",
      github: "https://github.com/apariciodiazpatricia-cell",
      demo: "https://la-buhardilla-retro.vercel.app/",
      video: "/assets/buhardilla-demo-CgHES6-H.mp4",
      badge: "CRUD API & Retro E-Commerce",
      color: "from-lime-500 to-emerald-600"
    }
  ],

  suggestedQuestions: [
    "¿Quién es Patri?",
    "Stack tecnológico",
    "Proyectos destacados",
    "Experiencia laboral",
    "Figma y Stitch",
    "Formación backend",
    "¿Disponible para trabajar?",
    "Contacto directo"
  ]
};
