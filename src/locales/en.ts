import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const en = {
  nav: {
    features: "Features",
    howItWorks: "How It Works",
    whyAquaSat: "Why Sensagro",
    contactUs: "Contact Us",
  },
  hero: {
    label: "Satellite-Powered Farm Monitoring",
    title: "Never Let Your",
    titleHighlight: "Cattle",
    titleSuffix: "Run Out of Water",
    description:
      "Smart satellite sensors that monitor water trough levels in real time — no towers, no wires, no limits. Built for the Argentine campo.",
    ctaDemo: "Get in Touch",
    ctaHowItWorks: "How It Works",
    imageAlt: "Smart water sensor on Argentine farmland at sunset",
  },
  features: {
    label: "Why Choose Us",
    title: "Technology That",
    titleHighlight: "Just Works",
    description:
      "Designed for the harsh realities of Argentine farmland. No infrastructure, no complexity — just reliable data from every trough.",
    items: [
      {
        icon: Satellite,
        title: "Satellite Communication",
        description:
          "No LoRa, no WiFi, no cellular towers needed. Direct satellite uplink works anywhere on your farm, no matter how remote.",
      },
      {
        icon: Droplets,
        title: "Real-Time Water Level",
        description:
          "Know exactly when troughs need refilling. Get instant alerts before your cattle run out of water.",
      },
      {
        icon: Signal,
        title: "100% Coverage",
        description:
          "Works across the entire Argentine pampa. No dead zones, no infrastructure required — just sky.",
      },
      {
        icon: BatteryCharging,
        title: "Solar Powered",
        description:
          "Self-sustaining energy with built-in solar cells. Install once, monitor forever with zero maintenance.",
      },
    ] as Feature[],
  },
  howItWorks: {
    label: "How It Works",
    title: "Three Steps to",
    titleHighlight: "Full Visibility",
    imageAlt: "Satellite view of farmland",
    steps: [
      {
        number: "01",
        title: "Install",
        description:
          "Mount the sensor on any water trough in minutes. No tools, no wiring, no technician needed.",
      },
      {
        number: "02",
        title: "Connect",
        description:
          "The sensor automatically connects to satellites overhead. No cellular coverage or WiFi required.",
      },
      {
        number: "03",
        title: "Monitor",
        description:
          "View real-time water levels from your phone or computer. Get alerts before troughs run empty.",
      },
    ] as Step[],
  },
  whyAquaSat: {
    label: "Why Sensagro",
    title: "The Smartest Way to",
    titleHighlight: "Monitor Water",
    description:
      "Traditional solutions fail in remote areas. Sensagro was built specifically for the challenges of large-scale Argentine farming.",
    reasons: [
      {
        icon: Wifi,
        title: "No Infrastructure Needed",
        description:
          "Unlike LoRa or cellular solutions, Sensagro uses satellite connectivity. No towers, no repeaters — just install and go, even in the most remote paddocks.",
      },
      {
        icon: Zap,
        title: "100% Solar Powered",
        description:
          "Our sensors run entirely on solar energy with battery backup, meaning zero ongoing energy costs and maintenance-free operation year-round.",
      },
      {
        icon: Shield,
        title: "Built for the Campo",
        description:
          "IP68-rated, UV-resistant, and cattle-proof. Designed from day one for the harsh conditions of Argentine ranches — dust, heat, rain, and livestock.",
      },
      {
        icon: TrendingUp,
        title: "Prevent Losses Before They Happen",
        description:
          "Real-time water level alerts let you act before troughs run dry. Protect your herd, reduce labour trips, and gain peace of mind from anywhere.",
      },
    ] as Reason[],
  },
  contact: {
    label: "Get Started",
    title: "Ready to",
    titleHighlight: "Modernize",
    titleSuffix: "Your Farm?",
    description:
      "Whether you manage 50 or 50,000 head of cattle, we'd love to hear from you. Get in touch to learn more or express your interest.",
    benefits: [
      "Installation support included",
      "No long-term contracts required",
    ],
    form: {
      name: "Name",
      email: "Email",
      farm: "Farm / Company",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@farm.com",
      farmPlaceholder: "Your farm or company name",
      messagePlaceholder: "Tell us about your operation...",
      submit: "Send Message",
      success: "Message sent! We'll get back to you soon.",
      error: "Oops, seems our system isn't working right now. Please try again later.",
    },
  },
  footer: {
    tagline: "Satellite water monitoring for modern farms.",
    copyright: "Buenos Aires, Argentina.",
    links: {
      features: "Features",
      howItWorks: "How It Works",
      contact: "Contact",
    },
  },
  meta: {
    title: "Sensagro",
    description: "Satellite-powered water level sensors for cattle farms. Monitor troughs in real time with no infrastructure needed.",
    ogTitle: "Sensagro",
    ogDescription: "Smart satellite sensors that monitor water trough levels in real time for Argentine farms.",
  },
} as const;
