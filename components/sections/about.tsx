import { aboutData } from "@/data/about";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Users, Award, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Award,
  ShieldCheck,
};

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        id="about"
        title={aboutData.title}
        subtitle={aboutData.subtitle}
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="space-y-6">
            {aboutData.bio.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {aboutData.trustSignals.map((signal) => {
                const Icon = iconMap[signal.icon] || ShieldCheck;
                return (
                  <div
                    key={signal.label}
                    className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {signal.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <blockquote className="relative rounded-xl border-s-4 border-gold bg-muted/50 p-6">
              <p className="text-base italic leading-relaxed text-muted-foreground">
                &ldquo;{aboutData.quote.text}&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-semibold not-italic text-foreground">
                — {aboutData.quote.author}
              </cite>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
