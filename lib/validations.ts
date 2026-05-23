import { z } from "zod";

function normalizeIsraeliPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("0")) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return value;
}

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "נא להזין שם מלא")
    .max(100, "שם ארוך מדי"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z
    .string()
    .min(9, "מספר טלפון לא תקין")
    .max(15, "מספר טלפון לא תקין")
    .transform(normalizeIsraeliPhone)
    .pipe(z.string().regex(/^0\d{2}-?\d{7}$/, "מספר טלפון ישראלי לא תקין")),
  subject: z.enum(["pension", "financial", "health", "life", "savings", "education", "review", "other"], {
    message: "נא לבחור נושא",
  }),
  message: z
    .string()
    .min(2, "נא להזין הודעה")
    .max(2000, "הודעה ארוכה מדי"),
  consent: z.literal(true, {
    message: "יש לאשר את מדיניות הפרטיות",
  }),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.input<typeof contactSchema>;
export type ContactFormOutput = z.output<typeof contactSchema>;

export const subjectLabels: Record<string, string> = {
  pension: "פנסיוני",
  financial: "פיננסי",
  health: "ביטוח בריאות",
  life: "ביטוח חיים",
  savings: "קופות גמל",
  education: "קרנות השתלמות",
  review: "בדיקת תיק ביטוח",
  other: "אחר",
};
