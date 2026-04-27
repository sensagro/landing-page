import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE_URL = "https://sensagro.vercel.app";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

function upsertMeta(selector: string, attrKey: string, attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export const MetaTags = () => {
  const { language, translations } = useLanguage();

  useEffect(() => {
    document.title = translations.meta.title;
    document.documentElement.lang = language;

    upsertMeta('meta[name="description"]', "name", "description", translations.meta.description);

    upsertMeta('meta[property="og:title"]', "property", "og:title", translations.meta.ogTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", translations.meta.ogDescription);
    upsertMeta('meta[property="og:image"]', "property", "og:image", OG_IMAGE_URL);
    upsertMeta('meta[property="og:url"]', "property", "og:url", SITE_URL);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", translations.meta.ogTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", translations.meta.ogDescription);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", OG_IMAGE_URL);
  }, [language, translations]);

  return null;
};
