import type { ProcessStep } from "@/types";

export const processData: {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
} = {
  title: "איך זה עובד",
  subtitle: "התהליך שלנו — פשוט ויעיל",
  steps: [
    {
      step: 1,
      title: "שיחת היכרות",
      description:
        "שיחה קצרה וללא התחייבות להבין את הצרכים שלכם ולבחון כיצד נוכל לעזור.",
    },
    {
      step: 2,
      title: "בדיקת מצב קיים",
      description:
        "סקירה מקיפה של כל הביטוחים, החסכונות והפנסיה הקיימים שלכם.",
    },
    {
      step: 3,
      title: "התאמת פתרון",
      description:
        "בניית תוכנית אישית ומותאמת עם המלצות ברורות ושקופות.",
    },
    {
      step: 4,
      title: "ליווי שוטף",
      description:
        "מעקב רציף, עדכונים שוטפים והתאמות בהתאם לשינויים בחיים.",
    },
  ],
};
