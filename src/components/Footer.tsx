import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Codepen, 
  Instagram,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/SebastianLopezO", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sebastián-lópez-osorio/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/sebastianlopo_", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/sebastianlopo_/", label: "Instagram" },
  { icon: Codepen, href: "https://codepen.io/SebastianLopez-the-sasster", label: "CodePen" },
  { icon: Mail, href: "mailto:sebastianlopo.tech@gmail.com", label: "Email" },
];

const additionalLinks = [
  { name: "Stack Overflow", href: "https://stackoverflow.com/users/19369741/sebastian-lopez", color: "bg-orange-500/10 text-orange-400" },
  { name: "Medium", href: "https://medium.com/@sebastianlopo", color: "bg-neutral-500/10 text-neutral-400" },
  { name: "Docker Hub", href: "https://hub.docker.com/u/sebastian190030", color: "bg-blue-500/10 text-blue-400" },
  { name: "WakaTime", href: "https://wakatime.com/@SebastianLopezO", color: "bg-purple-500/10 text-purple-400" },
  { name: "Platzi", href: "https://platzi.com/p/SebastianLopezO/", color: "bg-green-500/10 text-green-400" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            >
              {link.name}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} My Portfolio by{" "}
              <span className="text-primary font-semibold">Sebastián López</span>.
              All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground font-mono">
          &lt;/built with passion&gt;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
