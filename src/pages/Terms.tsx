import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { translations } = useLanguage();
  const { terms } = translations;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <h1 className="text-3xl font-bold mb-2">{terms.title}</h1>
        <p className="text-muted-foreground text-sm mb-10">{terms.lastUpdated}</p>
        {terms.sections.map((s) => (
          <section key={s.title} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
