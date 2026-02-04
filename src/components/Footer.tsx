import {Code, ExternalLink, Github, Linkedin, Mail, Phone} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage";

// Custom icons for services that don't have Lucide equivalents
const ReplitIcon = ({className}: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5v-5zM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12V8zM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5v-5z"/>
    </svg>
);

const HackerRankIcon = ({className}: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701a.257.257 0 0 0 .258-.257c0-.142-.116-.258-.258-.258H7.964a.258.258 0 0 0-.258.258c0 .142.116.257.258.257h.701v10.166h-.7a.258.258 0 0 0-.258.258c0 .142.116.258.258.258h2.7a.257.257 0 0 0 .257-.258.257.257 0 0 0-.257-.258h-.7v-4.867h4.074v4.876h-.7a.257.257 0 0 0-.258.256c0 .143.116.258.258.258h2.698a.258.258 0 0 0 .258-.258.257.257 0 0 0-.258-.256h-.699V6.908h.7a.257.257 0 0 0 .257-.258.256.256 0 0 0-.257-.257h-2.699v.406z"/>
    </svg>
);

const socialLinks = [
    {icon: Github, href: "https://github.com/SebastianLopezO", label: "GitHub"},
    {icon: Linkedin, href: "https://www.linkedin.com/in/sebastianlopezosorno/", label: "LinkedIn"},
    {icon: ReplitIcon, href: "https://replit.com/@sebastianlopezo", label: "Replit", isCustom: true},
    {
        icon: HackerRankIcon,
        href: "https://www.hackerrank.com/profile/sebastianlopezo1",
        label: "HackerRank",
        isCustom: true
    },
    {icon: Phone, href: "tel:+573002329213", label: "Phone"},
    {icon: Mail, href: "mailto:sebastianlopezosorno2005@gmail.com", label: "Email"},
];

const additionalLinks = [
    {
        name: "Stack Overflow",
        href: "https://stackoverflow.com/users/20429376/sebasti%c3%a1n-l%c3%b3pez-osorno",
        color: "bg-orange-500/10 text-orange-400"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sebastianlopezosorno/",
        color: "bg-blue-600/10 text-blue-400"
    },
    {
        name: "HackerRank",
        href: "https://www.hackerrank.com/profile/sebastianlopezo1",
        color: "bg-emerald-500/10 text-emerald-400"
    },
    {
        name: "FreeCodeCamp",
        href: "https://www.freecodecamp.org/sebastianlopezo",
        color: "bg-green-500/10 text-green-400"
    },
    {name: "Docker Hub", href: "https://hub.docker.com/u/sebastian190030", color: "bg-blue-500/10 text-blue-400"},
    {name: "WakaTime", href: "https://wakatime.com/@SebastianLopezO", color: "bg-purple-500/10 text-purple-400"},
    {name: "Platzi", href: "https://platzi.com/p/SebastianLopezO/", color: "bg-green-600/10 text-green-400"},
    {name: "Replit", href: "https://replit.com/@sebastianlopezo", color: "bg-gray-500/10 text-gray-400"},
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useLanguage();

    return (
        <footer className="py-12 border-t border-border bg-card/50">
            <div className="container px-4">
                {/* Additional Links */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {additionalLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${link.color} hover:scale-105 transition-transform duration-200`}
                            aria-label={`Visitar perfil de ${link.name}`}
                        >
                            {link.name}
                            <ExternalLink className="h-3 w-3"/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} My Portfolio by{" "}
                            <span className="text-primary font-semibold">Sebastián López Osorno</span>.
                            {" "}{t("footer.rights")}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("tel:") || social.href.startsWith("mailto:") ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                aria-label={social.label}
                            >
                                {'isCustom' in social && social.isCustom ? (
                                    <social.icon className="h-5 w-5"/>
                                ) : (
                                    <social.icon className="h-5 w-5"/>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative line */}
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"/>
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground font-mono flex items-center justify-center gap-1">
                    <Code className="h-3 w-3"/>
                    <span>/</span>
                    {t("footer.builtWith")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
