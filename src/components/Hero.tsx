import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { smoothScroll } from "@/utils/smoothScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-sensor.jpg";

const Hero = () => {
  const { translations } = useLanguage();
  const { hero } = translations;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundImage
        src={heroImage}
        alt={hero.imageAlt}
        gradientOverlay="to-r"
      />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
                {hero.label}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
            >
              {hero.title}{" "}
              <span className="text-gradient glow-text">{hero.titleHighlight}</span>{" "}
              {hero.titleSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
                  {hero.ctaDemo}
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#how-it-works" onClick={(e) => smoothScroll(e, "#how-it-works")}>
                  {hero.ctaHowItWorks}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
