import {Briefcase, ChevronDown, ChevronUp, MapPin} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage.ts";
import {useState} from "react";

interface Experience {
    company: string;
    role: string;
    roleEs: string;
    period: string;
    location: string;
    workType: string;
    workTypeEs: string;
    description: string;
    descriptionEs: string;
    highlights: string[];
    highlightsEs: string[];
    technologies: string[];
    current?: boolean;
}

const experiences: Experience[] = [
    {
        company: "TIVENOS - Solutions for Education",
        role: "IT Manager | Backend CRM Developer | Data Analyst",
        roleEs: "IT Manager | Desarrollador Backend CRM | Analista de Datos",
        period: "Jun 2025 - Present",
        location: "Medellín Metropolitan Area",
        workType: "Remote · Freelance",
        workTypeEs: "Remoto · Autónomo",
        description: "Responsible for the development, automation, and integration of systems for educational management, focusing on Zoho CRM optimization and custom solutions for academic institutions.",
        descriptionEs: "Responsable del desarrollo, automatización e integración de sistemas orientados a la gestión educativa, con foco en la optimización del CRM Zoho y la creación de soluciones personalizadas para instituciones académicas.",
        highlights: [
            "Developed REST APIs with FastAPI integrating Zoho ecosystem (WorkDrive, CRM, Forms)",
            "Implemented external system integrations (SIS, GA4, SOAP via Zeep and WSDL contracts)",
            "Managed deployments on Linux servers with Docker, Nginx, SSL, Certbot and GitHub Actions",
            "Created Deluge functions for internal automation within Zoho CRM",
            "Designed analytical dashboards in Zoho Analytics with advanced SQL queries and real-time KPIs",
        ],
        highlightsEs: [
            "Desarrollé APIs REST con FastAPI integrando el ecosistema Zoho (WorkDrive, CRM, Forms)",
            "Implementé integraciones con sistemas externos (SIS, GA4, SOAP mediante Zeep y contratos WSDL)",
            "Gestioné despliegues en servidores Linux con Docker, Nginx, SSL, Certbot y GitHub Actions",
            "Creé funciones en Deluge para automatización interna dentro de Zoho CRM",
            "Diseñé paneles analíticos en Zoho Analytics con consultas SQL avanzadas y KPIs en tiempo real",
        ],
        technologies: ["FastAPI", "REST APIs", "Zoho Ecosystem", "Docker", "Nginx", "GitHub Actions", "Deluge", "SQL", "Linux"],
        current: true,
    },
    {
        company: "ADCOM GROUP",
        role: "CRM Developer | MarTech Developer | CRM & Cloud Solutions Engineer",
        roleEs: "Desarrollador CRM | MarTech Developer | CRM & Cloud Solutions Engineer",
        period: "Feb 2025 - Present",
        location: "Medellín, Antioquia, Colombia",
        workType: "Remote",
        workTypeEs: "Remoto",
        description: "Design, development, and implementation of tech solutions to optimize commercial processes, automate marketing flows, and consolidate digital infrastructure for multiple clients.",
        descriptionEs: "Diseño, desarrollo e implementación de soluciones tecnológicas para optimizar procesos comerciales, automatizar flujos de marketing y consolidar la infraestructura digital de múltiples clientes.",
        highlights: [
            "Development and automation in Zoho One with Deluge, REST APIs and external platform integrations",
            "Created dynamic HTML template generator for Baloto using Java Spring Boot with Thymeleaf",
            "VPS administration on Hostinger with SSH, SSL (Certbot), NGINX, Docker and GitHub Actions",
            "Deployed internal services in Docker containers including Prometheus, Nagios, and n8n",
            "AI-powered contact automation models implementation with Dapta",
        ],
        highlightsEs: [
            "Desarrollo y automatización en Zoho One con Deluge, APIs REST e integraciones con plataformas externas",
            "Creé generador dinámico de plantillas HTML para Baloto con Java Spring Boot y Thymeleaf",
            "Administración de VPS en Hostinger con SSH, SSL (Certbot), NGINX, Docker y GitHub Actions",
            "Despliegue de servicios internos en contenedores Docker incluyendo Prometheus, Nagios y n8n",
            "Implementación de modelos de automatización de contactabilidad con IA en Dapta",
        ],
        technologies: ["Zoho One", "Deluge", "Spring Boot", "Thymeleaf", "Docker", "n8n", "Prometheus", "VPS", "WhatsApp API", "Meta Ads"],
        current: true,
    },
    {
        company: "MUV-U S.A.S",
        role: "Backend Developer | Data Analyst | CRM Analyst",
        roleEs: "Desarrollador Backend | Analista de Datos | Analista CRM",
        period: "Jul 2023 - Jan 2025",
        location: "Sabaneta, Antioquia, Colombia",
        workType: "Hybrid · Full-time",
        workTypeEs: "Híbrido · Tiempo completo",
        description: "Multiple responsibilities spanning data analysis to backend development, with particular focus on CRM management and systems administration.",
        descriptionEs: "Múltiples responsabilidades que abarcaron desde el análisis de datos hasta el desarrollo backend, con enfoque particular en la gestión de CRM y administración de sistemas.",
        highlights: [
            "CRM data preprocessing ensuring readiness for analysis and decision-making",
            "Developed comprehensive Power BI reports for financial, commercial, and marketing areas",
            "Led automation solutions implementation within CRM to optimize business processes",
            "Developed functional website components improving UX and performance",
            "Designed and implemented data architecture for incoming CRM data",
            "IT infrastructure and server administration for the company",
        ],
        highlightsEs: [
            "Preprocesamiento de datos de CRM asegurando su preparación para análisis y toma de decisiones",
            "Desarrollé informes completos en Power BI para áreas financieras, comerciales y de marketing",
            "Lideré la implementación de soluciones de automatización en CRM para optimizar procesos",
            "Desarrollé componentes funcionales del sitio web mejorando UX y rendimiento",
            "Diseñé e implementé la arquitectura de datos entrantes en el CRM",
            "Administración de infraestructura T.I. y servidores de la empresa",
        ],
        technologies: ["Power BI", "Python", "Zoho CRM", "Data Architecture", "CRM Automation", "Web Development", "SQL", "Server Admin"],
    },
    {
        company: "Quipux S.A.S",
        role: "Data Analyst",
        roleEs: "Analista de Datos",
        period: "Aug 2022 - May 2023",
        location: "Medellín Metropolitan Area",
        workType: "Hybrid · Internship",
        workTypeEs: "Híbrido · Prácticas",
        description: "Part of the team responsible for collection automation, a key area in process optimization and efficient information management.",
        descriptionEs: "Parte del equipo encargado de la automatización del recaudo, un área clave en la optimización de procesos y manejo eficiente de la información.",
        highlights: [
            "Managed large data volumes applying transformation and cleaning techniques",
            "Designed interactive reports and graphics simplifying complex information communication",
            "Implemented automation solutions for repetitive processes improving report generation efficiency",
            "Optimized operational times and improved accuracy in results",
        ],
        highlightsEs: [
            "Gestioné grandes volúmenes de datos aplicando técnicas de transformación y limpieza",
            "Diseñé informes interactivos y gráficos simplificando la comunicación de información compleja",
            "Implementé soluciones de automatización para procesos repetitivos mejorando la eficiencia",
            "Optimicé tiempos operativos y mejoré la precisión en los resultados",
        ],
        technologies: ["Python", "SQL", "Data Visualization", "Automation", "ETL", "Reporting", "Excel"],
    },
];

