import { processData } from "@/data/process";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        id="process"
        title={processData.title}
        subtitle={processData.subtitle}
      />

      <div className="grid gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {processData.steps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 0.1}>
            <div className="relative text-center">
              {i < processData.steps.length - 1 && (
                <div className="absolute start-full top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-l from-transparent via-gold/30 to-gold/30 lg:block" />
              )}

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
                <span className="font-heading text-2xl font-bold text-gold">
                  {step.step}
                </span>
              </div>

              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
