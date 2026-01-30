import { useState } from "react";
import { ExternalLink, Github, Award, FolderGit2, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

type FilterType = "all" | "repositories" | "projects" | "certificates";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: "repositories" | "projects" | "certificates";
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "SmartPot",
    description: "IoT-integrated hydroponic management system with real-time monitoring, automated nutrient control, and Wokwi simulation for testing.",
    technologies: ["React", "Vite", "Spring Boot", "MongoDB", "Redis", "Wokwi"],
    type: "projects",
    github: "https://github.com",
    featured: true,
  },
  {
    title: "CRM Automation Suite",
    description: "Enterprise CRM automation with Zoho integration, custom workflows, and AI-powered lead scoring.",
    technologies: ["FastAPI", "Zoho", "Python", "PostgreSQL"],
    type: "projects",
    github: "https://github.com",
  },
  {
    title: "Data Pipeline Framework",
    description: "Scalable ETL framework for processing large datasets with automated reporting.",
    technologies: ["Python", "Apache Airflow", "Docker", "Power BI"],
    type: "repositories",
    github: "https://github.com",
  },
  {
    title: "AWS Solutions Architect",
    description: "Professional certification demonstrating cloud architecture expertise.",
    technologies: ["AWS", "Cloud Architecture"],
    type: "certificates",
    link: "#",
  },
  {
    title: "FastAPI REST Template",
    description: "Production-ready FastAPI template with authentication, testing, and Docker support.",
    technologies: ["FastAPI", "Docker", "PostgreSQL", "Pytest"],
    type: "repositories",
    github: "https://github.com",
  },
];

const filterButtons: { label: string; value: FilterType; icon: React.ElementType }[] = [
  { label: "All", value: "all", icon: FileCode },
  { label: "Repositories", value: "repositories", icon: FolderGit2 },
  { label: "Projects", value: "projects", icon: Github },
  { label: "Certificates", value: "certificates", icon: Award },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Portfolio & Projects</h2>
          <p className="section-subtitle">Showcasing innovation through code</p>
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
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 ease-out-bounce glow-hover animate-fade-in-bounce ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
                  Featured Project
                </span>
              )}
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
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
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-2xl font-serif font-bold mb-8 gradient-text">GitHub Activity</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=sebastianlopez&show_icons=true&theme=dark&bg_color=0D0D0D&title_color=36BFB1&icon_color=36BFB1&text_color=F8FDFF&border_color=174,24%,18%"
              alt="GitHub Stats"
              className="rounded-lg border border-border"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sebastianlopez&layout=compact&theme=dark&bg_color=0D0D0D&title_color=36BFB1&text_color=F8FDFF&border_color=174,24%,18%"
              alt="Top Languages"
              className="rounded-lg border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
