import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  titleHighlight,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        {title}{" "}
        {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
