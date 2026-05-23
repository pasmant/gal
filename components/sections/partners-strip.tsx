import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Building2 } from "lucide-react";

const partners = [
  "מגדל",
  "הראל",
  "כלל ביטוח",
  "מנורה מבטחים",
  "הפניקס",
  "אלטשולר שחם",
  "מיטב",
  "אנליסט",
];

export function PartnersStrip() {
  return (
    <Section id="partners" className="py-12 md:py-16">
      <FadeIn>
        <p className="mb-8 text-center text-sm font-semibold tracking-wide text-gold">
          עובדים מול כל החברות המובילות בישראל — ללא אינטרס לגוף ספציפי
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
