import { createContext } from "react";
import { Language } from "@/lib/translations";

export interface LanguageContextType {
    lang: Language;
    t: (key: string) => string;
    switchLanguage: (newLang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);