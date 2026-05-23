import type { WhyChooseItem } from "@/types";

export const whyChooseData: {
  title: string;
  subtitle: string;
  items: WhyChooseItem[];
} = {
  title: "למה לבחור בנו",
  subtitle: "מה מייחד אותנו",
  items: [
    {
      icon: "Eye",
      title: "שקיפות מלאה",
      description:
        "אנחנו פועלים בשקיפות מלאה — כל המלצה מנומקת, כל עלות מוצגת מראש, וכל החלטה נעשית יחד.",
    },
    {
      icon: "UserCheck",
      title: "ליווי אישי",
      description:
        "מול גורם אחד מקצועי ומנוסה, ולא מול נציגים מתחלפים בחברות שונות. יחס אישי שיוצר אמינות.",
    },
    {
      icon: "Award",
      title: "מקצועיות",
      description:
        "ניסיון שנים בבתי ההשקעות המובילים בישראל, עבודה עם מאות לקוחות מכל סוגי האוכלוסייה.",
    },
    {
      icon: "Clock",
      title: "זמינות גבוהה",
      description:
        "תמיד כאן בשבילכם — בטלפון, בוואטסאפ, או בפגישה פנים מול פנים. זמינים ויוזמים קשר.",
    },
    {
      icon: "Settings",
      title: "פתרונות מותאמים",
      description:
        "כל תוכנית נבנית אישית לפי הצרכים, המטרות והסטטוס המשפחתי שלכם — ללא פתרונות גנריים.",
    },
  ],
};
