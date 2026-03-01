import { smoothScroll } from "@/utils/smoothScroll";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <a
      href="#"
      onClick={(e) => smoothScroll(e, "#")}
      className={`font-display font-bold text-xl tracking-tight ${className}`}
    >
      <span className="text-primary">Aqua</span>Sat
    </a>
  );
};
