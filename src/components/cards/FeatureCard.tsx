import { IconCard } from "@/components/common/IconCard";
import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  animationDelay?: number;
}

export const FeatureCard = ({ feature, animationDelay = 0 }: FeatureCardProps) => {
  return (
    <IconCard
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
      animationDelay={animationDelay}
    />
  );
};
