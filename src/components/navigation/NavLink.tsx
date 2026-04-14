import type { NavLink as NavLinkType } from "@/types";
import { SectionHashLink } from "./SectionHashLink";

interface NavLinkProps {
  link: NavLinkType;
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const NavLink = ({ link, onClick, className = "", mobile = false }: NavLinkProps) => {
  const baseClasses = mobile
    ? "block text-muted-foreground hover:text-foreground transition-colors font-medium"
    : "text-sm text-muted-foreground hover:text-foreground transition-colors font-medium";

  return (
    <SectionHashLink href={link.href} className={`${baseClasses} ${className}`} onAfterClick={onClick}>
      {link.label}
    </SectionHashLink>
  );
};
