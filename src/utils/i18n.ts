import { en } from "@/locales/en";
import { es } from "@/locales/es";

export type Language = "en" | "es";

type DeepStringify<T> = T extends string
  ? string
  : T extends Function
  ? T
  : T extends readonly (infer U)[]
  ? readonly DeepStringify<U>[]
  : T extends object
  ? {
      [K in keyof T]: DeepStringify<T[K]>;
    }
  : T;

export type Translations = DeepStringify<typeof en>;

const translations: Record<Language, Translations> = {
  en,
  es,
};

let currentLanguage: Language = "es";

export const getLanguage = (): Language => {
  return currentLanguage;
};

export const setLanguage = (lang: Language): void => {
  currentLanguage = lang;
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
};

export const initLanguage = (): void => {
  if (typeof window === "undefined") return;

  // Only check localStorage, default to Spanish if nothing saved
  const savedLang = localStorage.getItem("language") as Language | null;
  if (savedLang && (savedLang === "en" || savedLang === "es")) {
    currentLanguage = savedLang;
  } else {
    // Always default to Spanish
    currentLanguage = "es";
  }
};

export const t = (): Translations => {
  return translations[currentLanguage];
};

export const useTranslations = (): Translations => {
  return translations[currentLanguage];
};
