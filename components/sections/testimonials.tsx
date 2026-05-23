"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-muted/50 py-20 md:py-28"
      aria-roledescription="carousel"
      aria-label="המלצות לקוחות"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="testimonials"
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
        />

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonialsData.items.map((item, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`המלצה ${i + 1} מתוך ${testimonialsData.items.length}`}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
                    <Quote className="mb-4 h-8 w-8 text-gold/40" aria-hidden="true" />
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-heading font-bold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={scrollNext}
              aria-label="המלצה הבאה"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex gap-2" role="tablist" aria-label="בחירת המלצה">
              {testimonialsData.items.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    selectedIndex === i
                      ? "w-6 bg-gold"
                      : "w-2 bg-muted-foreground/30"
                  )}
                  onClick={() => emblaApi?.scrollTo(i)}
                  role="tab"
                  aria-selected={selectedIndex === i}
                  aria-label={`המלצה ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={scrollPrev}
              aria-label="המלצה קודמת"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
