import { Github, Linkedin, Twitter, Mail, Codepen } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Codepen, href: "https://codepen.io", label: "CodePen" },
  { icon: Mail, href: "mailto:hello@sebastianlopez.dev", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container px-4">
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
