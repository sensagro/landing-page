import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  animationDelay?: number;
}

export const IconCard = ({
  icon: Icon,
  title,
  description,
  className = "",
  iconClassName = "",
  animationDelay = 0,
}: IconCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={`glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors ${iconClassName}`}>
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};
