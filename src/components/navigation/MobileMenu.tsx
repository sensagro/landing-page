import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { getNavLinks } from "@/utils/constants";
import { smoothScroll } from "@/utils/smoothScroll";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { translations } = useLanguage();
  const navLinks = getNavLinks(translations);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="md:hidden glass mt-2 mx-4 rounded-xl p-6 space-y-4"
    >
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} mobile onClick={onClose} />
      ))}
      <Button variant="hero" size="sm" className="w-full" asChild>
        <a
          href="#contact"
          onClick={(e) => {
            smoothScroll(e, "#contact");
            onClose();
          }}
        >
          {translations.nav.contactUs}
        </a>
      </Button>
    </motion.div>
  );
};
