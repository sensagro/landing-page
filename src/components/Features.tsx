import { motion } from "framer-motion";
import { Satellite, Droplets, Signal, BatteryCharging } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Satellite Communication",
    description:
      "No LoRa, no WiFi, no cellular towers needed. Direct satellite uplink works anywhere on your farm, no matter how remote.",
  },
  {
    icon: Droplets,
    title: "Real-Time Water Level",
    description:
      "Know exactly when troughs need refilling. Get instant alerts before your cattle run out of water.",
  },
  {
    icon: Signal,
    title: "100% Coverage",
    description:
      "Works across the entire Argentine pampa. No dead zones, no infrastructure required — just sky.",
  },
  {
    icon: BatteryCharging,
    title: "Solar Powered",
    description:
      "Self-sustaining energy with built-in solar cells. Install once, monitor forever with zero maintenance.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technology That{" "}
            <span className="text-gradient">Just Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Designed for the harsh realities of Argentine farmland. No infrastructure, no complexity — just reliable data from every trough.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
