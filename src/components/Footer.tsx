import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { SectionHashLink } from "@/components/navigation/SectionHashLink";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  const { footer } = translations;

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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Logo />
          <p className="text-muted-foreground text-sm mt-1">
            {footer.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Sensagro. {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
