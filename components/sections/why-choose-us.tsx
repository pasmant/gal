import { whyChooseData } from "@/data/why-choose";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Eye, UserCheck, Award, Clock, Settings } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  UserCheck,
  Award,
  Clock,
  Settings,
};

export function WhyChooseUs() {
  return (
    <Section id="why">
      <SectionHeader
        id="why"
        title={whyChooseData.title}
        subtitle={whyChooseData.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseData.items.map((item, i) => {
          const Icon = iconMap[item.icon] || Award;
          return (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-card hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
