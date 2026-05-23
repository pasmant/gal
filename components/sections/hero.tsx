import { heroData } from "@/data/hero";
import { siteConfig } from "@/data/site";
import { CtaButton } from "@/components/shared/cta-button";
import { TrustBadges } from "@/components/shared/trust-badges";
import { FadeIn } from "@/components/shared/fade-in";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-bl from-primary via-primary to-primary/95 pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--gold-muted)_0%,_transparent_60%)]" />

      <div className="container relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold tracking-wide text-gold">
              {siteConfig.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {heroData.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {heroData.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaButton href="#contact" variant="gold" size="lg">
                {heroData.ctaPrimary}
              </CtaButton>
              <CtaButton
                href={siteConfig.contact.whatsappUrl}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="me-2 h-5 w-5" aria-hidden="true" />
                {heroData.ctaSecondary}
              </CtaButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-4 text-xs text-white/50">{heroData.microCopy}</p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-12">
              <TrustBadges
                badges={heroData.trustBadges}
                className="[&>div]:border-white/20 [&>div]:bg-white/5 [&>div]:text-white/90 [&_svg]:text-gold"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
