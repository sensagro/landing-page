import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const MetaTags = () => {
  const { language, translations } = useLanguage();

  useEffect(() => {
    document.title = translations.meta.title;
    document.documentElement.lang = language;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", translations.meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", translations.meta.ogTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", translations.meta.ogDescription);
  }, [language, translations]);

  return null;
};
