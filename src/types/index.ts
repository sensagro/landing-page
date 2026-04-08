import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}
