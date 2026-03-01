import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { StepCard } from "@/components/cards/StepCard";
import { steps } from "@/utils/constants";
import satelliteView from "@/assets/satellite-view.jpg";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <BackgroundImage
        src={satelliteView}
        alt="Satellite view of farmland"
        opacity={0.2}
        gradientOverlay="to-b"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          label="How It Works"
          title="Three Steps to"
          titleHighlight="Full Visibility"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} totalSteps={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
