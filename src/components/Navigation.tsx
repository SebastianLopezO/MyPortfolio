import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {t, lang} = useLanguage();

    const navItems = [
        {label: t("nav.home"), href: "#home"},
        {label: t("nav.about"), href: "#about"},
        {label: t("nav.profile"), href: "#profile"},
        {label: t("nav.resume"), href: "#resume"},
        {label: t("nav.experience"), href: "#experience"},
        {label: t("nav.skills"), href: "#skills"},
        {label: t("nav.projects"), href: "#projects"},
        {label: t("nav.metrics"), href: "#metrics"},
        {label: t("nav.contact"), href: "#contact"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2" aria-label="Ir al inicio - Sebastián López O">
                        <span className="text-xl md:text-2xl font-display text-primary">SL</span>
                        <span className="hidden sm:inline text-lg font-serif font-bold text-foreground">
              Sebastián López O
            </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                            >
                                {item.label}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"/>
                            </a>
                        ))}
                        <LanguageSwitcher/>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSwitcher/>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in-bounce">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
