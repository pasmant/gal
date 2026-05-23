import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "הגל הפיננסי",
  nameEn: "HaGal Financial",
  subtitle: "גל לייבוביץ׳ — ייעוץ ביטוח, פנסיה ותכנון פיננסי",
  description:
    "הגל הפיננסי — גל לייבוביץ׳ | ליווי אישי בביטוח, פנסיה ותכנון פיננסי. סוכנות פרטית ובלתי תלויה, עובדים מול כל החברות המובילות בישראל. ללא עלות ללקוח.",
  url: "https://galfin.co.il",
  contact: {
    phone: "03-524-1119",
    mobile: "050-684-5555",
    email: "Leibogal@gmail.com",
    address: "שחם 36, פתח תקווה",
    whatsappUrl:
      "https://wa.me/972506845555?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%92%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%99%D7%97%D7%AA%20%D7%99%D7%99%D7%A2%D7%95%D7%A5",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d34.8879!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z16nXl9eXIDM2LCDXpNeq15cg16rXp9eV15Q!5e0!3m2!1siw!2sil!4v1",
  },
  nav: [
    { label: "ראשי", href: "#hero" },
    { label: "אודות", href: "#about" },
    { label: "שירותים", href: "#services" },
    { label: "למה אנחנו", href: "#why" },
    { label: "המלצות", href: "#testimonials" },
    { label: "תהליך", href: "#process" },
    { label: "שאלות", href: "#faq" },
    { label: "צור קשר", href: "#contact" },
  ],
  social: [
    {
      platform: "facebook",
      url: "https://facebook.com/galfin",
      label: "עקבו אחרינו בפייסבוק",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/gal-leibowitz",
      label: "התחברו בלינקדאין",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/galfin",
      label: "עקבו אחרינו באינסטגרם",
    },
  ],
};
