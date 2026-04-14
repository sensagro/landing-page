import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { SectionHashLink } from "./SectionHashLink";
import { getNavLinks } from "@/utils/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export const DesktopNav = () => {
  const { translations } = useLanguage();
  const navLinks = getNavLinks(translations);

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} />
      ))}
      <Button variant="hero" size="sm" asChild>
        <SectionHashLink href="#contact" className="inline-flex items-center justify-center">
          {translations.nav.contactUs}
        </SectionHashLink>
      </Button>
    </nav>
  );
};
