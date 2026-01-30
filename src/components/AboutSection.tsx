import { Code2, Database, Cpu, GraduationCap, Calendar } from "lucide-react";

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

const education = [
  {
    period: "2022–2027",
    degree: "Bachelor's in Computer Engineering",
    school: "Politécnico Jaime Isaza Cadavid",
    status: "In Progress",
  },
  {
    period: "2022–2023",
    degree: "Software Programming Technician",
    school: "SENA – IUSH",
  },
  {
    period: "2020–2021",
    degree: "Assistant Software Development Technician",
    school: "Institución Educativa Pascual Bravo",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">The Engineer's Mindset</h2>
          <p className="section-subtitle">Understanding complexity, delivering simplicity</p>
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
                "Engineering is the art of understanding complex systems"
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-bounce delay-200">
            <p className="text-lg text-foreground leading-relaxed">
              I am a passionate and proactive{" "}
              <span className="text-primary font-semibold">Computer Engineering student</span> from{" "}
              <span className="text-primary font-semibold">Medellín, Colombia</span>, driven by an 
              insatiable curiosity and a strong commitment to continuous learning.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My academic and professional experiences have shaped me into a versatile individual 
              capable of tackling complex challenges through analytical thinking, creativity, and 
              teamwork. I stand out for my investigative mindset, my ability to learn independently, 
              and my dedication to improving both individual and collective outcomes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I see engineering not just as the mastery of tools, but as the art of understanding 
              complex systems, asking the right questions, and building thoughtful, sustainable, 
              and human-centered solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Code2, label: "Backend Dev", value: "3+ Years" },
                { icon: Database, label: "Data Analysis", value: "Expert" },
                { icon: Cpu, label: "IoT Projects", value: "Innovative" },
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
            <h3 className="text-2xl font-serif font-bold gradient-text">Education</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-mono text-primary">{edu.period}</span>
                  {edu.status && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                      {edu.status}
                    </span>
                  )}
                </div>
                <h4 className="font-serif font-bold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
