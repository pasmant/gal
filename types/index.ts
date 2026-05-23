export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  mobile: string;
  email: string;
  address: string;
  whatsappUrl: string;
  mapEmbedUrl: string;
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  subtitle: string;
  description: string;
  url: string;
  contact: ContactInfo;
  nav: NavItem[];
  social: { platform: string; url: string; label: string }[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  subject: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  location: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactLead {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  source: string;
}
