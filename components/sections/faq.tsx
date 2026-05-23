import { faqData } from "@/data/faq";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Section id="faq" variant="muted">
      <SectionHeader
        id="faq"
        title={faqData.title}
        subtitle={faqData.subtitle}
      />

      <FadeIn>
        <div className="mx-auto max-w-3xl">
          <Accordion className="space-y-4">
            {faqData.items.map((item, i) => (
              <AccordionItem
                key={i}
                className="rounded-xl border border-border/50 bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-start font-heading text-base font-bold hover:text-gold hover:no-underline md:text-lg [&[aria-expanded=true]]:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </Section>
  );
}
