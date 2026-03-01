import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { getNavLinks } from "@/utils/constants";
import { smoothScroll } from "@/utils/smoothScroll";
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
        <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
          {translations.nav.contactUs}
        </a>
      </Button>
    </nav>
  );
};
