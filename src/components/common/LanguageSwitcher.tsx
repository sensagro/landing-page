import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

/**
 * Optional language switcher component
 * You can add this to your Navbar or Footer if you want users to switch languages
 */
export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm"
      aria-label="Toggle language"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  );
};
