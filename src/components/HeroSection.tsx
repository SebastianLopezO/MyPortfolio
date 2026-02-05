import {ArrowDown, Eye} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";
import {useTypewriter} from "@/hooks/useTypewriter";

const HeroSection = () => {
    const {t, lang} = useLanguage();
    const greetingText = t("hero.greeting");
    const {displayText, isComplete} = useTypewriter({text: greetingText, speed: 80, delay: 500});

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/refs/heads/main/images/hero-bg.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"/>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-fade-in-bounce">
                        {/* Profile Stats Badge */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <img
                                src="https://komarev.com/ghpvc/?username=SebastianLopezO&label=Profile%20Views&color=36BFB1&style=flat"
                                alt="Profile Views"
                                className="h-5"
                            />
                            <img
                                src="https://img.shields.io/github/followers/SebastianLopezO?label=Followers&style=social"
                                alt="GitHub Followers"
                                className="h-5"
                            />
                        </div>

                        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
                            {displayText}
                            <span
                                className={`inline-block w-0.5 h-4 md:h-5 bg-primary ml-1 align-middle ${isComplete ? 'animate-pulse' : 'animate-[blink_0.7s_infinite]'}`}/>
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            {t("hero.title")}{" "}
                            <span className="gradient-text">Sebastián</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-serif text-muted-foreground mb-6">
                            <span className="text-primary">{t("hero.role1")}</span> &{" "}
                            <span className="text-secondary">{t("hero.role2")}</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                            {t("hero.description")}{" "}
                            <span className="text-primary font-semibold">{t("hero.location")}</span>
                            {t("hero.descriptionEnd")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="inline-block" aria-label="Ir a la sección de contacto">
                                <Button
                                    size="lg"
                                    className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all duration-300"
                                    aria-label="Contactar ahora"
                                >
                                    {t("hero.ctaCV")}
                                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform"/>
                                </Button>
                            </a>
                            <a href="#projects" className="inline-block" aria-label="Ver mis proyectos">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                                    aria-label="Ver proyectos"
                                >
                                    <Eye className="mr-2 h-5 w-5"/>
                                    {t("hero.ctaProjects")}
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-shrink-0 animate-fade-in-bounce delay-200">
                        <div className="relative">
                            {/* Glow effect behind hexagon */}
                            <div className="absolute inset-0 hex-card bg-primary/30 blur-2xl scale-110"/>

                            {/* Hexagonal frame */}
                            <div
                                className="relative w-64 h-72 md:w-80 md:h-96 hex-card overflow-hidden border-4 border-primary/50 animate-pulse-glow">
                                <img
                                    src="https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/refs/heads/main/images/profile.webp"
                                    alt="Sebastián López Osorno"
                                    className="w-full h-full object-cover object-top"
                                    fetchPriority="high"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 hex-card bg-primary animate-float"/>
                            <div
                                className="absolute -bottom-4 -left-4 w-6 h-6 hex-card bg-secondary animate-float delay-300"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Desplazarse hacia abajo - Sección Sobre mí">
                    <ArrowDown className="h-6 w-6"/>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
