import { Logo } from "@/components/common/Logo";
import { smoothScroll } from "@/utils/smoothScroll";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  const { footer } = translations;

  const footerLinks = [
    { label: footer.links.features, href: "#features" },
    { label: footer.links.howItWorks, href: "#how-it-works" },
    { label: footer.links.contact, href: "#contact" },
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
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} AquaSat. {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
