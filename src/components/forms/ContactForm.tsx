import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { BenefitItem } from "./BenefitItem";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { saveContact } from "@/services/contact";
import type { ContactFormData } from "@/types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export const ContactForm = () => {
  const { translations } = useLanguage();
  const { contact } = translations;
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await saveContact(formData);

    if (result.success) {
      toast.success(contact.form.success);
      setFormData(initialFormData);
    } else {
      toast.error(result.error || contact.form.error);
    }

    setIsSubmitting(false);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-3">
          {contact.label}
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          {contact.title}{" "}
          <span className="text-gradient">{contact.titleHighlight}</span>{" "}
          {contact.titleSuffix}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {contact.description}
        </p>
        <div className="space-y-4 text-muted-foreground">
          {contact.benefits.map((benefit) => (
            <BenefitItem key={benefit} text={benefit} />
          ))}
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass rounded-2xl p-8 space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            label={contact.form.name}
            name="name"
            value={formData.name}
            onChange={(value) => updateField("name", value)}
            placeholder={contact.form.namePlaceholder}
            required
          />
          <FormField
            label={contact.form.email}
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => updateField("email", value)}
            placeholder={contact.form.emailPlaceholder}
            required
          />
        </div>
        <FormField
          label={contact.form.company}
          name="company"
          value={formData.company}
          onChange={(value) => updateField("company", value)}
          placeholder={contact.form.companyPlaceholder}
        />
        <FormField
          label={contact.form.message}
          name="message"
          type="textarea"
          value={formData.message}
          onChange={(value) => updateField("message", value)}
          placeholder={contact.form.messagePlaceholder}
        />
        <Button
          variant="hero"
          size="lg"
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {contact.form.submit}
        </Button>
      </motion.form>
    </div>
  );
};
