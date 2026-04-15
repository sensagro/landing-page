import { Link } from "react-router-dom";
import { AppleIcon, GooglePlayIcon } from "@/components/common/StoreIcons";
import { Logo } from "@/components/common/Logo";
import { SectionHashLink } from "@/components/navigation/SectionHashLink";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  const { footer, hero } = translations;

  const anchorLinks = [
    { label: footer.links.features, href: "#features" },
    { label: footer.links.howItWorks, href: "#how-it-works" },
    { label: footer.links.contact, href: "#contact" },
  ];

  const routeLinks = [
    { label: footer.links.privacy, to: "/privacy" },
    { label: footer.links.terms, to: "/terms" },
  ];

  return (
    <footer className="section-padding pb-10 pt-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between lg:items-start">
        <div>
          <Logo />
          <p className="text-muted-foreground text-sm mt-1">
            {footer.tagline}
          </p>
        </div>
        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm text-muted-foreground shrink-0">{hero.comingSoon}</span>
          <div className="flex items-center gap-4">
            <SectionHashLink
              href="#contact"
              className="inline-flex opacity-70 hover:opacity-100 transition-opacity text-muted-foreground"
              aria-label={`${hero.comingSoon} — ${hero.appStore}`}
            >
              <AppleIcon className="h-7 w-7" />
            </SectionHashLink>
            <SectionHashLink
              href="#contact"
              className="inline-flex opacity-70 hover:opacity-100 transition-opacity text-muted-foreground"
              aria-label={`${hero.comingSoon} — ${hero.playStore}`}
            >
              <GooglePlayIcon className="h-7 w-7" />
            </SectionHashLink>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:ml-auto">
          {anchorLinks.map((link) => (
            <SectionHashLink
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </SectionHashLink>
          ))}
          {routeLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground text-xs lg:text-right lg:whitespace-nowrap">
          © {new Date().getFullYear()} Sensagro. {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
