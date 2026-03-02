import type { NavLink, Feature, Step, Reason } from "@/types";

export const getNavLinks = (translations: { nav: { features: string; howItWorks: string; whyAquaSat: string } }): NavLink[] => [
  { label: translations.nav.features, href: "#features" },
  { label: translations.nav.howItWorks, href: "#how-it-works" },
  { label: translations.nav.whyAquaSat, href: "#why" },
];
