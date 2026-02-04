import {useState} from "react";
import {CheckCircle, Mail, MapPin, Phone, Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import {useLanguage} from "@/hooks/useLanguage";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();
    const {t} = useLanguage();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: t("contact.toast.title"),
            description: t("contact.toast.description"),
        });

        setFormData({name: "", email: "", message: ""});
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container px-4">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="section-title">{t("contact.title")}</h2>
                    <p className="section-subtitle">{t("contact.subtitle")}</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-bounce">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                                {t("contact.connect")}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t("contact.description")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{t("contact.location")}</p>
                                    <p className="text-muted-foreground">Medellín, Colombia</p>
                                </div>
                            </div>

                            <a
                                href="tel:+573002329213"
                                className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
                                aria-label="Llamar al teléfono +57 300 232 9213"
                            >
                                <div
                                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                    <Phone className="h-5 w-5"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{t("contact.phone")}</p>
                                    <p className="text-primary hover:underline">+57 300 232 9213</p>
                                </div>
                            </a>

                            <a
                                href="mailto:sebastianlopezosorno2005@gmail.com"
                                className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
                                aria-label="Enviar correo a sebastianlopezosorno2005@gmail.com"
                            >
                                <div
                                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                    <Mail className="h-5 w-5"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{t("contact.email")}</p>
                                    <p className="text-primary hover:underline break-all">
                                        sebastianlopezosorno2005@gmail.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sebastianlopezosorno/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
                                aria-label="Visitar perfil de LinkedIn de Sebastián López"
                            >
                                <div
                                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">LinkedIn</p>
                                    <p className="text-primary hover:underline">sebastianlopezosorno</p>
                                </div>
                            </a>
                        </div>

                        {/* Decorative element */}
                        <div className="hidden md:block">
                            <div
                                className="w-32 h-32 hex-card bg-gradient-to-br from-primary/20 to-accent/20 animate-float"/>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 animate-fade-in-bounce delay-200"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                {t("contact.form.fullName")}
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t("contact.form.placeholder.name")}
                                className="bg-card border-border focus:border-primary focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                {t("contact.form.email")}
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t("contact.form.placeholder.email")}
                                className="bg-card border-border focus:border-primary focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                {t("contact.form.message")}
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t("contact.form.placeholder.message")}
                                className="bg-card border-border focus:border-primary focus:ring-primary resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 glow-hover transition-all duration-300"
                            aria-label={isSubmitting ? "Enviando mensaje" : "Enviar mensaje de contacto"}
                        >
                            {isSubmitting ? (
                                <>
                                    <CheckCircle className="mr-2 h-5 w-5 animate-pulse"/>
                                    {t("contact.form.sending")}
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-5 w-5"/>
                                    {t("contact.form.send")}
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
