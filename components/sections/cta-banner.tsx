import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { FadeIn } from "@/components/shared/fade-in";

export function CtaBanner() {
  return (
    <Section id="cta-banner" variant="dark" className="py-16 md:py-20">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            מוכנים לבדוק שהתיק שלכם באמת מתאים לכם?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            שיחת היכרות ראשונה — ללא עלות וללא התחייבות
          </p>
          <div className="mt-8">
            <CtaButton href="#contact" variant="gold" size="lg">
              לתיאום שיחה חינם
            </CtaButton>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
