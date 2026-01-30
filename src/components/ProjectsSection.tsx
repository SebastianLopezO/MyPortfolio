import { useState } from "react";
import { ExternalLink, Github, Award, FolderGit2, FileCode, Sparkles } from "lucide-react";
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
    description: "IoT-integrated hydroponic management system with real-time monitoring, automated nutrient control, and Wokwi simulation for testing. Developed across Hardware Architecture, Software Design, and Programming Languages Workshop courses.",
    technologies: ["React", "Vite", "Spring Boot", "MongoDB", "Redis", "ESP32", "Node.js"],
    type: "projects",
    github: "https://github.com/SmartPotTech",
    featured: true,
  },
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
  {
    title: "AWS Solutions Architect",
    description: "Professional certification demonstrating cloud architecture expertise.",
    technologies: ["AWS", "Cloud Architecture"],
    type: "certificates",
    link: "#",
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
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
                  <Sparkles className="h-3 w-3" />
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
                    View Code
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

        {/* GitHub Stats Section */}
        <div className="mt-20 animate-slide-up">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center gradient-text">
            GitHub Statistics
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

          {/* Stats Row 2 - Languages & Trophies */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SebastianLopezO&layout=compact&theme=dark&bg_color=0D0D0D&title_color=36BFB1&text_color=F8FDFF&border_color=1a3a36"
              alt="Top Languages"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Trophies */}
          <div className="flex justify-center mb-6">
            <img
              src="https://github-profile-trophy.vercel.app/?username=SebastianLopezO&theme=darkhub&no-frame=true&no-bg=true&margin-w=4&column=7"
              alt="GitHub Trophies"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Activity Graph */}
          <div className="flex justify-center mb-6">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=SebastianLopezO&theme=react-dark&bg_color=0D0D0D&color=36BFB1&line=038C73&point=36BFB1&area_color=02735E&area=true&hide_border=false"
              alt="GitHub Activity Graph"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Contributions Overview */}
          <div className="grid md:grid-cols-2 gap-4 justify-items-center mb-6">
            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=SebastianLopezO&theme=dark&bg_color=0D0D0D&title_color=36BFB1&text_color=F8FDFF&border_color=1a3a36"
              alt="WakaTime Stats"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SebastianLopezO&theme=github_dark"
              alt="Profile Summary"
              className="rounded-lg border border-border max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Additional Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=SebastianLopezO&theme=github_dark"
              alt="Repos per Language"
              className="rounded-lg border border-border"
              loading="lazy"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=SebastianLopezO&theme=github_dark"
              alt="Most Commit Language"
              className="rounded-lg border border-border"
              loading="lazy"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=SebastianLopezO&theme=github_dark"
              alt="Stats"
              className="rounded-lg border border-border"
              loading="lazy"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=SebastianLopezO&theme=github_dark&utcOffset=-5"
              alt="Productive Time"
              className="rounded-lg border border-border"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
