import { motion } from "framer-motion";
import type { Reason } from "@/types";

interface ReasonCardProps {
  reason: Reason;
  index: number;
}

export const ReasonCard = ({ reason, index }: ReasonCardProps) => {
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 flex gap-6 group hover:border-primary/30 transition-colors"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg mb-2">{reason.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  );
};
