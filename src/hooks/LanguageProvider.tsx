import { ReactNode } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Language, t as translate } from "@/lib/translations";
import { LanguageContext } from "@/hooks/LanguageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const { lang: paramLang } = useParams<{ lang: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    const lang: Language = paramLang === "es" || paramLang === "en" ? paramLang : "en";
    const t = (key: string) => translate(key, lang);

    const switchLanguage = (newLang: Language) => {
        const currentPath = location.pathname;
        const hash = location.hash;

        const newPath = currentPath.startsWith("/es") || currentPath.startsWith("/en")
            ? currentPath.replace(/^\/(es|en)/, `/${newLang}`)
            : `/${newLang}${currentPath}`;

        navigate(newPath + hash);
    };

    return (
        <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}