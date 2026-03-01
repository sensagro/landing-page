import { Logo } from "@/components/common/Logo";
import { smoothScroll } from "@/utils/smoothScroll";

const Footer = () => {
  const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="section-padding pb-10 pt-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Logo />
          <p className="text-muted-foreground text-sm mt-1">
            Satellite water monitoring for modern farms.
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
          © {new Date().getFullYear()} AquaSat. Buenos Aires, Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
