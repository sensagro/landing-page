import type { NavLink, Feature, Step, Reason } from "@/types";

/**
 * These functions return translated data based on the current language context.
 * Components should use useLanguage() hook and access translations directly.
 * 
 * These are kept for backward compatibility but will be removed in favor of
 * direct translation access in components.
 */

// Navigation links structure (hrefs stay the same, labels come from translations)
export const getNavLinks = (translations: { nav: { features: string; howItWorks: string; whyAquaSat: string } }): NavLink[] => [
  { label: translations.nav.features, href: "#features" },
  { label: translations.nav.howItWorks, href: "#how-it-works" },
  { label: translations.nav.whyAquaSat, href: "#why" },
];

// Features, steps, and reasons are now accessed directly from translations object
// See components for usage examples
