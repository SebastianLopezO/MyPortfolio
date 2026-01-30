export type Language = "es" | "en";

export const translations = {
  // Navigation
  nav: {
    home: { es: "Inicio", en: "Home" },
    about: { es: "Sobre Mí", en: "About" },
    experience: { es: "Experiencia", en: "Experience" },
    skills: { es: "Habilidades", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
  },

  // Hero Section
  hero: {
    greeting: { es: "Hola, Mundo!", en: "Hello, World!" },
    title: { es: "Hola 👋, Soy", en: "Hi 👋, I'm" },
    role1: { es: "Backend Developer", en: "Backend Developer" },
    role2: { es: "Data Analyst", en: "Data Analyst" },
    description: {
      es: "Un desarrollador apasionado de",
      en: "A passionate developer from",
    },
    location: { es: "Medellín, Colombia", en: "Medellín, Colombia" },
    descriptionEnd: {
      es: ", construyendo sistemas eficientes y descubriendo insights de datos complejos.",
      en: ", building efficient systems and uncovering insights from complex data.",
    },
    ctaCV: { es: "¿Quieres ver mi CV?", en: "Want to see my CV?" },
    ctaProjects: { es: "Ver Proyectos", en: "View Projects" },
  },

  // About Section
  about: {
    title: { es: "La Mentalidad del Ingeniero", en: "The Engineer's Mindset" },
    subtitle: {
      es: "Entendiendo la complejidad, entregando simplicidad",
      en: "Understanding complexity, delivering simplicity",
    },
    quote: {
      es: '"La ingeniería es el arte de entender sistemas complejos"',
      en: '"Engineering is the art of understanding complex systems"',
    },
    intro: {
      es: "Soy Sebastián López, estudiante de Ingeniería Informática apasionado por el desarrollo de software y el análisis de datos.",
      en: "I am Sebastián López, a Computer Engineering student passionate about software development and data analysis.",
    },
    paragraph1: {
      es: "Soy una persona con iniciativa y una curiosidad insaciable que me ha llevado a aprender de forma autodidacta en mi campo de interés. Mis habilidades investigativas, analíticas y capacidad de aprendizaje han sido cruciales en este proceso.",
      en: "My academic background provides a strong foundation in computational thinking and problem-solving, enabling me to create efficient solutions for complex challenges.",
    },
    paragraph2: {
      es: "Mi formación abarca diversos conocimientos con enfoque al área tecnológica, logrando desarrollar una pasión por el conocimiento y viendo la educación como un impulso para mi formación como persona y como profesional.",
      en: "I enjoy combining my technical skills with my curiosity to continuously learn new technologies and improve my craft.",
    },
    paragraph3: {
      es: "Mis experiencias académicas y profesionales me han formado como un individuo versátil capaz de abordar desafíos complejos a través del pensamiento analítico, la creatividad y el trabajo en equipo.",
      en: "My academic and professional experiences have shaped me into a versatile individual capable of tackling complex challenges through analytical thinking, creativity, and teamwork.",
    },
    stats: {
      backendDev: { es: "Backend Dev", en: "Backend Dev" },
      dataAnalysis: { es: "Análisis de Datos", en: "Data Analysis" },
      iotProjects: { es: "Proyectos IoT", en: "IoT Projects" },
      years: { es: "3+ Años", en: "3+ Years" },
      expert: { es: "Experto", en: "Expert" },
      innovative: { es: "Innovador", en: "Innovative" },
    },
    education: { es: "Educación", en: "Education" },
    inProgress: { es: "En Curso", en: "In Progress" },
    degrees: {
      bachelor: {
        es: "Ingeniería Informática",
        en: "Bachelor's in Computer Engineering",
      },
      technician: {
        es: "Técnico en Programación de Software",
        en: "Software Programming Technician",
      },
      assistant: {
        es: "Técnico Auxiliar en Desarrollo de Software",
        en: "Assistant Software Development Technician",
      },
      highschool: {
        es: "Bachiller con Especialización en Informática",
        en: "High School with Computer Science Specialization",
      },
    },
  },

  // Experience Section
  experience: {
    title: { es: "Experiencia Profesional", en: "Professional Experience" },
    subtitle: {
      es: "Construyendo el futuro, un sistema a la vez",
      en: "Building the future, one system at a time",
    },
    current: { es: "Actual", en: "Current" },
    jobs: {
      tivenos: {
        role: { es: "IT Manager & Backend CRM Developer", en: "IT Manager & Backend CRM Developer" },
        description: {
          es: "Liderando la infraestructura de TI y desarrollando soluciones backend robustas para CRM con frameworks modernos.",
          en: "Leading IT infrastructure and developing robust CRM backend solutions with modern frameworks.",
        },
      },
      adcom: {
        role: { es: "CRM & MarTech Developer", en: "CRM & MarTech Developer" },
        description: {
          es: "Construyendo soluciones de tecnología de marketing y automatización de CRM con integración de IA.",
          en: "Building marketing technology solutions and CRM automation with AI integration.",
        },
      },
      muvu: {
        role: { es: "Backend Developer & Data Analyst", en: "Backend Developer & Data Analyst" },
        description: {
          es: "Desarrollé arquitecturas de datos y automaticé procesos de CRM con análisis avanzado.",
          en: "Developed data architectures and automated CRM processes with advanced analytics.",
        },
      },
      quipux: {
        role: { es: "Data Analyst", en: "Data Analyst" },
        description: {
          es: "Creé sistemas de reportes automatizados y pipelines de datos para inteligencia de negocio.",
          en: "Created automated reporting systems and data pipelines for business intelligence.",
        },
      },
    },
  },

  // Skills Section
  skills: {
    title: { es: "Habilidades Técnicas", en: "Technical Skills" },
    subtitle: {
      es: "Un kit de herramientas completo para el desarrollo moderno",
      en: "A comprehensive toolkit for modern development",
    },
    categories: {
      languages: { es: "Lenguajes", en: "Languages" },
      frontend: { es: "Frontend", en: "Frontend" },
      backend: { es: "Backend", en: "Backend" },
      dataAnalytics: { es: "Datos & Analytics", en: "Data & Analytics" },
      cloudDevops: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
      database: { es: "Base de Datos", en: "Database" },
      iot: { es: "IoT", en: "IoT" },
      testingTools: { es: "Testing & Herramientas", en: "Testing & Tools" },
    },
    additional: {
      es: "Tecnologías y Herramientas Adicionales",
      en: "Additional Technologies & Tools",
    },
  },

  // Projects Section
  projects: {
    title: { es: "Portafolio & Proyectos", en: "Portfolio & Projects" },
    subtitle: { es: "Mostrando innovación a través del código", en: "Showcasing innovation through code" },
    filters: {
      all: { es: "Todos", en: "All" },
      organizations: { es: "Organizaciones", en: "Organizations" },
      repositories: { es: "Repositorios", en: "Repositories" },
      projects: { es: "Proyectos", en: "Projects" },
      certificates: { es: "Certificados", en: "Certificates" },
    },
    featured: { es: "Proyecto Destacado", en: "Featured Project" },
    viewCode: { es: "Ver Código", en: "View Code" },
    view: { es: "Ver", en: "View" },
    viewCredential: { es: "Ver Credencial", en: "View Credential" },
    verifiedCertificate: { es: "Certificado Verificado", en: "Verified Certificate" },
    viewOrg: { es: "Ver Organización", en: "View Organization" },
    viewRepos: { es: "Ver Repositorios", en: "View Repositories" },
    repoCount: { es: "repositorios", en: "repositories" },
    githubStats: { es: "Estadísticas de GitHub", en: "GitHub Statistics" },
    activity: { es: "Gráfico de Actividad", en: "Activity Graph" },
  },

  // Testimonials Section
  testimonials: {
    title: { es: "Lo Que Dicen Mis Colegas", en: "What My Colleagues Say" },
    subtitle: { es: "recomendaciones de LinkedIn", en: "recommendations from LinkedIn" },
    recommendations: { es: "Recomendaciones", en: "Recommendations" },
    fromSupervisors: { es: "De Supervisores", en: "From Supervisors" },
    fromTeammates: { es: "De Compañeros", en: "From Teammates" },
    relationships: {
      directSupervisor: { es: "Supervisor directo", en: "Direct supervisor" },
      sameTeam: { es: "Mismo equipo", en: "Same team" },
      seniorPosition: { es: "Cargo superior", en: "Senior position" },
      classmate: { es: "Compañero de estudios", en: "Classmate" },
    },
  },

  // Contact Section
  contact: {
    title: { es: "Contáctame", en: "Get In Touch" },
    subtitle: {
      es: "Construyamos algo increíble juntos",
      en: "Let's build something amazing together",
    },
    connect: { es: "Conectemos", en: "Let's Connect" },
    description: {
      es: "Ya sea que tengas un proyecto en mente, una pregunta sobre mi trabajo, o simplemente quieras saludar - me encantaría saber de ti.",
      en: "Whether you have a project in mind, a question about my work, or just want to say hello – I'd love to hear from you.",
    },
    location: { es: "Ubicación", en: "Location" },
    phone: { es: "Teléfono", en: "Phone" },
    email: { es: "Correo", en: "Email" },
    form: {
      fullName: { es: "Nombre Completo", en: "Full Name" },
      email: { es: "Correo Electrónico", en: "Email" },
      message: { es: "Mensaje", en: "Message" },
      placeholder: {
        name: { es: "Tu nombre", en: "John Doe" },
        email: { es: "tu@email.com", en: "john@example.com" },
        message: { es: "Cuéntame sobre tu proyecto...", en: "Tell me about your project..." },
      },
      send: { es: "Enviar Mensaje", en: "Send Message" },
      sending: { es: "Enviando...", en: "Sending..." },
    },
    toast: {
      title: { es: "¡Mensaje enviado!", en: "Message sent!" },
      description: {
        es: "Gracias por contactarme. Te responderé pronto.",
        en: "Thank you for reaching out. I'll get back to you soon.",
      },
    },
  },

  // Footer
  footer: {
    builtWith: { es: "&lt;/construido con pasión&gt;", en: "&lt;/built with passion&gt;" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },
};

export function t(
  key: string,
  lang: Language
): string {
  const keys = key.split(".");
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (value && typeof value === "object" && lang in value) {
    return value[lang];
  }
  
  return key;
}
