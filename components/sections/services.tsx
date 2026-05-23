import { servicesData } from "@/data/services";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Landmark,
  TrendingUp,
  HeartPulse,
  Shield,
  PiggyBank,
  GraduationCap,
  FileSearch,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  TrendingUp,
  HeartPulse,
  Shield,
  PiggyBank,
  GraduationCap,
  FileSearch,
};

export function Services() {
  return (
    <Section id="services" variant="muted">
      <SectionHeader
        id="services"
        title={servicesData.title}
        subtitle={servicesData.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.items.map((service, i) => {
          const Icon = iconMap[service.icon] || Landmark;
          return (
            <FadeIn key={service.title} delay={i * 0.08}>
              <a
                href={`#contact`}
                className="group block h-full"
              >
                <Card className="h-full border-border/50 bg-card transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                      <Icon
                        className="h-6 w-6 text-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="font-heading text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
