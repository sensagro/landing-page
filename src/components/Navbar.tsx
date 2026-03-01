import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileToggle } from "@/components/navigation/MobileToggle";
import { MobileMenu } from "@/components/navigation/MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo />

        <DesktopNav />

        <MobileToggle isOpen={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.header>
  );
};

export default Navbar;
