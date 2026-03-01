import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why AquaSat", href: "#why" },
];

export const features: Feature[] = [
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
];

export const steps: Step[] = [
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
];

export const reasons: Reason[] = [
  {
    icon: Wifi,
    title: "No Infrastructure Needed",
    description:
      "Unlike LoRa or cellular solutions, AquaSat uses satellite connectivity. No towers, no repeaters — just install and go, even in the most remote paddocks.",
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
];
