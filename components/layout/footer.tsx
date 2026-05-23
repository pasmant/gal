import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { complianceData } from "@/data/compliance";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a
              href="#hero"
              className="font-heading text-2xl font-bold"
              aria-label={`${siteConfig.name} — חזרה לראשי`}
            >
              <span className="text-gold">הגל</span> הפיננסי
            </a>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.subtitle}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">ניווט מהיר</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">צור קשר</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.mobile.replace(/-/g, "")}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {siteConfig.contact.mobile}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="space-y-3 text-center text-xs text-primary-foreground/50">
          <p>{complianceData.license}</p>
          <p>{complianceData.disclaimer}</p>
          <p>{complianceData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
