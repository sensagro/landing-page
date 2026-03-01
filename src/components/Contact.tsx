import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    farm: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", farm: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
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
              Ready to{" "}
              <span className="text-gradient">Modernize</span> Your Farm?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you manage 50 or 50,000 head of cattle, our satellite sensors scale with your operation. Get in touch for a demo or pricing.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Free pilot program for early adopters
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Installation support included
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                No long-term contracts required
              </p>
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
              <div>
                <label className="text-sm text-muted-foreground font-medium mb-1.5 block">
                  Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground font-medium mb-1.5 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@farm.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-medium mb-1.5 block">
                Farm / Company
              </label>
              <Input
                value={formData.farm}
                onChange={(e) => setFormData({ ...formData, farm: e.target.value })}
                placeholder="Your farm or company name"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-medium mb-1.5 block">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your operation..."
                rows={4}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
