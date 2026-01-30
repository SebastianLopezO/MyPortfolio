import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <Button
        variant={lang === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("es")}
        className={`h-7 px-2 text-xs rounded-full ${
          lang === "es" 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground"
        }`}
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
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
