import { Code2, Database, Cpu } from "lucide-react";

const asciiArt = `
    ╔══════════════════════════════╗
    ║   ┌─────────────────────┐    ║
    ║   │  while(alive) {     │    ║
    ║   │    eat();           │    ║
    ║   │    sleep();         │    ║
    ║   │    code();          │    ║
    ║   │    repeat();        │    ║
    ║   │  }                  │    ║
    ║   └─────────────────────┘    ║
    ║                              ║
    ║   > Engineering is the       ║
    ║     art of understanding     ║
    ║     complex systems_         ║
    ╚══════════════════════════════╝
`;

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">The Engineer's Mindset</h2>
          <p className="section-subtitle">Understanding complexity, delivering simplicity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ASCII Art */}
          <div className="animate-fade-in-bounce">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <pre className="relative font-mono text-xs md:text-sm text-primary bg-background/80 p-6 rounded-lg border border-border overflow-x-auto">
                {asciiArt}
              </pre>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-bounce delay-200">
            <p className="text-lg text-foreground leading-relaxed">
              As a <span className="text-primary font-semibold">Computer Engineering student</span> from{" "}
              <span className="text-primary font-semibold">Medellín, Colombia</span>, I thrive on the 
              intersection of data and development.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My proactive nature drives me to continuously explore new technologies and methodologies. 
              I believe that true engineering lies in understanding complex systems deeply enough to 
              make them elegantly simple.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {[
                { icon: Code2, label: "Backend Systems", value: "3+ Years" },
                { icon: Database, label: "Data Analysis", value: "Expert" },
                { icon: Cpu, label: "IoT Projects", value: "Innovative" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-lg font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
