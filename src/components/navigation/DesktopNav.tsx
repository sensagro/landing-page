import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { navLinks } from "@/utils/constants";
import { smoothScroll } from "@/utils/smoothScroll";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} />
      ))}
      <Button variant="hero" size="sm" asChild>
        <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
          Contact Us
        </a>
      </Button>
    </nav>
  );
};