const ExperienceSection = () => {
    const {t, lang} = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container px-4">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="section-title">{t("experience.title")}</h2>
                    <p className="section-subtitle">{t("experience.subtitle")}</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"/>

                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.company}-${index}`}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-bounce`}
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10">
                                {exp.current && (
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50"/>
                                )}
                            </div>

                            {/* Content */}
                            <div
                                className={`ml-8 md:ml-0 md:w-1/2 ${
                                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                                }`}
                            >
                                <div
                                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-hover group">
                                    {/* Header */}
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                        <Briefcase className="h-5 w-5 text-primary"/>
                                        <span className="text-primary font-mono text-sm">{exp.period}</span>
                                        {exp.current && (
                                            <span
                                                className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        {t("experience.current")}
                      </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                                        {exp.company}
                                    </h3>
                                    <p className="text-primary font-medium mb-2">
                                        {lang === "es" ? exp.roleEs : exp.role}
                                    </p>

                                    {/* Location & Work Type */}
                                    <div
                                        className={`flex items-center gap-2 text-xs text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        <MapPin className="h-3 w-3"/>
                                        <span>{exp.location}</span>
                                        <span>·</span>
                                        <span>{lang === "es" ? exp.workTypeEs : exp.workType}</span>
                                    </div>

                                    {/* Short Description */}
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {lang === "es" ? exp.descriptionEs : exp.description}
                                    </p>

                                    {/* Expandable Details */}
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className={`flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors mb-3 ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                                    >
                                        {expandedIndex === index ? (
                                            <>
                                                {lang === "es" ? "Ver menos" : "Show less"}
                                                <ChevronUp className="h-4 w-4"/>
                                            </>
                                        ) : (
                                            <>
                                                {lang === "es" ? "Ver más" : "Show more"}
                                                <ChevronDown className="h-4 w-4"/>
                                            </>
                                        )}
                                    </button>

                                    {/* Expanded Content */}
                                    {expandedIndex === index && (
                                        <div className="animate-fade-in-bounce border-t border-border pt-4 mb-4">
                                            <h4 className={`text-sm font-semibold text-foreground mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                                {lang === "es" ? "Responsabilidades clave:" : "Key Responsibilities:"}
                                            </h4>
                                            <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                                {(lang === "es" ? exp.highlightsEs : exp.highlights).map((highlight, hIndex) => (
                                                    <li key={hIndex}
                                                        className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span
                                                            className={`text-primary mt-1.5 flex-shrink-0 ${index % 2 === 0 ? "md:order-2" : ""}`}>•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Technologies */}
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.slice(0, expandedIndex === index ? exp.technologies.length : 5).map((tech) => (
                                            <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                                        ))}
                                        {expandedIndex !== index && exp.technologies.length > 5 && (
                                            <span className="text-xs text-muted-foreground">
                        +{exp.technologies.length - 5}
                      </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
