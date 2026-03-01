import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getLanguage, setLanguage, initLanguage, type Language } from "@/utils/i18n";
import { en } from "@/locales/en";
import { es } from "@/locales/es";
import type { Translations } from "@/utils/i18n";
import { MetaTags } from "@/components/MetaTags";

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    initLanguage();
    return getLanguage();
  });

  const translations = language === "en" ? en : es;

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage: handleSetLanguage }}>
      <MetaTags />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
