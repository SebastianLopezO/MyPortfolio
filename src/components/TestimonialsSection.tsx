import {Briefcase, ChevronLeft, ChevronRight, GraduationCap, Quote, Users} from "lucide-react";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
    relationship: string;
    date: string;
    highlight: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Tuve la oportunidad de trabajar con Sebastián y destaca su profesionalismo y compromiso en cada proyecto. Se caracteriza por combinar un excelente dominio técnico en desarrollo web con una visión estratégica que facilita que cada solución no solo funcione de manera óptima, sino que también aporte valor real al negocio.",
        name: "Daniel Rodriguez",
        role: "CEO",
        company: "Adcom Group",
        relationship: "Supervisor directo",
        date: "Sept 2025",
        highlight: "Visión Estratégica",
    },
    {
        quote: "Tuve el privilegio de acompañar a Sebastián en un equipo de trabajo donde su aporte fue absolutamente clave para el desarrollo y crecimiento de nuestros proyectos. Desde el primer momento, se destacó por su amplio conocimiento técnico como desarrollador, su inteligencia y su constante disposición para proponer soluciones tecnológicas innovadoras. Sebastián no solo aporta desde lo técnico, sino también desde lo humano: es colaborador, empático y está siempre dispuesto a construir en colectivo.",
        name: "Valentina Quiroz Arango",
        role: "Content Strategy Lead",
        company: "Marketing Digital",
        relationship: "Supervisora directa",
        date: "Jun 2025",
        highlight: "Innovador",
    },
    {
        quote: "Tuve la suerte de trabajar con Sebastián en el área de T.I., no exagero al decir que es una de las personas más apasionadas y talentosas que he conocido en el mundo del desarrollo de software. Su conocimiento técnico es impresionante, y su capacidad para encontrar soluciones incluso en los escenarios más complejos lo convirtió en una pieza clave del equipo. Más allá de su inteligencia y habilidades, Sebastián es un gran compañero: noble, empático y siempre dispuesto a escuchar.",
        name: "Mateo Londoño Bustamante",
        role: "Web Designer",
        company: "WordPress & Figma",
        relationship: "Mismo equipo",
        date: "May 2025",
        highlight: "Talentoso",
    },
    {
        quote: "Sebastián es una persona muy inteligente, proactiva y siempre en busca de soluciones, curioso e investigativo. Es maravilloso trabajar con Sebas, tu lanzas un balón y el te devuelve tres. Es un crack en lo que hace, leal y con carácter.",
        name: "Daniela Bolivar",
        role: "Global Business Development Manager",
        company: "International Education",
        relationship: "Supervisora directa",
        date: "Feb 2025",
        highlight: "Proactivo",
    },
    {
        quote: "Recomiendo ampliamente a Sebastián Lopez. Es un profesional diligente, propositivo y con una gran capacidad para aportar soluciones que suplen las necesidades de cada área. Destaca por su excelente trabajo en equipo, comunicación efectiva y habilidad para priorizar tareas de manera eficiente, asegurando resultados de calidad en tiempos ajustados. Su compromiso y creatividad lo convierten en un activo valioso para cualquier organización.",
        name: "Kelly Johana Mejia",
        role: "Professional in Administration",
        company: "Commercial Processes",
        relationship: "Cargo superior",
        date: "Ene 2025",
        highlight: "Diligente",
    },
    {
        quote: "Sebastián es un compañero excepcional con quien tengo la suerte de compartir en la misma carrera en la universidad. Siempre tiene una insaciable curiosidad por aprender cosas nuevas y nos guía en el proceso. En los proyectos, es nuestro referente por su experiencia y habilidad para trabajar en equipo. Sus comentarios y feedbacks son siempre precisos y valiosos.",
        name: "Darwin David Castaño Hernández",
        role: "Software Developer",
        company: "Python | Java | React",
        relationship: "Compañero de estudios",
        date: "Ene 2025",
        highlight: "Referente",
    },
    {
        quote: "Sebastian es muy inquieto y preocupado por aprender de forma permanente y de manera autónoma, lo que le permite contribuir con la solución de problemas en la compañía desde su propia iniciativa. Es muy dado a las personas y a ser un facilitador en la mejora continua tanto de los procesos individuales como los del equipo.",
        name: "Jennifer Andrea Tuso M.",
        role: "Director de Experiencia",
        company: "Customer Experience",
        relationship: "Supervisora directa",
        date: "Jun 2024",
        highlight: "Autodidacta",
    },
    {
        quote: "Sebastián es un colaborador destacable en cuanto a su capacidad de innovación y proactividad. Su instinto curioso lo lleva a proponer soluciones más allá de lo esperado, lo cual es muy beneficioso para cualquier proyecto que adelante. Asimismo, tiene grandes habilidades para el análisis de datos, lo que permite llevar una adecuada trazabilidad y seguimiento de la información.",
        name: "Tatiana Díaz",
        role: "Comunicadora y Mercadóloga",
        company: "Marketing Digital",
        relationship: "Cargo superior",
        date: "Abr 2024",
        highlight: "Curioso",
    },
    {
        quote: "Es un placer recomendar a Sebastián López Osorno como un analista de datos excepcional. Sebastián posee una profunda comprensión de los conjuntos de datos y demuestra una habilidad innata para identificar patrones y tendencias significativas. Su enfoque meticuloso y atención a los detalles han sido fundamentales para el éxito de nuestro equipo. No tengo ninguna duda de que Sebastián continuará sobresaliendo en su carrera.",
        name: "Emmanuel Berrio Jimenez",
        role: "Desarrollador FullStack",
        company: "C# | React | Node.js",
        relationship: "Mismo equipo",
        date: "Mar 2024",
        highlight: "Excepcional",
    },
    {
        quote: "Joven talentoso con ganas de seguir aprendiendo.",
        name: "Francisco Cadavid",
        role: "Analista de Procesos",
        company: "Quipux",
        relationship: "Mismo equipo",
        date: "Mar 2024",
        highlight: "Talentoso",
    },
    {
        quote: "Sebastián destaca por su notable innovación, siempre persiguiendo soluciones efectivas y eficientes para los desafíos. Su proactividad y responsabilidad en las tareas que están en su responsabilidad son admirables, y su contribución al trabajo en equipo es asertiva y valiosa.",
        name: "Laura Alejandra García",
        role: "Marketing Digital",
        company: "Estrategia Digital",
        relationship: "Mismo equipo",
        date: "Feb 2024",
        highlight: "Responsable",
    },
];

