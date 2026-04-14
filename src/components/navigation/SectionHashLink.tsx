import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { smoothScroll } from "@/utils/smoothScroll";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onAfterClick?: () => void;
};

export const SectionHashLink = React.forwardRef<HTMLAnchorElement, Props>(
  function SectionHashLink({ href, className, children, onAfterClick }, ref) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    if (!isHome) {
      return (
        <Link
          ref={ref}
          to={{ pathname: "/", hash: href }}
          className={className}
          onClick={onAfterClick}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onClick={(e) => {
          smoothScroll(e, href);
          onAfterClick?.();
        }}
      >
        {children}
      </a>
    );
  },
);
