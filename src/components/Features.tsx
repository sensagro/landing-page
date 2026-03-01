import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { features } from "@/utils/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why Choose Us"
          title="Technology That"
          titleHighlight="Just Works"
          description="Designed for the harsh realities of Argentine farmland. No infrastructure, no complexity — just reliable data from every trough."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} animationDelay={index * 0.15} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
