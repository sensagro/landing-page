import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { StepCard } from "@/components/cards/StepCard";
import { useLanguage } from "@/contexts/LanguageContext";
import satelliteView from "@/assets/satellite-view.jpg";

const HowItWorks = () => {
  const { translations } = useLanguage();
  const { howItWorks } = translations;

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <BackgroundImage
        src={satelliteView}
        alt={howItWorks.imageAlt}
        opacity={0.2}
        gradientOverlay="to-b"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          label={howItWorks.label}
          title={howItWorks.title}
          titleHighlight={howItWorks.titleHighlight}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} totalSteps={howItWorks.steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
