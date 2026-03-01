import { motion } from "framer-motion";
import type { Step } from "@/types";

interface StepCardProps {
  step: Step;
  index: number;
  totalSteps: number;
}

export const StepCard = ({ step, index, totalSteps }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {index < totalSteps - 1 && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
      )}
      <div className="glass rounded-xl p-8 text-center relative">
        <span className="text-5xl font-display font-bold text-primary/20 mb-4 block">
          {step.number}
        </span>
        <h3 className="font-display font-semibold text-xl mb-3">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};
