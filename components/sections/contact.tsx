import { siteConfig } from "@/data/site";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        id="contact"
        title="צור קשר"
        subtitle="נשמח לשמוע ממך"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn direction="right">
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
              השאירו פרטים ונחזור אליכם תוך 24 שעות
            </h3>
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div className="space-y-6">
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.contact.mobile.replace(/-/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">נייד</p>
                  <p className="font-heading font-bold text-foreground">
                    {siteConfig.contact.mobile}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/-/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">משרד</p>
                  <p className="font-heading font-bold text-foreground">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:border-[#25D366]/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">וואטסאפ</p>
                  <p className="font-heading font-bold text-foreground">
                    שלחו הודעה
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">אימייל</p>
                  <p className="font-heading font-bold text-foreground">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">כתובת</p>
                  <p className="font-heading font-bold text-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת המשרד — שחם 36, פתח תקווה"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
