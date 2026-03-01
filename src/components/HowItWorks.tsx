import { motion } from "framer-motion";
import satelliteView from "@/assets/satellite-view.jpg";

const steps = [
  {
    number: "01",
    title: "Install",
    description:
      "Mount the sensor on any water trough in minutes. No tools, no wiring, no technician needed.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "The sensor automatically connects to satellites overhead. No cellular coverage or WiFi required.",
  },
  {
    number: "03",
    title: "Monitor",
    description:
      "View real-time water levels from your phone or computer. Get alerts before troughs run empty.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={satelliteView}
          alt="Satellite view of farmland"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Three Steps to{" "}
            <span className="text-gradient">Full Visibility</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="glass rounded-xl p-8 text-center relative">
                <span className="text-5xl font-display font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
