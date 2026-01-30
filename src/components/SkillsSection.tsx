import { Code, Server, BarChart3, Cloud, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "JavaScript", "SQL", "PHP", "C#"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django", "FastAPI", "Spring Boot (Java 17)", "Node.js", "Laravel"],
  },
  {
    title: "Data & Math",
    icon: BarChart3,
    skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "R", "Tableau", "Excel VBA"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Linux", "Nginx", "GitHub Actions", "Firebase", "Redis", "MongoDB"],
  },
  {
    title: "IoT",
    icon: Cpu,
    skills: ["ESP32", "MicroPython", "Arduino"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">A comprehensive toolkit for modern development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="tech-badge animate-explode"
                    style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
