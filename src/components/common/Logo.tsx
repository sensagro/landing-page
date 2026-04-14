import { Link, useLocation } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Link
      to="/"
      className={`font-display font-bold text-xl tracking-tight ${className}`}
      onClick={(e) => {
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <span className="text-primary">Sens</span>agro
    </Link>
  );
};
