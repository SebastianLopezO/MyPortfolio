import { createContext, useContext, ReactNode } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Language, t as translate } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: (key: string) => string;
  switchLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Language = paramLang === "es" || paramLang === "en" ? paramLang : "en";

  const t = (key: string) => translate(key, lang);

  const switchLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    const hash = location.hash;
    
    // Replace the language prefix in the path
    let newPath: string;
    if (currentPath.startsWith("/es") || currentPath.startsWith("/en")) {
      newPath = currentPath.replace(/^\/(es|en)/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${currentPath}`;
    }
    
    navigate(newPath + hash);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
