import { SectionHeader } from "@/components/common/SectionHeader";
import { ReasonCard } from "@/components/cards/ReasonCard";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyAquaSat = () => {
  const { translations } = useLanguage();
  const { whyAquaSat } = translations;

  return (
    <section id="why" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label={whyAquaSat.label}
          title={whyAquaSat.title}
          titleHighlight={whyAquaSat.titleHighlight}
          description={whyAquaSat.description}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {whyAquaSat.reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAquaSat;
