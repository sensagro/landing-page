import { smoothScroll } from "@/utils/smoothScroll";
import type { NavLink as NavLinkType } from "@/types";

interface NavLinkProps {
  link: NavLinkType;
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const NavLink = ({ link, onClick, className = "", mobile = false }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e, link.href);
    onClick?.();
  };

  const baseClasses = mobile
    ? "block text-muted-foreground hover:text-foreground transition-colors font-medium"
    : "text-sm text-muted-foreground hover:text-foreground transition-colors font-medium";

  return (
    <a href={link.href} onClick={handleClick} className={`${baseClasses} ${className}`}>
      {link.label}
    </a>
  );
};
