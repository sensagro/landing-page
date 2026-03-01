import { motion } from "framer-motion";
import { Zap, Wifi, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Wifi,
    title: "No Infrastructure Needed",
    description:
      "Unlike LoRa or cellular solutions, AquaSat uses satellite connectivity. No towers, no repeaters — just install and go, even in the most remote paddocks.",
  },
  {
    icon: Zap,
    title: "100% Solar Powered",
    description:
      "Our sensors run entirely on solar energy with battery backup, meaning zero ongoing energy costs and maintenance-free operation year-round.",
  },
  {
    icon: Shield,
    title: "Built for the Campo",
    description:
      "IP68-rated, UV-resistant, and cattle-proof. Designed from day one for the harsh conditions of Argentine ranches — dust, heat, rain, and livestock.",
  },
  {
    icon: TrendingUp,
    title: "Prevent Losses Before They Happen",
    description:
      "Real-time water level alerts let you act before troughs run dry. Protect your herd, reduce labour trips, and gain peace of mind from anywhere.",
  },
];

const WhyAquaSat = () => {
  return (
    <section id="why" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Why AquaSat
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The Smartest Way to{" "}
            <span className="text-gradient">Monitor Water</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Traditional solutions fail in remote areas. AquaSat was built
            specifically for the challenges of large-scale Argentine farming.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex gap-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAquaSat;
