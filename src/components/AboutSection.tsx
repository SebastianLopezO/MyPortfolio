import { Code2, Database, Cpu, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const asciiArt = `                           \\\\\\\\\\\\\\
                           \\\\\\\\\\\\\\\\\\\\\\\\
                         \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     -----------,-|           |C>   // )\\\\\\\\|
              ,','|          /    || ,'/////|
   ---------,','  |         (,    ||   /////
            ||    |          \\\\  ||||//''''|
            ||    |           |||||||     _|
            ||    |______      \`\`\`\`\`\\____/ \\
            ||    |     ,|         _/_____/ \\
            ||  ,'    ,' |        /          |
            ||,'    ,'   |       |         \\  |
   _________|/    ,'     |      /           | |
   _____________,'      ,',_____|      |    | |
                |     ,','      |      |    | |
                |   ,','    ____|_____/    /  |
                | ,','  __/ |             /   |
   _____________|','   ///_/-------------/   |
                 |===========,'`;

const AboutSection = () => {
  const { t, lang } = useLanguage();

  const education = [
    {
      period: "2022–2027",
      degree: t("about.degrees.bachelor"),
      school: "Politécnico Colombiano Jaime Isaza Cadavid",
      status: t("about.inProgress"),
      skills: ["Systems Engineering", "Analytics", "Programming", "MySQL"],
    },
    {
      period: "2022–2023",
      degree: t("about.degrees.technician"),
      school: "SENA – Institución Universitaria Salazar y Herrera (IUSH)",
      skills: ["Version Control", "Data Modeling", "Databases", "Web Dev"],
    },
    {
      period: "2020–2021",
      degree: t("about.degrees.assistant"),
      school: "Institución Universitaria Pascual Bravo",
      skills: ["Databases", "Programming", "Web Apps", "Functional Programming"],
    },
    {
      period: "2019–2021",
      degree: t("about.degrees.highschool"),
      school: "I.E. Inem José Félix de Restrepo",
      skills: ["Computer Science", "Mathematics", "Logic"],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">{t("about.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ASCII Art */}
          <div className="animate-fade-in-bounce">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <pre className="relative font-mono text-[10px] sm:text-xs md:text-sm text-primary bg-background/80 p-4 md:p-6 rounded-lg border border-border overflow-x-auto whitespace-pre">
                {asciiArt}
              </pre>
              <p className="mt-4 text-center text-muted-foreground font-mono text-sm italic">
                {t("about.quote")}
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-bounce delay-200">
            <p className="text-xl text-foreground leading-relaxed font-medium">
              {t("about.intro")}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph3")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Code2, label: t("about.stats.backendDev"), value: t("about.stats.years") },
                { icon: Database, label: t("about.stats.dataAnalysis"), value: t("about.stats.expert") },
                { icon: Cpu, label: t("about.stats.iotProjects"), value: t("about.stats.innovative") },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                  <span className="text-xs md:text-sm text-muted-foreground text-center">{item.label}</span>
                  <span className="text-sm md:text-lg font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-serif font-bold gradient-text">{t("about.education")}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-mono text-primary">{edu.period}</span>
                  {edu.status && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                      {edu.status}
                    </span>
                  )}
                </div>
                <h4 className="font-serif font-bold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mb-3">{edu.school}</p>
                {edu.skills && (
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="tech-badge text-xs py-0.5 px-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
