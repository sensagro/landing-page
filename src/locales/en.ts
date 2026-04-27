import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const en = {
  nav: {
    features: "Features",
    howItWorks: "How It Works",
    whyAquaSat: "Why SensAgro",
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
    comingSoon: "Coming soon",
    appStore: "App Store",
    playStore: "Google Play",
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
    label: "Why SensAgro",
    title: "The Smartest Way to",
    titleHighlight: "Monitor Water",
    description:
      "Traditional solutions fail in remote areas. SensAgro was built specifically for the challenges of large-scale Argentine farming.",
    reasons: [
      {
        icon: Wifi,
        title: "No Infrastructure Needed",
        description:
          "Unlike LoRa or cellular solutions, SensAgro uses satellite connectivity. No towers, no repeaters — just install and go, even in the most remote paddocks.",
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
      company: "Company",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@farm.com",
      companyPlaceholder: "Your company or organization",
      messagePlaceholder: "Tell us about your operation...",
      submit: "Send Message",
      success: "Message sent! We'll get back to you soon.",
      error: "Oops, seems our system isn't working right now. Please try again later.",
    },
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        title: "Information We Collect",
        content:
          "We collect information you provide when you contact us (name, email, company, message), account data required to use SensAgro services, and technical data from our apps and websites (such as device type and usage) to operate and improve the product.",
      },
      {
        title: "How We Use Your Data",
        content:
          "We use your data to provide water monitoring and alerts, communicate with you, maintain security, comply with legal obligations, and improve our services. We do not sell your personal information.",
      },
      {
        title: "Push Notifications",
        content:
          "If you enable notifications in the mobile app, we may send alerts about sensor status (for example low water). You can disable notifications at any time in your device or app settings. Push delivery uses third-party providers (e.g. Expo) subject to their privacy policies.",
      },
      {
        title: "Contact",
        content:
          "For privacy-related requests, contact us through the form on this website or at the email address provided in your SensAgro correspondence. This policy may be updated; the date at the top reflects the latest revision.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        title: "Use of the Service",
        content:
          "SensAgro provides satellite-linked sensor monitoring tools for agricultural use. You agree to use the service only for lawful purposes and in accordance with these terms and any applicable documentation we provide.",
      },
      {
        title: "Account Registration",
        content:
          "You are responsible for maintaining the confidentiality of your account credentials and for activity under your account. Notify us promptly of any unauthorized use.",
      },
      {
        title: "Intellectual Property",
        content:
          "SensAgro branding, software, and content are protected by applicable intellectual property laws. You may not copy, reverse engineer, or misuse our services except as expressly permitted.",
      },
      {
        title: "Limitation of Liability",
        content:
          "The service is provided on an \"as is\" basis. To the maximum extent permitted by law, SensAgro is not liable for indirect or consequential damages arising from use of the service. Monitoring is a support tool and does not replace on-site verification where required.",
      },
      {
        title: "Contact",
        content:
          "Questions about these terms can be directed through our contact channels. Continued use of the service after changes constitutes acceptance of the updated terms where permitted by law.",
      },
    ],
  },
  footer: {
    tagline: "Satellite water monitoring for modern farms.",
    copyright: "Buenos Aires, Argentina.",
    links: {
      features: "Features",
      howItWorks: "How It Works",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  meta: {
    title: "SensAgro",
    description: "Satellite-powered water level sensors for cattle farms. Monitor troughs in real time with no infrastructure needed.",
    ogTitle: "SensAgro",
    ogDescription: "Smart satellite sensors that monitor water trough levels in real time for Argentine farms.",
  },
} as const;
