import { siteConfig } from "@/data/site";
import { faqData } from "@/data/faq";
import { testimonialsData } from "@/data/testimonials";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.mobile,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "שחם 36",
      addressLocality: "פתח תקווה",
      addressCountry: "IL",
    },
    founder: {
      "@type": "Person",
      name: "גל לייבוביץ׳",
      jobTitle: "סוכן ביטוח ופנסיה",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    priceRange: "חינם — ללא עלות ללקוח",
    openingHours: "Su-Th 08:00-18:00",
    sameAs: siteConfig.social.map((s) => s.url),
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "גל לייבוביץ׳",
    jobTitle: "סוכן ביטוח ופנסיה",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: siteConfig.url,
    telephone: siteConfig.contact.mobile,
    email: siteConfig.contact.email,
  };
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateReviewJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    review: testimonialsData.items.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewBody: item.quote,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonialsData.items.length),
      bestRating: "5",
    },
  };
}
