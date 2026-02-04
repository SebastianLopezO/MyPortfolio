import {useLanguage} from "@/hooks/useLanguage";
import {Button} from "@/components/ui/button";

const LanguageSwitcher = () => {
    const {lang, switchLanguage} = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1" role="group" aria-label="Selector de idioma">
            <Button
                variant={lang === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLanguage("es")}
                className={`h-7 px-2 text-xs rounded-full ${
                    lang === "es"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Cambiar idioma a Español"
                aria-pressed={lang === "es"}
            >
                ES
            </Button>
            <Button
                variant={lang === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLanguage("en")}
                className={`h-7 px-2 text-xs rounded-full ${
                    lang === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Change language to English"
                aria-pressed={lang === "en"}
            >
                EN
            </Button>
        </div>
    );
};

export default LanguageSwitcher;
