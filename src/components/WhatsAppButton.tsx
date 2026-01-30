import {MessageCircle} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage";

const WhatsAppButton = () => {
    const {lang} = useLanguage();

    const phoneNumber = "573002329213";
    const messageEs = "Hola Sebastián, estoy interesado en tu perfil. Vengo desde tu portafolio web.";
    const messageEn = "Hi Sebastián, I'm interested in your profile. I'm coming from your web portfolio.";

    const message = lang === "es" ? messageEs : messageEn;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in-bounce"
            aria-label="Contact via WhatsApp"
        >
            <MessageCircle className="w-7 h-7 fill-current"/>

            {/* Pulse animation ring */}
            <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"/>
        </a>
    );
};

export default WhatsAppButton;
