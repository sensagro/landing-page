import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { BenefitItem } from "./BenefitItem";
import { Send } from "lucide-react";
import { toast } from "sonner";
import type { ContactFormData } from "@/types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  farm: "",
  message: "",
};

const benefits = [
  "Free pilot program for early adopters",
  "Installation support included",
  "No long-term contracts required",
];

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData(initialFormData);
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
          Get Started
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Ready to <span className="text-gradient">Modernize</span> Your Farm?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Whether you manage 50 or 50,000 head of cattle, our satellite sensors scale with your
          operation. Get in touch for a demo or pricing.
        </p>
        <div className="space-y-4 text-muted-foreground">
          {benefits.map((benefit) => (
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
            label="Name"
            name="name"
            value={formData.name}
            onChange={(value) => updateField("name", value)}
            placeholder="Your name"
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => updateField("email", value)}
            placeholder="you@farm.com"
            required
          />
        </div>
        <FormField
          label="Farm / Company"
          name="farm"
          value={formData.farm}
          onChange={(value) => updateField("farm", value)}
          placeholder="Your farm or company name"
        />
        <FormField
          label="Message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={(value) => updateField("message", value)}
          placeholder="Tell us about your operation..."
        />
        <Button variant="hero" size="lg" type="submit" className="w-full">
          <Send className="w-4 h-4" />
          Send Message
        </Button>
      </motion.form>
    </div>
  );
};
