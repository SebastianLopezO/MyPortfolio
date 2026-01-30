import { Briefcase } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "TIVENOS",
      role: t("experience.jobs.tivenos.role"),
      period: "Jun 2025 - Present",
      description: t("experience.jobs.tivenos.description"),
      technologies: ["FastAPI", "REST APIs", "Zoho Ecosystem", "Docker", "Nginx"],
      current: true,
    },
    {
      company: "ADCOM GROUP",
      role: t("experience.jobs.adcom.role"),
      period: "Feb 2025 - Present",
      description: t("experience.jobs.adcom.description"),
      technologies: ["Deluge", "Zoho Creator", "AI Automation (Dapta)", "VPS Management"],
      current: true,
    },
    {
      company: "MUV-U S.A.S",
      role: t("experience.jobs.muvu.role"),
      period: "Jul 2023 - Jan 2025",
      description: t("experience.jobs.muvu.description"),
      technologies: ["Power BI", "Data Architecture", "CRM Automation", "Python"],
    },
    {
      company: "Quipux S.A.S",
      role: t("experience.jobs.quipux.role"),
      period: "Aug 2022 - May 2023",
      description: t("experience.jobs.quipux.description"),
      technologies: ["Python", "SQL", "Automated Reporting", "Data Analysis"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-bounce`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-hover group">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-primary font-mono text-sm">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        {t("experience.current")}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-secondary font-medium mb-3">{exp.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
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
