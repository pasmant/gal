# הגל הפיננסי — אתר תדמית

אתר תדמית premium עבור **גל לייבוביץ׳ — סוכן ביטוח ופנסיה**. בנוי עם Next.js, RTL מלא, ממוקד המרות.

## Stack

- **Next.js 16** (App Router, Server Components)
- **React 19** + TypeScript
- **Tailwind CSS v4** + shadcn/ui
- **Framer Motion** — אנימציות scroll reveal
- **Embla Carousel** — המלצות לקוחות
- **react-hook-form + Zod** — טפסים עם ולידציה
- **next-themes** — dark/light mode

## התחלה מהירה

```bash
npm install
npm run dev
```

הפרויקט ירוץ ב-[http://localhost:3000](http://localhost:3000).

## משתני סביבה

| משתנה | תיאור | נדרש |
|-------|--------|------|
| `CRM_WEBHOOK_URL` | URL ל-webhook לקבלת לידים (Zapier, Make, וכו׳) | לא |
| `NEXT_PUBLIC_SITE_URL` | כתובת האתר ל-SEO | לא (ברירת מחדל: galfin.co.il) |

העתיקו `.env.example` ל-`.env.local` ומלאו את הערכים.

## עדכון תוכן

כל התוכן נמצא בתיקיית `data/`:

- `data/site.ts` — פרטי קשר, ניווט, מטא
- `data/hero.ts` — כותרות ו-CTA
- `data/about.ts` — אודות וציטוטים
- `data/services.ts` — רשימת שירותים
- `data/testimonials.ts` — המלצות לקוחות
- `data/faq.ts` — שאלות ותשובות
- `data/process.ts` — שלבי התהליך
- `data/compliance.ts` — טקסטים רגולטוריים

## חיבור CRM

הוסיפו `CRM_WEBHOOK_URL` ב-`.env.local`. הטופס ישלח POST request עם:

```json
{
  "source": "website",
  "fullName": "...",
  "phone": "050-684-5555",
  "email": "...",
  "subject": "pension",
  "message": "...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## החלפת תמונות

החליפו את תמונות ה-placeholder ב-`public/images/` בתמונות אמיתיות.

## דיפלוי ל-Vercel

```bash
npm run build   # ודאו שה-build עובר
```

1. חברו את הריפו ל-Vercel
2. הוסיפו env vars
3. דיפלוי אוטומטי בכל push

## רישיון

פרויקט פרטי — כל הזכויות שמורות.
