import { useState } from "react";
import { ExternalLink, Github, Award, FolderGit2, FileCode, Sparkles, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

type FilterType = "all" | "repositories" | "projects" | "certificates";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: "repositories" | "projects" | "certificates";
  link?: string;
  github?: string;
  featured?: boolean;
  issuer?: string;
  date?: string;
  credentialId?: string;
}

const projects: Project[] = [
  // Featured Project
  {
    title: "SmartPot",
    description: "IoT-integrated hydroponic management system with real-time monitoring, automated nutrient control, and Wokwi simulation for testing. Developed across Hardware Architecture, Software Design, and Programming Languages Workshop courses.",
    technologies: ["React", "Vite", "Spring Boot", "MongoDB", "Redis", "ESP32", "Node.js"],
    type: "projects",
    github: "https://github.com/SmartPotTech",
    featured: true,
  },
  // Repositories
  {
    title: "Computer Engineering Projects",
    description: "Collection of academic projects from Politécnico Jaime Isaza Cadavid covering AI, databases, operating systems, and networks.",
    technologies: ["Java", "Python", "MongoDB", "Docker", "AI"],
    type: "repositories",
    github: "https://github.com/EngSebastianLopez",
  },
  {
    title: "TechnicalSebastians",
    description: "Software Programming Technique projects from IUSH including web applications and system tools.",
    technologies: ["C#", "PHP", "JavaScript", "MySQL", "Apache"],
    type: "repositories",
    github: "https://github.com/TechnicalSebastians",
  },
  {
    title: "VocationalSebastian-s",
    description: "Technical High School projects in collaboration with INEM featuring various programming exercises.",
    technologies: ["HTML", "PHP", "Visual Basic .NET", "Java", "Python"],
    type: "repositories",
    github: "https://github.com/VocationalSebastian-s",
  },
  // Certificates
  {
    title: "Curso de DAX para Power BI",
    description: "Advanced DAX formulas and expressions for Power BI data modeling and analytics.",
    technologies: ["Power BI", "DAX", "Data Analytics"],
    type: "certificates",
    issuer: "Platzi",
    date: "Sept 2024",
    credentialId: "657cf0d3-b484-47a2-aff4-094afbb201c0",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Curso de Análisis de Datos con Power BI",
    description: "Data analysis techniques and visualization using Microsoft Power BI.",
    technologies: ["Power BI", "Data Analysis", "Visualization"],
    type: "certificates",
    issuer: "Platzi",
    date: "Aug 2024",
    credentialId: "481a49cd-7a2a-4e8b-a694-e1f9b68f6ae7",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Domina Excel",
    description: "Complete Excel mastery including VBA, pivot tables, dashboards, and advanced formulas like VLOOKUP/HLOOKUP.",
    technologies: ["Excel", "VBA", "Dashboards", "Pivot Tables"],
    type: "certificates",
    issuer: "Platzi",
    date: "Jul 2024",
    credentialId: "9c6e065c-5538-46ae-aac5-ca66715f3cd0",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Google Search Console para SEO",
    description: "SEO fundamentals and Google Search Console optimization techniques.",
    technologies: ["SEO", "Google Search Console", "Web Analytics"],
    type: "certificates",
    issuer: "Platzi",
    date: "Jun 2024",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Green Digital Skills Certificate",
    description: "Digital skills for sustainable and green technology practices.",
    technologies: ["Green Tech", "Sustainability", "Digital Skills"],
    type: "certificates",
    issuer: "INCO Academy",
    date: "Mar 2024",
    credentialId: "4365637690SL",
  },
  {
    title: "Data Science & AI - Engancha TIC 2.0",
    description: "Data Science and Artificial Intelligence fundamentals with Python.",
    technologies: ["Python", "Data Science", "AI", "Databases"],
    type: "certificates",
    issuer: "Universidad de Antioquia",
    date: "Dec 2023",
    credentialId: "W9JS3YDZ6P",
  },
  {
    title: "Ciberseguridad - Engancha TIC 2.0",
    description: "Cybersecurity fundamentals and systems engineering security practices.",
    technologies: ["Cybersecurity", "Systems Engineering"],
    type: "certificates",
    issuer: "Universidad de Antioquia",
    date: "Dec 2023",
    credentialId: "W9JS3YDZ6P",
  },
  {
    title: "Programación Web - Engancha TIC 2.0",
    description: "Web development with JavaScript, Java, and responsive design.",
    technologies: ["JavaScript", "Java", "Responsive Design", "Web Dev"],
    type: "certificates",
    issuer: "Universidad de Antioquia",
    date: "Dec 2023",
    credentialId: "6PUBF6RVC2",
  },
  {
    title: "Visualización de Datos - Engancha TIC 2.0",
    description: "Data visualization and analytics techniques.",
    technologies: ["Data Visualization", "Analytics"],
    type: "certificates",
    issuer: "Universidad de Antioquia",
    date: "Dec 2023",
  },
  {
    title: "Curso de IoT: Protocolos de Comunicación",
    description: "IoT communication protocols and embedded systems.",
    technologies: ["IoT", "Protocols", "Embedded Systems"],
    type: "certificates",
    issuer: "Platzi",
    date: "Dec 2023",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Curso Profesional de Git y GitHub",
    description: "Professional version control with Git and GitHub workflows.",
    technologies: ["Git", "GitHub", "Version Control"],
    type: "certificates",
    issuer: "Platzi",
    date: "Nov 2023",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "Fundamentos de Ingeniería de Software",
    description: "Software engineering principles and methodologies.",
    technologies: ["Software Engineering", "SDLC"],
    type: "certificates",
    issuer: "Platzi",
    date: "Nov 2023",
    link: "https://platzi.com/p/SebastianLopezO/",
  },
  {
    title: "IT Specialist - Python",
    description: "Official Python certification covering data types, control flow, I/O operations, and error handling.",
    technologies: ["Python", "Programming"],
    type: "certificates",
    issuer: "Certiport - Pearson VUE",
    date: "Nov 2023",
    credentialId: "9GmW-s4Nk",
  },
  {
    title: "Python Django 2",
    description: "Advanced Django web framework development.",
    technologies: ["Python", "Django", "Web Development"],
    type: "certificates",
    issuer: "Comfenalco Antioquia",
    date: "Nov 2023",
  },
  {
    title: "Hacking Ético Gamificado HACKLAB",
    description: "Ethical hacking and cybersecurity through gamified learning.",
    technologies: ["Ethical Hacking", "Cybersecurity"],
    type: "certificates",
    issuer: "HackerMentor",
    date: "Aug 2023",
    credentialId: "d61a7018-0d32-4ee4-8b88-13dc95f6002d",
  },
  {
    title: "Problem Solving (Basic)",
    description: "Algorithmic problem solving and computational thinking.",
    technologies: ["Algorithms", "Problem Solving"],
    type: "certificates",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "a9436f491d0f",
    link: "https://www.hackerrank.com/certificates/a9436f491d0f",
  },
  {
    title: "Java (Basic) Certificate",
    description: "Java programming fundamentals certification.",
    technologies: ["Java"],
    type: "certificates",
    issuer: "HackerRank",
    date: "Feb 2023",
    credentialId: "af888d4eded1",
    link: "https://www.hackerrank.com/certificates/af888d4eded1",
  },
  {
    title: "CSS Certificate",
    description: "CSS styling and web design certification.",
    technologies: ["CSS", "HTML", "Web Design"],
    type: "certificates",
    issuer: "HackerRank",
    date: "Feb 2023",
    credentialId: "0d308cbf0361",
    link: "https://www.hackerrank.com/certificates/0d308cbf0361",
  },
  {
    title: "Python-Django",
    description: "Django framework with Bootstrap, databases, and version control.",
    technologies: ["Python", "Django", "Bootstrap", "Databases"],
    type: "certificates",
    issuer: "Comfenalco Antioquia",
    date: "Dec 2022",
  },
  {
    title: "Python (Basic) Certificate",
    description: "Python programming fundamentals.",
    technologies: ["Python"],
    type: "certificates",
    issuer: "HackerRank",
    date: "Aug 2022",
    link: "https://www.hackerrank.com/",
  },
  {
    title: "SQL (Basic) Certificate",
    description: "SQL database management and queries.",
    technologies: ["SQL", "MySQL", "Databases"],
    type: "certificates",
    issuer: "HackerRank",
    date: "May 2022",
    link: "https://www.hackerrank.com/",
  },
  {
    title: "Introducción al Excel Profesional",
    description: "Professional Excel fundamentals.",
    technologies: ["Excel", "Microsoft Office"],
    type: "certificates",
    issuer: "Cámara de Comercio",
    date: "Jun 2022",
  },
  {
    title: "Fundamentos de Programación 1 & 2",
    description: "Programming fundamentals with functional programming concepts.",
    technologies: ["Programming", "Bootstrap", "Frontend"],
    type: "certificates",
    issuer: "Universidad Tecnológica de Pereira",
    date: "Dec 2021",
  },
  {
    title: "Introducción a la Programación Python",
    description: "Python programming introduction.",
    technologies: ["Python"],
    type: "certificates",
    issuer: "Universidad EIA",
    date: "May 2021",
  },
  {
    title: "Introduction to HTML",
    description: "HTML fundamentals for web development.",
    technologies: ["HTML", "Web Development"],
    type: "certificates",
    issuer: "Coursera",
    date: "Dec 2020",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const { t } = useLanguage();

  const filterButtons: { label: string; value: FilterType; icon: React.ElementType }[] = [
    { label: t("projects.filters.all"), value: "all", icon: FileCode },
    { label: t("projects.filters.repositories"), value: "repositories", icon: FolderGit2 },
    { label: t("projects.filters.projects"), value: "projects", icon: Github },
    { label: t("projects.filters.certificates"), value: "certificates", icon: Award },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  const certificateCount = projects.filter(p => p.type === "certificates").length;

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
              <btn.icon className="h-4 w-4" />
              {btn.label}
              {btn.value === "certificates" && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/20 rounded-full">
                  {certificateCount}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Projects/Certificates Grid */}
        <div className={`grid gap-6 max-w-6xl mx-auto ${
          filter === "certificates" 
            ? "md:grid-cols-2 lg:grid-cols-3" 
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`group p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 ease-out-bounce glow-hover animate-fade-in-bounce ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${(index % 9) * 50}ms` }}
            >
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3">
                  <Sparkles className="h-3 w-3" />
                  {t("projects.featured")}
                </span>
              )}

              {/* Certificate Header */}
              {project.type === "certificates" && project.issuer && (
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Building2 className="h-3 w-3" />
                    {project.issuer}
                  </span>
                  {project.date && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-primary">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </span>
                  )}
                </div>
              )}
              
              <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                {project.description}
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {t("projects.viewCode")}
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.type === "certificates" ? t("projects.viewCredential") : t("projects.view")}
                  </a>
                )}
                {project.type === "certificates" && !project.link && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Award className="h-3 w-3 text-primary" />
                    {t("projects.verifiedCertificate")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <div className="mt-20 animate-slide-up">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center gradient-text">
            {t("projects.githubStats")}
          </h3>
          
          {/* Stats Row 1 - Main Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=SebastianLopezO&show_icons=true&theme=dark&bg_color=0D0D0D&title_color=36BFB1&icon_color=36BFB1&text_color=F8FDFF&border_color=1a3a36&hide_border=false"
              alt="GitHub Stats"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=SebastianLopezO&theme=dark&background=0D0D0D&ring=36BFB1&fire=36BFB1&currStreakLabel=36BFB1&border=1a3a36"
              alt="GitHub Streak"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Stats Row 2 - Languages */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SebastianLopezO&layout=compact&theme=dark&bg_color=0D0D0D&title_color=36BFB1&text_color=F8FDFF&border_color=1a3a36"
              alt="Top Languages"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Trophies */}
          <div className="flex justify-center mb-6 overflow-x-auto">
            <img
              src="https://github-profile-trophy.vercel.app/?username=SebastianLopezO&theme=darkhub&no-frame=true&column=7&margin-w=15&margin-h=15"
              alt="GitHub Trophies"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Activity Graph */}
          <div className="flex justify-center">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=SebastianLopezO&theme=react-dark&bg_color=0D0D0D&color=36BFB1&line=36BFB1&point=F8FDFF&area=true&hide_border=false"
              alt={t("projects.activity")}
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
