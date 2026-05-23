import type { ServiceItem } from "@/types";

export const servicesData: {
  title: string;
  subtitle: string;
  items: ServiceItem[];
} = {
  title: "השירותים שלנו",
  subtitle: "פתרונות 360° — הכל במקום אחד",
  items: [
    {
      icon: "Landmark",
      title: "ליווי פנסיוני",
      description:
        "תכנון חסכון לטווח ארוך בכל שלב בחיים ובכל נקודת זמן. מעבר בין מקומות עבודה, התאמת מסלולים ואופטימיזציה של דמי ניהול.",
      subject: "pension",
    },
    {
      icon: "TrendingUp",
      title: "תכנון פיננסי",
      description:
        "פתרונות פיננסיים מגוונים לכל טווח השקעה ולכל מטרה. בניית אסטרטגיה לטווח קצר וארוך בהתאמה אישית.",
      subject: "financial",
    },
    {
      icon: "HeartPulse",
      title: "ביטוחי בריאות",
      description:
        "הגנה רפואית מותאמת למשפחה. סקירת פוליסות קיימות, התאמת כיסויים והרחבות לפי הצרכים שלכם.",
      subject: "health",
    },
    {
      icon: "Shield",
      title: "ביטוח חיים",
      description:
        "הגנה כלכלית למשפחה ליום סגריר. ביטוח חיים, אובדן כושר עבודה ומוצרי הגנה נוספים.",
      subject: "life",
    },
    {
      icon: "PiggyBank",
      title: "קופות גמל",
      description:
        "ניהול חסכון ארוך טווח, הלוואות על חשבון הקופות, והתחשבנות על כספי פיצויים.",
      subject: "savings",
    },
    {
      icon: "GraduationCap",
      title: "קרנות השתלמות",
      description:
        "מיצוי הטבות מס, בחירת מסלולי השקעה מותאמים, ומעקב שוטף אחרי הביצועים.",
      subject: "education",
    },
    {
      icon: "FileSearch",
      title: "התאמת תיק ביטוח",
      description:
        "סקירה מקיפה ואופטימיזציה של כל ההגנות הביטוחיות שלכם. חוות דעת שנייה על התיק הקיים.",
      subject: "review",
    },
  ],
};