const getRelationshipIcon = (relationship: string) => {
    if (relationship.includes("Supervisor") || relationship.includes("Cargo")) {
        return Briefcase;
    }
    if (relationship.includes("estudios")) {
        return GraduationCap;
    }
    return Users;
};

const TestimonialsSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const {t} = useLanguage();
    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentTestimonials = testimonials.slice(
        currentPage * testimonialsPerPage,
        (currentPage + 1) * testimonialsPerPage
    );

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-card/50">
            <div className="container px-4">
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className="section-title">{t("testimonials.title")}</h2>
                    <p className="section-subtitle">
                        {testimonials.length} {t("testimonials.subtitle")}
                    </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevPage}
                        className="border-border hover:border-primary/50 hover:bg-primary/10"
                        aria-label="Ver testimonios anteriores"
                    >
                        <ChevronLeft className="h-5 w-5"/>
                    </Button>
                    <div className="flex gap-2" role="tablist" aria-label="Páginas de testimonios">
                        {Array.from({length: totalPages}).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === currentPage ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-primary/50"
                                }`}
                                aria-label={`Ir a página ${i + 1} de testimonios`}
                                aria-selected={i === currentPage}
                                role="tab"
                            />
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextPage}
                        className="border-border hover:border-primary/50 hover:bg-primary/10"
                        aria-label="Ver siguientes testimonios"
                    >
                        <ChevronRight className="h-5 w-5"/>
                    </Button>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {currentTestimonials.map((testimonial, index) => {
                        const RelIcon = getRelationshipIcon(testimonial.relationship);
                        return (
                            <div
                                key={`${testimonial.name}-${currentPage}`}
                                className="relative p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce flex flex-col"
                                style={{animationDelay: `${index * 100}ms`}}
                            >
                                {/* Quote icon */}
                                <div className="absolute -top-3 left-6">
                                    <div className="p-2 rounded-full bg-primary/20 text-primary">
                                        <Quote className="h-4 w-4"/>
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="flex items-center justify-between mb-3 pt-3">
                  <span
                      className="inline-block px-2 py-1 text-xs font-mono font-semibold bg-primary/10 text-primary rounded-full border border-primary/30">
                    {testimonial.highlight}
                  </span>
                                    <span className="text-xs text-muted-foreground font-mono">
                    {testimonial.date}
                  </span>
                                </div>

                                {/* Quote */}
                                <blockquote
                                    className="text-muted-foreground text-sm leading-relaxed mb-4 italic flex-grow line-clamp-5">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="border-t border-border pt-4 mt-auto">
                                    <p className="font-serif font-bold text-foreground text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-primary">{testimonial.role}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                                        <RelIcon className="h-3 w-3"/>
                                        <span>{testimonial.relationship}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="mt-12 flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">{testimonials.length}</p>
                        <p className="text-sm text-muted-foreground">{t("testimonials.recommendations")}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">
                            {testimonials.filter(t => t.relationship.includes("Supervisor")).length}
                        </p>
                        <p className="text-sm text-muted-foreground">{t("testimonials.fromSupervisors")}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">
                            {testimonials.filter(t => t.relationship.includes("equipo")).length}
                        </p>
                        <p className="text-sm text-muted-foreground">{t("testimonials.fromTeammates")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
