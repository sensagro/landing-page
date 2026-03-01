/**
 * Smoothly scrolls to a target element or to the top of the page
 * @param e - React mouse event
 * @param href - CSS selector for target element or "#" for top of page
 */
export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
