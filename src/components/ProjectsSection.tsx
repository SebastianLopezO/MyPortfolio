import {useState} from "react";
import {
    Award,
    Building2,
    Calendar,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    FileCode,
    FolderGit2,
    Github,
    GraduationCap,
    Leaf,
    Sparkles,
    Users,
    Wrench
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";

type FilterType = "all" | "organizations" | "repositories" | "projects" | "certificates";

interface Project {
    title: string;
    descriptionEs: string;
    descriptionEn: string;
    fullDescriptionEs?: string;
    fullDescriptionEn?: string;
    technologies: string[];
    type: "repositories" | "projects" | "certificates";
    link?: string;
    github?: string;
    featured?: boolean;
    issuer?: string;
    date?: string;
    dateEnd?: string;
    association?: string;
    credentialId?: string;
    collaborators?: number;
}

interface Organization {
    name: string;
    icon: "graduation" | "wrench" | "leaf" | "users";
    descriptionEs: string;
    descriptionEn: string;
    github: string;
    metricsUrl: string;
    technologies: string[];
    repositories: Repository[];
}

interface Repository {
    name: string;
    owner: string;
}

const organizations: Organization[] = [
    {
        name: "EngineeringSebastian-s",
        icon: "graduation",
        descriptionEs: "Proyectos de Ingeniería Informática en el Politécnico Jaime Isaza Cadavid, abarcando programación, bases de datos, sistemas operativos, IA y redes.",
        descriptionEn: "Computer Engineering projects at Politécnico Jaime Isaza Cadavid, covering programming, databases, operating systems, AI, and networks.",
        github: "https://github.com/EngineeringSebastian-s",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.engineeringsebastians.svg",
        technologies: ["Java", "Python", "MongoDB", "Docker", "C++"],
        repositories: [
            {name: "DB2", owner: "EngineeringSebastian-s"},
            {name: "SistemasOperativos", owner: "EngineeringSebastian-s"},
            {name: "ARQH", owner: "EngineeringSebastian-s"},
            {name: "TLP2", owner: "EngineeringSebastian-s"},
            {name: "TLP1", owner: "EngineeringSebastian-s"},
            {name: "Grafos", owner: "EngineeringSebastian-s"},
            {name: "Arboles", owner: "EngineeringSebastian-s"},
            {name: "Polinomios", owner: "EngineeringSebastian-s"},
            {name: "MatricesDispersas", owner: "EngineeringSebastian-s"},
            {name: "SemioticaInformatica", owner: "EngineeringSebastian-s"},
            {name: "AP4", owner: "EngineeringSebastian-s"},
            {name: "SistemaDeNotas", owner: "EngineeringSebastian-s"},
            {name: "AP3", owner: "EngineeringSebastian-s"},
            {name: "AP2", owner: "EngineeringSebastian-s"},
            {name: "AP1", owner: "EngineeringSebastian-s"},
            {name: "CarSpace", owner: "EngineeringSebastian-s"},
        ],
    },
    {
        name: "TechnicalSebastians",
        icon: "wrench",
        descriptionEs: "Proyectos del Técnico en Programación de Software en IUSH, incluyendo aplicaciones web y herramientas de sistema con C#, PHP, JavaScript y MySQL.",
        descriptionEn: "Software Programming Technique projects from IUSH, including web applications and system tools with C#, PHP, JavaScript, and MySQL.",
        github: "https://github.com/TechnicalSebastians",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.technicalsebastians.svg",
        technologies: ["C#", "PHP", "JavaScript", "MySQL", "Apache", "Docker"],
        repositories: [
            {name: "VideoToAscii", owner: "TechnicalSebastians"},
            {name: "SitePersist", owner: "TechnicalSebastians"},
            {name: "CalculadoraNasa", owner: "TechnicalSebastians"},
            {name: "AdminSitePersist", owner: "TechnicalSebastians"},
        ],
    },
    {
        name: "VocationalSebastian-s",
        icon: "graduation",
        descriptionEs: "Proyectos del Bachillerato Técnico en Programación de Software en Pascual Bravo con INEM, usando HTML, PHP, Visual Basic .NET, Java y Python.",
        descriptionEn: "Technical High School projects from Pascual Bravo with INEM, using HTML, PHP, Visual Basic .NET, Java, and Python.",
        github: "https://github.com/VocationalSebastian-s",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.vocationalsebastians.svg",
        technologies: ["HTML", "PHP", "VB.NET", "Java", "Python"],
        repositories: [
            {name: "TheCompanyDream", owner: "VocationalSebastian-s"},
            {name: "InstintoAcuatico", owner: "VocationalSebastian-s"},
            {name: "BitMapConvertColor", owner: "VocationalSebastian-s"},
            {name: "BingoExcel", owner: "VocationalSebastian-s"},
            {name: "CalculadoraJava", owner: "VocationalSebastian-s"},
            {name: "PositionHorse", owner: "VocationalSebastian-s"},
            {name: "GuiaPython", owner: "VocationalSebastian-s"},
            {name: "DimensionCube", owner: "VocationalSebastian-s"},
        ],
    },
    {
        name: "SmartPotTech",
        icon: "leaf",
        descriptionEs: "Proyecto personal IoT para automatizar jardines hidropónicos con ESP32, Spring Boot, React y MongoDB. Desarrollado en cursos de Arquitectura de Hardware, Diseño de Software y Taller de Lenguajes.",
        descriptionEn: "Personal IoT project to automate hydroponic gardens with ESP32, Spring Boot, React, and MongoDB. Developed across Hardware Architecture, Software Design, and Programming Languages courses.",
        github: "https://github.com/SmartPotTech",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.smartpottech.svg",
        technologies: ["React", "Spring Boot", "MongoDB", "ESP32", "Redis", "Node.js"],
        repositories: [
            {name: "SmartPot-API", owner: "SmartPotTech"},
            {name: ".github", owner: "SmartPotTech"},
            {name: "SmartPot-Web", owner: "SmartPotTech"},
            {name: "SmartPot-DB", owner: "SmartPotTech"},
            {name: "SmartPot-IoT", owner: "SmartPotTech"},
            {name: "SmartPot-Middleware", owner: "SmartPotTech"},
            {name: "SmartPot-DataAnalytics", owner: "SmartPotTech"},
            {name: "SmartPot-DataGenerator", owner: "SmartPotTech"},
            {name: "SmartPot-Mail", owner: "SmartPotTech"},
            {name: "SmartPot-Cache", owner: "SmartPotTech"},
        ],
    },
];

const projects: Project[] = [
    // Featured Project - SmartPot
    {
        title: "SmartPot",
        descriptionEs: "Sistema IoT diseñado para transformar la gestión de jardines hidropónicos mediante la integración de tecnologías modernas, combinando software y hardware para una solución eficiente, escalable y fácil de manejar.",
        descriptionEn: "IoT system designed to transform hydroponic garden management through modern technology integration, combining software and hardware for an efficient, scalable, and easy-to-manage solution.",
        fullDescriptionEs: `SmartPot es un sistema diseñado para transformar la gestión de jardines hidropónicos mediante la integración de tecnologías modernas. Este proyecto combina software y hardware para ofrecer una solución eficiente, escalable y fácil de manejar, centrada en la automatización y el monitoreo remoto.

🌐 Portal Web: Desarrollado con Vite, React, TypeScript, Tailwind CSS y Plotly, proporcionando una experiencia intuitiva y herramientas avanzadas para la visualización de datos en tiempo real.

⚙️ Backend: Construido con Spring Boot en Java 17, gestionando una API robusta con Redis como caché y MongoDB como base de datos. Incluye seguridad avanzada con Spring Security + JWT, documentación con Swagger, servicios de correo, manejo multi-hilos y arquitectura de alto rendimiento.

🔌 IoT: Simulación en Wokwi con MicroPython para control de sensores y actuadores. Comunicación en tiempo real mediante uRequests para envío y recepción de datos con capacidad de respuesta instantánea.`,
        fullDescriptionEn: `SmartPot is a system designed to transform hydroponic garden management through modern technology integration. This project combines software and hardware to offer an efficient, scalable, and easy-to-manage solution, focused on automation and remote monitoring.

🌐 Web Portal: Developed with Vite, React, TypeScript, Tailwind CSS, and Plotly, providing an intuitive experience and advanced tools for real-time data visualization.

⚙️ Backend: Built with Spring Boot on Java 17, managing a robust API with Redis as cache and MongoDB as database. Includes advanced security with Spring Security + JWT, Swagger documentation, email services, multi-thread handling, and high-performance architecture.

🔌 IoT: Wokwi simulation with MicroPython for sensor and actuator control. Real-time communication via uRequests for instant data sending and receiving with immediate response capability.`,
        technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Plotly", "Spring Boot", "Java 17", "MongoDB", "Redis", "Spring Security", "JWT", "Swagger", "MicroPython", "ESP32", "Wokwi", "Node.js", "Docker", "REST API"],
        type: "projects",
        github: "https://github.com/SmartPotTech",
        featured: true,
        date: "Mar 2024",
        dateEnd: "Actualidad",
        association: "Politécnico Colombiano 'Jaime Isaza Cadavid'",
        collaborators: 3,
    },
    // Certificates
    {
        title: "Curso de DAX para Power BI",
        descriptionEs: "Fórmulas y expresiones DAX avanzadas para modelado y análisis de datos en Power BI.",
        descriptionEn: "Advanced DAX formulas and expressions for Power BI data modeling and analytics.",
        technologies: ["Power BI", "DAX", "Data Analytics"],
        type: "certificates",
        issuer: "Platzi",
        date: "Sept 2024",
        credentialId: "657cf0d3-b484-47a2-aff4-094afbb201c0",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Curso de Análisis de Datos con Power BI",
        descriptionEs: "Técnicas de análisis de datos y visualización usando Microsoft Power BI.",
        descriptionEn: "Data analysis techniques and visualization using Microsoft Power BI.",
        technologies: ["Power BI", "Data Analysis", "Visualization"],
        type: "certificates",
        issuer: "Platzi",
        date: "Aug 2024",
        credentialId: "481a49cd-7a2a-4e8b-a694-e1f9b68f6ae7",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Domina Excel",
        descriptionEs: "Dominio completo de Excel incluyendo VBA, tablas dinámicas, dashboards y fórmulas avanzadas.",
        descriptionEn: "Complete Excel mastery including VBA, pivot tables, dashboards, and advanced formulas.",
        technologies: ["Excel", "VBA", "Dashboards", "Pivot Tables"],
        type: "certificates",
        issuer: "Platzi",
        date: "Jul 2024",
        credentialId: "9c6e065c-5538-46ae-aac5-ca66715f3cd0",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Google Search Console para SEO",
        descriptionEs: "Fundamentos de SEO y técnicas de optimización con Google Search Console.",
        descriptionEn: "SEO fundamentals and Google Search Console optimization techniques.",
        technologies: ["SEO", "Google Search Console", "Web Analytics"],
        type: "certificates",
        issuer: "Platzi",
        date: "Jun 2024",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Green Digital Skills Certificate",
        descriptionEs: "Habilidades digitales para prácticas tecnológicas sostenibles y verdes.",
        descriptionEn: "Digital skills for sustainable and green technology practices.",
        technologies: ["Green Tech", "Sustainability", "Digital Skills"],
        type: "certificates",
        issuer: "INCO Academy",
        date: "Mar 2024",
        credentialId: "4365637690SL",
    },
    {
        title: "Data Science & AI - Engancha TIC 2.0",
        descriptionEs: "Fundamentos de Ciencia de Datos e Inteligencia Artificial con Python.",
        descriptionEn: "Data Science and Artificial Intelligence fundamentals with Python.",
        technologies: ["Python", "Data Science", "AI", "Databases"],
        type: "certificates",
        issuer: "Universidad de Antioquia",
        date: "Dec 2023",
        credentialId: "W9JS3YDZ6P",
    },
    {
        title: "Ciberseguridad - Engancha TIC 2.0",
        descriptionEs: "Fundamentos de ciberseguridad y prácticas de seguridad en ingeniería de sistemas.",
        descriptionEn: "Cybersecurity fundamentals and systems engineering security practices.",
        technologies: ["Cybersecurity", "Systems Engineering"],
        type: "certificates",
        issuer: "Universidad de Antioquia",
        date: "Dec 2023",
        credentialId: "W9JS3YDZ6P",
    },
    {
        title: "Programación Web - Engancha TIC 2.0",
        descriptionEs: "Desarrollo web con JavaScript, Java y diseño responsive.",
        descriptionEn: "Web development with JavaScript, Java, and responsive design.",
        technologies: ["JavaScript", "Java", "Responsive Design", "Web Dev"],
        type: "certificates",
        issuer: "Universidad de Antioquia",
        date: "Dec 2023",
        credentialId: "6PUBF6RVC2",
    },
    {
        title: "Visualización de Datos - Engancha TIC 2.0",
        descriptionEs: "Técnicas de visualización de datos y analítica.",
        descriptionEn: "Data visualization and analytics techniques.",
        technologies: ["Data Visualization", "Analytics"],
        type: "certificates",
        issuer: "Universidad de Antioquia",
        date: "Dec 2023",
    },
    {
        title: "Curso de IoT: Protocolos de Comunicación",
        descriptionEs: "Protocolos de comunicación IoT y sistemas embebidos.",
        descriptionEn: "IoT communication protocols and embedded systems.",
        technologies: ["IoT", "Protocols", "Embedded Systems"],
        type: "certificates",
        issuer: "Platzi",
        date: "Dec 2023",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Curso Profesional de Git y GitHub",
        descriptionEs: "Control de versiones profesional con Git y flujos de trabajo en GitHub.",
        descriptionEn: "Professional version control with Git and GitHub workflows.",
        technologies: ["Git", "GitHub", "Version Control"],
        type: "certificates",
        issuer: "Platzi",
        date: "Nov 2023",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "Fundamentos de Ingeniería de Software",
        descriptionEs: "Principios y metodologías de ingeniería de software.",
        descriptionEn: "Software engineering principles and methodologies.",
        technologies: ["Software Engineering", "SDLC"],
        type: "certificates",
        issuer: "Platzi",
        date: "Nov 2023",
        link: "https://platzi.com/p/SebastianLopezO/",
    },
    {
        title: "IT Specialist - Python",
        descriptionEs: "Certificación oficial de Python cubriendo tipos de datos, flujo de control, operaciones I/O y manejo de errores.",
        descriptionEn: "Official Python certification covering data types, control flow, I/O operations, and error handling.",
        technologies: ["Python", "Programming"],
        type: "certificates",
        issuer: "Certiport - Pearson VUE",
        date: "Nov 2023",
        credentialId: "9GmW-s4Nk",
    },
    {
        title: "Python Django 2",
        descriptionEs: "Desarrollo avanzado con el framework web Django.",
        descriptionEn: "Advanced Django web framework development.",
        technologies: ["Python", "Django", "Web Development"],
        type: "certificates",
        issuer: "Comfenalco Antioquia",
        date: "Nov 2023",
    },
    {
        title: "Hacking Ético Gamificado HACKLAB",
        descriptionEs: "Hacking ético y ciberseguridad a través de aprendizaje gamificado.",
        descriptionEn: "Ethical hacking and cybersecurity through gamified learning.",
        technologies: ["Ethical Hacking", "Cybersecurity"],
        type: "certificates",
        issuer: "HackerMentor",
        date: "Aug 2023",
        credentialId: "d61a7018-0d32-4ee4-8b88-13dc95f6002d",
    },
    {
        title: "Problem Solving (Basic)",
        descriptionEs: "Resolución algorítmica de problemas y pensamiento computacional.",
        descriptionEn: "Algorithmic problem solving and computational thinking.",
        technologies: ["Algorithms", "Problem Solving"],
        type: "certificates",
        issuer: "HackerRank",
        date: "Mar 2023",
        credentialId: "a9436f491d0f",
        link: "https://www.hackerrank.com/certificates/a9436f491d0f",
    },
    {
        title: "Java (Basic) Certificate",
        descriptionEs: "Certificación de fundamentos de programación Java.",
        descriptionEn: "Java programming fundamentals certification.",
        technologies: ["Java"],
        type: "certificates",
        issuer: "HackerRank",
        date: "Feb 2023",
        credentialId: "af888d4eded1",
        link: "https://www.hackerrank.com/certificates/af888d4eded1",
    },
    {
        title: "CSS Certificate",
        descriptionEs: "Certificación de estilizado CSS y diseño web.",
        descriptionEn: "CSS styling and web design certification.",
        technologies: ["CSS", "HTML", "Web Design"],
        type: "certificates",
        issuer: "HackerRank",
        date: "Feb 2023",
        credentialId: "0d308cbf0361",
        link: "https://www.hackerrank.com/certificates/0d308cbf0361",
    },
    {
        title: "Python-Django",
        descriptionEs: "Framework Django con Bootstrap, bases de datos y control de versiones.",
        descriptionEn: "Django framework with Bootstrap, databases, and version control.",
        technologies: ["Python", "Django", "Bootstrap", "Databases"],
        type: "certificates",
        issuer: "Comfenalco Antioquia",
        date: "Dec 2022",
    },
    {
        title: "Python (Basic) Certificate",
        descriptionEs: "Fundamentos de programación Python.",
        descriptionEn: "Python programming fundamentals.",
        technologies: ["Python"],
        type: "certificates",
        issuer: "HackerRank",
        date: "Aug 2022",
        link: "https://www.hackerrank.com/",
    },
    {
        title: "SQL (Basic) Certificate",
        descriptionEs: "Gestión de bases de datos SQL y consultas.",
        descriptionEn: "SQL database management and queries.",
        technologies: ["SQL", "MySQL", "Databases"],
        type: "certificates",
        issuer: "HackerRank",
        date: "May 2022",
        link: "https://www.hackerrank.com/",
    },
    {
        title: "Introducción al Excel Profesional",
        descriptionEs: "Fundamentos profesionales de Excel.",
        descriptionEn: "Professional Excel fundamentals.",
        technologies: ["Excel", "Microsoft Office"],
        type: "certificates",
        issuer: "Cámara de Comercio",
        date: "Jun 2022",
    },
    {
        title: "Fundamentos de Programación 1 & 2",
        descriptionEs: "Fundamentos de programación con conceptos de programación funcional.",
        descriptionEn: "Programming fundamentals with functional programming concepts.",
        technologies: ["Programming", "Bootstrap", "Frontend"],
        type: "certificates",
        issuer: "Universidad Tecnológica de Pereira",
        date: "Dec 2021",
    },
    {
        title: "Introducción a la Programación Python",
        descriptionEs: "Introducción a la programación con Python.",
        descriptionEn: "Python programming introduction.",
        technologies: ["Python"],
        type: "certificates",
        issuer: "Universidad EIA",
        date: "May 2021",
    },
    {
        title: "Introduction to HTML",
        descriptionEs: "Fundamentos de HTML para desarrollo web.",
        descriptionEn: "HTML fundamentals for web development.",
        technologies: ["HTML", "Web Development"],
        type: "certificates",
        issuer: "Coursera",
        date: "Dec 2020",
    },
];

const getOrgIcon = (icon: Organization["icon"]) => {
    switch (icon) {
        case "graduation":
            return GraduationCap;
        case "wrench":
            return Wrench;
        case "leaf":
            return Leaf;
        case "users":
        default:
            return Users;
    }
};

const ProjectsSection = () => {
    const [filter, setFilter] = useState<FilterType>("all");
    const [expandedOrg, setExpandedOrg] = useState<string | null>(null);
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const {t, lang} = useLanguage();

    const filterButtons: { label: string; value: FilterType; icon: React.ElementType }[] = [
        {label: t("projects.filters.all"), value: "all", icon: FileCode},
        {label: t("projects.filters.organizations"), value: "organizations", icon: Users},
        {label: t("projects.filters.repositories"), value: "repositories", icon: FolderGit2},
        {label: t("projects.filters.projects"), value: "projects", icon: Github},
        {label: t("projects.filters.certificates"), value: "certificates", icon: Award},
    ];

    const filteredProjects = projects.filter(
        (project) => filter === "all" || filter === "organizations" || filter === "repositories" || project.type === filter
    );

    const certificateCount = projects.filter(p => p.type === "certificates").length;
    const orgCount = organizations.length;
    const totalRepoCount = organizations.reduce((acc, org) => acc + org.repositories.length, 0);

    const showOrganizations = filter === "all" || filter === "organizations";
    const showRepositories = filter === "repositories";
    const showProjects = filter === "all" || filter === "projects";
    const showCertificates = filter === "all" || filter === "certificates";

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container px-4">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="section-title">{t("projects.title")}</h2>
                    <p className="section-subtitle">{t("projects.subtitle")}</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filterButtons.map((btn) => (
                        <Button
                            key={btn.value}
                            variant={filter === btn.value ? "default" : "outline"}
                            onClick={() => setFilter(btn.value)}
                            className={`gap-2 transition-all duration-300 ${
                                filter === btn.value
                                    ? "bg-primary text-primary-foreground glow"
                                    : "border-border hover:border-primary/50"
                            }`}
                        >
                            <btn.icon className="h-4 w-4"/>
                            {btn.label}
                            {btn.value === "certificates" && (
                                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/20 rounded-full">
                  {certificateCount}
                </span>
                            )}
                            {btn.value === "organizations" && (
                                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/20 rounded-full">
                  {orgCount}
                </span>
                            )}
                            {btn.value === "repositories" && (
                                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/20 rounded-full">
                  {totalRepoCount}
                </span>
                            )}
                        </Button>
                    ))}
                </div>

                {/* Organizations Section */}
                {showOrganizations && (
                    <div className="mb-12">
                        <h3 className="text-xl font-serif font-bold mb-6 text-center gradient-text flex items-center justify-center gap-2">
                            <Users className="h-5 w-5"/>
                            {lang === "es" ? "Organizaciones de GitHub" : "GitHub Organizations"}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {organizations.map((org, index) => {
                                const IconComponent = getOrgIcon(org.icon);
                                const isExpanded = expandedOrg === org.name;

                                return (
                                    <div
                                        key={org.name}
                                        className="group p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 glow-hover animate-fade-in-bounce"
                                        style={{animationDelay: `${index * 100}ms`}}
                                    >
                                        {/* Org Header */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <IconComponent className="h-5 w-5"/>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {org.name}
                                                </h4>
                                                <span className="text-xs text-muted-foreground">
                          {org.repositories.length} {t("projects.repoCount")}
                        </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            {lang === "es" ? org.descriptionEs : org.descriptionEn}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {org.technologies.slice(0, 5).map((tech) => (
                                                <span key={tech} className="tech-badge text-xs py-0.5 px-2">
                          {tech}
                        </span>
                                            ))}
                                            {org.technologies.length > 5 && (
                                                <span className="text-xs text-muted-foreground">
                          +{org.technologies.length - 5}
                        </span>
                                            )}
                                        </div>

                                        {/* Metrics Image */}
                                        <div className="mb-4 overflow-hidden rounded-lg border border-border">
                                            <img
                                                src={org.metricsUrl}
                                                alt={`${org.name} metrics`}
                                                width="468"
                                                height="137"
                                                className="w-full h-auto"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Toggle Repositories */}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full mb-3"
                                            onClick={() => setExpandedOrg(isExpanded ? null : org.name)}
                                        >
                                            <FolderGit2 className="h-4 w-4 mr-2"/>
                                            {isExpanded
                                                ? (lang === "es" ? "Ocultar Repositorios" : "Hide Repositories")
                                                : (lang === "es" ? `Ver ${org.repositories.length} Repositorios` : `View ${org.repositories.length} Repositories`)
                                            }
                                        </Button>

                                        {/* Expanded Repositories */}
                                        {isExpanded && (
                                            <div
                                                className="grid grid-cols-1 gap-2 pt-3 border-t border-border animate-fade-in">
                                                {org.repositories.map((repo) => (
                                                    <a
                                                        key={repo.name}
                                                        href={`https://github.com/${repo.owner}/${repo.name}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 p-2 rounded-md bg-muted/50 hover:bg-primary/10 transition-colors text-sm"
                                                    >
                                                        <FolderGit2 className="h-4 w-4 text-primary"/>
                                                        <span
                                                            className="text-foreground hover:text-primary transition-colors">
                              {repo.name}
                            </span>
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        {/* Actions */}
                                        <div className="flex gap-3 pt-3 border-t border-border/50">
                                            <a
                                                href={org.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <Github className="h-4 w-4"/>
                                                {t("projects.viewOrg")}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* All Repositories Section (when filter is "repositories") */}
                {showRepositories && (
                    <div className="mb-12">
                        <h3 className="text-xl font-serif font-bold mb-6 text-center gradient-text flex items-center justify-center gap-2">
                            <FolderGit2 className="h-5 w-5"/>
                            {lang === "es" ? "Todos los Repositorios" : "All Repositories"}
                        </h3>
                        {organizations.map((org, orgIndex) => (
                            <div key={org.name} className="mb-8">
                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                                    {(() => {
                                        const Icon = getOrgIcon(org.icon);
                                        return <Icon className="h-5 w-5 text-primary"/>;
                                    })()}
                                    {org.name}
                                    <span className="text-sm text-muted-foreground font-normal">
                    ({org.repositories.length} repos)
                  </span>
                                </h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {org.repositories.map((repo, repoIndex) => (
                                        <a
                                            key={repo.name}
                                            href={`https://github.com/${repo.owner}/${repo.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                                            style={{animationDelay: `${(orgIndex * 10 + repoIndex) * 30}ms`}}
                                        >
                                            <div className="flex items-center gap-3">
                                                <FolderGit2 className="h-5 w-5 text-primary"/>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                        {repo.name}
                                                    </h5>
                                                    <p className="text-xs text-muted-foreground">{repo.owner}</p>
                                                </div>
                                                <ExternalLink
                                                    className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Projects Grid (Featured) */}
                {showProjects && (
                    <div className="mb-12">
                        <h3 className="text-xl font-serif font-bold mb-6 text-center gradient-text flex items-center justify-center gap-2">
                            <Sparkles className="h-5 w-5"/>
                            {lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
                        </h3>
                        <div className="grid gap-6 max-w-6xl mx-auto">
                            {filteredProjects
                                .filter(p => p.type === "projects")
                                .map((project, index) => {
                                    const isExpanded = expandedProject === project.title;
                                    const fullDescription = lang === "es" ? project.fullDescriptionEs : project.fullDescriptionEn;

                                    return (
                                        <div
                                            key={`${project.title}-${index}`}
                                            className={`group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 ease-out-bounce glow-hover animate-fade-in-bounce ${
                                                project.featured ? "lg:col-span-2" : ""
                                            }`}
                                            style={{animationDelay: `${(index % 9) * 50}ms`}}
                                        >
                                            {/* Header with badges */}
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                {project.featured && (
                                                    <span
                                                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                            <Sparkles className="h-3 w-3"/>
                                                        {t("projects.featured")}
                          </span>
                                                )}
                                                {project.date && (
                                                    <span
                                                        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-full">
                            <Calendar className="h-3 w-3"/>
                                                        {project.date} - {project.dateEnd || (lang === "es" ? "Actualidad" : "Present")}
                          </span>
                                                )}
                                                {project.association && (
                                                    <span
                                                        className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-full">
                            <Building2 className="h-3 w-3"/>
                                                        {project.association}
                          </span>
                                                )}
                                                {project.collaborators && (
                                                    <span
                                                        className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-full">
                            <Users className="h-3 w-3"/>
                                                        {project.collaborators} {lang === "es" ? "colaboradores" : "collaborators"}
                          </span>
                                                )}
                                            </div>

                                            <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {lang === "es" ? project.descriptionEs : project.descriptionEn}
                                            </p>

                                            {/* Expandable full description */}
                                            {fullDescription && (
                                                <>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="mb-4 text-primary"
                                                        onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                <ChevronUp className="h-4 w-4 mr-1"/>
                                                                {lang === "es" ? "Ver menos" : "Show less"}
                                                            </>
                                                        ) : (
                                                            <>
                                                                <ChevronDown className="h-4 w-4 mr-1"/>
                                                                {lang === "es" ? "Ver descripción completa" : "Show full description"}
                                                            </>
                                                        )}
                                                    </Button>

                                                    {isExpanded && (
                                                        <div
                                                            className="mb-4 p-4 rounded-lg bg-muted/50 border border-border animate-fade-in">
                                                            <div
                                                                className="prose prose-sm dark:prose-invert max-w-none">
                                                                {fullDescription.split('\n\n').map((paragraph, i) => (
                                                                    <p key={i}
                                                                       className="text-muted-foreground mb-3 last:mb-0 whitespace-pre-line">
                                                                        {paragraph}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, isExpanded ? undefined : 8).map((tech) => (
                                                    <span key={tech} className="tech-badge text-xs py-1 px-2.5">
                            {tech}
                          </span>
                                                ))}
                                                {!isExpanded && project.technologies.length > 8 && (
                                                    <span
                                                        className="inline-flex items-center text-xs text-primary font-medium">
                            +{project.technologies.length - 8} {lang === "es" ? "más" : "more"}
                          </span>
                                                )}
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-3 pt-4 border-t border-border/50">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                                                    >
                                                        <Github className="h-4 w-4"/>
                                                        {t("projects.viewCode")}
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-lg hover:bg-accent transition-colors"
                                                    >
                                                        <ExternalLink className="h-4 w-4"/>
                                                        {t("projects.view")}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Certificates Grid */}
                {showCertificates && (
                    <div className="grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects
                            .filter(p => p.type === "certificates")
                            .map((project, index) => (
                                <div
                                    key={`${project.title}-${index}`}
                                    className="group p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 ease-out-bounce glow-hover animate-fade-in-bounce"
                                    style={{animationDelay: `${(index % 9) * 50}ms`}}
                                >
                                    {/* Certificate Header */}
                                    {project.issuer && (
                                        <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                        <Building2 className="h-3 w-3"/>
                          {project.issuer}
                      </span>
                                            {project.date && (
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-mono text-primary">
                          <Calendar className="h-3 w-3"/>
                                                    {project.date}
                        </span>
                                            )}
                                        </div>
                                    )}

                                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                                        {lang === "es" ? project.descriptionEs : project.descriptionEn}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span key={tech} className="tech-badge text-xs py-0.5 px-2">
                        {tech}
                      </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                                        )}
                                    </div>

                                    <div className="flex gap-3 mt-auto pt-2 border-t border-border/50">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4"/>
                                                {t("projects.viewCredential")}
                                            </a>
                                        )}
                                        {!project.link && (
                                            <span
                                                className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Award className="h-3 w-3 text-primary"/>
                                                {t("projects.verifiedCertificate")}
                      </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* GitHub Stats Section */}
                <div id="metrics" className="mt-20 animate-slide-up scroll-mt-24">
                    <h3 className="text-2xl font-serif font-bold mb-8 text-center gradient-text">
                        {t("projects.githubStats")}
                    </h3>

                    {/* Profile Badges */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <img
                            src="https://komarev.com/ghpvc/?username=SebastianLopezO&label=Profile%20views&color=0e75b6&style=flat"
                            alt="Profile Views"
                            width="140"
                            height="20"
                            className="h-5 w-auto"
                            loading="lazy"
                        />
                        <img
                            src="https://img.shields.io/github/stars/SebastianLopezO?style=flat&logo=github"
                            alt="GitHub Stars"
                            width="80"
                            height="20"
                            className="h-5 w-auto"
                            loading="lazy"
                        />
                        <img
                            src="https://img.shields.io/github/followers/SebastianLopezO?style=flat&logo=github&label=Followers"
                            alt="Followers Count"
                            width="100"
                            height="20"
                            className="h-5 w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 1 - Account Overview */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.github-metrics.svg"
                            alt="GitHub Metrics"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.activity.svg"
                            alt="Activity Metrics"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 2 - Calendar */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.isocalendar.svg"
                            alt="Isometric Calendar"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.calendar.svg"
                            alt="Calendar"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 3 - Follow & People */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.followup.svg"
                            alt="Follow Up"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.people.svg"
                            alt="People"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 4 - Stars */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.stargazers.svg"
                            alt="Stargazers"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.starlists.languages.svg"
                            alt="Star Lists Languages"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 5 - Topics */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.topics.icons.svg"
                            alt="Topics Icons"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.topics.labels.svg"
                            alt="Topics Labels"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* Metrics Row 6 - Languages & Habits */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.languages.details.svg"
                            alt="Languages Details"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/account/metrics.habits.charts.svg"
                            alt="Coding Habits"
                            width="468"
                            height="300"
                            className="w-full h-auto rounded-lg border border-border"
                            loading="lazy"
                        />
                    </div>

                    {/* WakaTime & Languages Stats */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <img
                            src="https://github-readme-stats-one-liart-24.vercel.app/api/wakatime?username=SebastianLopezO&layout=compact&theme=dark"
                            alt="WakaTime Stats"
                            width="495"
                            height="200"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                        <img
                            src="https://github-readme-stats-one-liart-24.vercel.app/api/top-langs/?username=SebastianLopezO&layout=donut-vertical&hide=HTML,Procfile,Papyrus&langs_count=20&theme=dark"
                            alt="Top Languages"
                            width="300"
                            height="400"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Streak & General Stats */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <img
                            src="https://github-readme-streak-stats-steel-theta.vercel.app/?user=SebastianLopezO&theme=dark&hide_border=false&border_radius=10"
                            alt="GitHub Streak"
                            width="495"
                            height="195"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                        <img
                            src="https://github-readme-stats-one-liart-24.vercel.app/api?username=SebastianLopezO&show_icons=true&theme=dark"
                            alt="GitHub Stats"
                            width="495"
                            height="195"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Activity Graph */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://github-readme-activity-graph.vercel.app/graph?username=SebastianLopezO&theme=high-contrast&area=true&hide_border=true&days=50"
                            alt={t("projects.activity")}
                            width="900"
                            height="300"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Trophies */}
                    <div className="flex justify-center mb-6 overflow-x-auto">
                        <img
                            src="https://github-profile-trophy-hkpvrw0xd-sebastianlopezo-projects.vercel.app/?username=SebastianLopezO&theme=onedark&row=2&column=9"
                            alt="GitHub Trophies"
                            width="900"
                            height="150"
                            className="max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Snake Animation */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/output/snake.svg"
                            alt="Snake Animation"
                            width="850"
                            height="200"
                            className="max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>

                    {/* Contributor Stats */}
                    <div className="flex justify-center">
                        <img
                            src="https://github-contributor-stats.vercel.app/api?username=SebastianLopezO&theme=dark&hide_contributor_rank=false"
                            alt="GitHub Contributor Stats"
                            width="495"
                            height="200"
                            className="rounded-lg border border-border max-w-full h-auto w-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
