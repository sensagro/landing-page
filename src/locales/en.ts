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
      invalidEmail: "Please enter a valid email address.",
      messageTooLong: "Message must be under 2000 characters.",
      invalidMessage: "Please include a message, not just a link.",
    },
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 28, 2026",
    sections: [
      {
        title: "Information we collect",
        content:
          "We collect the information you provide when you contact us or create an account, including name, email, farm or company name, and messages. When the service is active, we also process sensor identifiers, assigned user accounts, water-level readings, battery and temperature telemetry, approximate sensor location, push notification tokens, and operational logs needed to run SensAgro.",
      },
      {
        title: "How we use your data",
        content:
          "We use this data to operate satellite water monitoring, show sensor status in the app and admin portal, send low-water or signal alerts, provide support, protect accounts, troubleshoot incidents, and improve the product. We do not sell personal information.",
      },
      {
        title: "Legal basis and rights",
        content:
          "For Argentine users, this policy is intended to align with Ley 25.326 de Protección de Datos Personales. You may request access, correction, update, or deletion of your personal data through the website contact form or your usual SensAgro support contact.",
      },
      {
        title: "Service providers and retention",
        content:
          "SensAgro uses infrastructure providers such as Firebase, Expo, Myriota, hosting providers, and database services to deliver the product. We keep operational data only as long as needed for service delivery, legal obligations, security, support, and pilot evaluation, unless a longer retention period is required by law.",
      },
      {
        title: "Contact and updates",
        content:
          "For privacy-related requests, contact us through the form on this website or through the support email used in your SensAgro correspondence. This pilot-grade policy may be updated as the product and legal review mature; the date above reflects the latest revision.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: April 28, 2026",
    sections: [
      {
        title: "Service description",
        content:
          "SensAgro provides satellite-linked water trough monitoring tools for agricultural use, including mobile access for farmers, internal administration tools, sensor data ingestion, and alert delivery. During pilots, features, pricing, hardware configuration, and availability may change as we validate the service.",
      },
      {
        title: "Accounts and acceptable use",
        content:
          "You are responsible for keeping your account credentials secure and for using the service only for lawful agricultural operations. Do not attempt to interfere with the platform, access another user's data, tamper with devices, or use the service in a way that could harm SensAgro, its infrastructure, or other users.",
      },
      {
        title: "Pilot service, suspension, and availability",
        content:
          "SensAgro may suspend or limit access to accounts, sensors, or features when needed for security, non-payment, misuse, offboarding, or pilot operations. Satellite connectivity, device condition, weather, installation quality, and third-party providers can affect availability, so the service should be treated as a monitoring aid rather than the only source of truth for animal welfare or water management.",
      },
      {
        title: "Intellectual property and data",
        content:
          "SensAgro software, branding, documentation, and website content remain the property of SensAgro or its licensors. Farm and sensor data remains associated with the customer account; SensAgro may process it to operate, support, secure, and improve the service as described in the Privacy Policy.",
      },
      {
        title: "No warranty, governing law, and updates",
        content:
          "The service is provided on an \"as is\" and \"as available\" basis during the pilot phase. To the maximum extent permitted by law, SensAgro is not liable for indirect or consequential damages arising from use of the service. These terms are governed by the laws of Argentina. We may update them as the product matures; continued use after changes constitutes acceptance where permitted by law.",
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
