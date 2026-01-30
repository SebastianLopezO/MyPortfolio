import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sebastián's proactive approach to problem-solving transformed our CRM operations. His ability to anticipate needs and deliver solutions before issues arise is truly exceptional.",
    name: "Daniel Rodriguez",
    role: "CEO",
    company: "Adcom Group",
    highlight: "Proactive",
  },
  {
    quote: "Working with Sebastián opened my eyes to innovative approaches in backend development. His creative solutions and technical depth make him an invaluable team member.",
    name: "Mateo Londoño",
    role: "Senior Developer",
    company: "Tech Partner",
    highlight: "Innovative",
  },
  {
    quote: "Sebastián brings a strategic vision to every project. His ability to see the big picture while managing technical details is rare and incredibly valuable for our team.",
    name: "Jennifer Tuso",
    role: "Project Manager",
    company: "MUV-U S.A.S",
    highlight: "Strategic Vision",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/50">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">What My Colleagues Say</h2>
          <p className="section-subtitle">Words from those I've worked with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="p-2 rounded-full bg-primary/20 text-primary">
                  <Quote className="h-5 w-5" />
                </div>
              </div>

              {/* Highlight badge */}
              <div className="mb-4 pt-4">
                <span className="inline-block px-3 py-1 text-xs font-mono font-semibold bg-primary/10 text-primary rounded-full border border-primary/30">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
