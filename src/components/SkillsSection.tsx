import { Code, Server, BarChart3, Cloud, Cpu, Wrench, TestTube, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t("skills.categories.languages"),
      icon: Code,
      skills: ["Python", "Java", "C++", "JavaScript", "SQL", "PHP", "C#", "TypeScript"],
    },
    {
      title: t("skills.categories.frontend"),
      icon: Globe,
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite"],
    },
    {
      title: t("skills.categories.backend"),
      icon: Server,
      skills: ["Django", "FastAPI", "Spring Boot", "Node.js", "Laravel", "Express"],
    },
    {
      title: t("skills.categories.dataAnalytics"),
      icon: BarChart3,
      skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "R", "Tableau", "Excel VBA", "Statistical Analysis"],
    },
    {
      title: t("skills.categories.cloudDevops"),
      icon: Cloud,
      skills: ["Docker", "Linux", "Nginx", "GitHub Actions", "Firebase", "Redis", "Kubernetes"],
    },
    {
      title: t("skills.categories.database"),
      icon: Wrench,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "MariaDB", "Microsoft SQL Server", "Oracle"],
    },
    {
      title: t("skills.categories.iot"),
      icon: Cpu,
      skills: ["ESP32", "MicroPython", "Arduino", "Raspberry Pi", "Wokwi"],
    },
    {
      title: t("skills.categories.testingTools"),
      icon: TestTube,
      skills: ["Jest", "Selenium", "Postman", "JUnit", "Git", "Jira", "Confluence"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-5 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
              style={{ animationDelay: `${categoryIndex * 75}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="tech-badge text-xs animate-explode"
                    style={{ animationDelay: `${categoryIndex * 75 + skillIndex * 30}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges Visual */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-xl font-serif font-bold mb-6 text-muted-foreground">
            {t("skills.additional")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Zoho Suite", "Google Apps Script", "Zoho Deluge", "Webhooks", "REST APIs",
              "RPA", "Scrum", "JFLAP", "Cisco Packet Tracer", "Microsoft 365", "Google Workspace"
            ].map((tech) => (
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
