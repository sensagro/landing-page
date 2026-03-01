interface BenefitItemProps {
  text: string;
}

export const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <p className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      {text}
    </p>
  );
};
