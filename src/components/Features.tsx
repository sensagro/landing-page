import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Features = () => {
  const { translations } = useLanguage();
  const { features } = translations;

  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={features.label}
          title={features.title}
          titleHighlight={features.titleHighlight}
          description={features.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.items.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} animationDelay={index * 0.15} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
