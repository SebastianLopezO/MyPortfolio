import {
    BarChart3,
    Calculator,
    Cloud,
    Code,
    Cpu,
    Database,
    Globe,
    Server,
    Shield,
    TestTube,
    Users,
    Wrench,
    Zap
} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage";

interface SkillCategory {
    titleEs: string;
    titleEn: string;
    icon: React.ElementType;
    skills: string[];
}

const SkillsSection = () => {
    const {t, lang} = useLanguage();

    const skillCategories: SkillCategory[] = [
        {
            titleEs: "Lenguajes de Programación",
            titleEn: "Programming Languages",
            icon: Code,
            skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL", "PHP", "C#", "VBA", "Google Apps Script", "Assembly"],
        },
        {
            titleEs: "Frontend",
            titleEn: "Frontend",
            icon: Globe,
            skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite", "jQuery", "Qt", "Bricks Builder", "Responsive Design"],
        },
        {
            titleEs: "Backend",
            titleEn: "Backend",
            icon: Server,
            skills: ["Django", "FastAPI", "Spring Boot", "Spring Security", "Node.js", "Express", "Laravel", "REST APIs", "Webhooks", "SOAP/WSDL"],
        },
        {
            titleEs: "Bases de Datos",
            titleEn: "Database",
            icon: Database,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "MariaDB", "Redis", "H2", "Microsoft SQL Server", "Oracle", "Database Design", "Data Modeling"],
        },
        {
            titleEs: "Datos & Analytics",
            titleEn: "Data & Analytics",
            icon: BarChart3,
            skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "R", "Tableau", "Excel VBA", "Statistical Analysis", "TensorFlow", "D3.js", "Plotly.js", "SciPy", "Data Science"],
        },
        {
            titleEs: "Cloud & DevOps",
            titleEn: "Cloud & DevOps",
            icon: Cloud,
            skills: ["Docker", "Linux", "Nginx", "GitHub Actions", "GitLab CI/CD", "Firebase", "AWS", "Azure", "Heroku", "Render", "Netlify", "VPS", "SSL/Certbot", "Kubernetes"],
        },
        {
            titleEs: "CRM & Automatización",
            titleEn: "CRM & Automation",
            icon: Zap,
            skills: ["Zoho CRM", "Zoho One", "Zoho Creator", "Zoho Deluge", "Zoho Analytics", "Dapta", "n8n", "Zapier", "Power Automate", "UiPath", "RPA", "MarTech"],
        },
        {
            titleEs: "IoT & Embedded",
            titleEn: "IoT & Embedded",
            icon: Cpu,
            skills: ["ESP32", "MicroPython", "Arduino", "Raspberry Pi", "Wokwi", "Thonny", "Sensores", "Actuadores"],
        },
        {
            titleEs: "Testing & QA",
            titleEn: "Testing & QA",
            icon: TestTube,
            skills: ["JUnit", "PyTest", "Jest", "Selenium", "Postman", "API Testing", "Unit Testing", "Integration Testing"],
        },
        {
            titleEs: "Herramientas & Control de Versiones",
            titleEn: "Tools & Version Control",
            icon: Wrench,
            skills: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Figma", "Jupyter", "Anaconda", "Replit", "VS Code"],
        },
        {
            titleEs: "Seguridad & Redes",
            titleEn: "Security & Networks",
            icon: Shield,
            skills: ["OWASP", "Kali Linux", "SSH", "Cisco Packet Tracer", "Network Administration", "Cybersecurity", "SSL/TLS"],
        },
        {
            titleEs: "Matemáticas & Ciencias",
            titleEn: "Mathematics & Sciences",
            icon: Calculator,
            skills: ["Statistical Analysis", "GeoGebra", "JFLAP", "Automata Theory", "Formal Languages", "Compiler Design", "Applied Mathematics"],
        },
    ];

    const softSkills = {
        titleEs: "Habilidades Blandas",
        titleEn: "Soft Skills",
        skills: [
            {es: "Resolución de Problemas", en: "Problem Solving"},
            {es: "Trabajo en Equipo", en: "Teamwork"},
            {es: "Comunicación Efectiva", en: "Effective Communication"},
            {es: "Capacidad Analítica", en: "Analytical Thinking"},
            {es: "Aprendizaje Autónomo", en: "Self-Learning"},
            {es: "Pensamiento Crítico", en: "Critical Thinking"},
            {es: "Gestión de Proyectos", en: "Project Management"},
            {es: "Metodologías Ágiles", en: "Agile Methodologies"},
        ]
    };

    const additionalTools = [
        "Microsoft 365", "Google Workspace", "Zoho Suite", "Scrum",
        "JFLAP", "Cisco Packet Tracer", "MongoDB Atlas", "GitHub Pages"
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-card/50">
            <div className="container px-4">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="section-title">{t("skills.title")}</h2>
                    <p className="section-subtitle">{t("skills.subtitle")}</p>
                </div>

                {/* Technical Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={lang === "es" ? category.titleEs : category.titleEn}
                            className="p-5 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                            style={{animationDelay: `${categoryIndex * 50}ms`}}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <category.icon className="h-5 w-5"/>
                                </div>
                                <h3 className="text-base font-serif font-bold text-foreground">
                                    {lang === "es" ? category.titleEs : category.titleEn}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skill}
                                        className="tech-badge text-xs animate-explode"
                                        style={{animationDelay: `${categoryIndex * 50 + skillIndex * 20}ms`}}
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <div className="mt-12 max-w-4xl mx-auto animate-slide-up">
                    <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="flex items-center gap-3 mb-5 justify-center">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Users className="h-5 w-5"/>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-foreground">
                                {lang === "es" ? softSkills.titleEs : softSkills.titleEn}
                            </h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {softSkills.skills.map((skill) => (
                                <span key={skill.en} className="tech-badge">
                  {lang === "es" ? skill.es : skill.en}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Tools */}
                <div className="mt-12 text-center animate-slide-up">
                    <h3 className="text-xl font-serif font-bold mb-6 text-muted-foreground">
                        {t("skills.additional")}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {additionalTools.map((tech) => (
                            <span key={tech} className="tech-badge">
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
