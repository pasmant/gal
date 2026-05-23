"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData, subjectLabels } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "pension",
      message: "",
      consent: undefined,
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "שגיאה בשליחת הטופס");
      }

      setFormState("success");
      toast.success("הפרטים נשלחו בהצלחה!", {
        description: "נחזור אליך תוך 24 שעות. אפשר גם לשלוח וואטסאפ.",
      });
      reset();

      setTimeout(() => setFormState("idle"), 5000);
    } catch (err) {
      setFormState("error");
      toast.error("שגיאה בשליחת הטופס", {
        description:
          err instanceof Error ? err.message : "אנא נסו שוב או צרו קשר טלפונית.",
      });
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-5"
      noValidate
    >
      {/* Honeypot — must stay in-layout; off-screen negative left breaks RTL/mobile scroll width */}
      <div
        className="pointer-events-none absolute start-0 top-0 -z-10 m-0 h-px w-px overflow-hidden border-0 p-0 opacity-0"
        aria-hidden="true"
      >
        <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName">שם מלא *</Label>
        <Input
          id="fullName"
          placeholder="השם שלך"
          {...register("fullName")}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={cn(errors.fullName && "border-destructive")}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="text-xs text-destructive">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">טלפון *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="050-000-0000"
            dir="ltr"
            className={cn("text-start", errors.phone && "border-destructive")}
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">אימייל *</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            dir="ltr"
            className={cn("text-start", errors.email && "border-destructive")}
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">נושא הפנייה *</Label>
        <Select
          defaultValue="pension"
          onValueChange={(val) =>
            setValue("subject", val as ContactFormData["subject"])
          }
        >
          <SelectTrigger id="subject" className={cn(errors.subject && "border-destructive")}>
            <SelectValue placeholder="בחרו נושא" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(subjectLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.subject && (
          <p role="alert" className="text-xs text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">הודעה *</Label>
        <Textarea
          id="message"
          placeholder="איך נוכל לעזור לך?"
          rows={4}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(errors.message && "border-destructive")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          {...register("consent", { setValueAs: (v) => v === true || v === "true" ? true : undefined })}
          className="mt-1 h-4 w-4 rounded border-border accent-gold"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <Label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground">
          אני מסכים/ה לקבלת חזרה מגל לייבוביץ׳ בנוגע לפנייתי.
          המידע ישמש אך ורק ליצירת קשר בנושא הפנייה.
        </Label>
      </div>
      {errors.consent && (
        <p id="consent-error" role="alert" className="text-xs text-destructive">
          {errors.consent.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={formState === "submitting" || formState === "success"}
        className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-heading font-bold h-12 text-base"
      >
        {formState === "submitting" && (
          <Loader2 className="me-2 h-5 w-5 animate-spin" aria-hidden="true" />
        )}
        {formState === "success" && (
          <CheckCircle2 className="me-2 h-5 w-5" aria-hidden="true" />
        )}
        {formState === "error" && (
          <AlertCircle className="me-2 h-5 w-5" aria-hidden="true" />
        )}
        {formState === "submitting"
          ? "שולח..."
          : formState === "success"
          ? "נשלח בהצלחה!"
          : formState === "error"
          ? "שגיאה — נסו שוב"
          : "שליחה"}
      </Button>
    </form>
  );
}
