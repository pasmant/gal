"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-md md:hidden">
      <div className="flex items-stretch divide-x divide-border rtl:divide-x-reverse">
        <a
          href={`tel:${siteConfig.contact.mobile.replace(/-/g, "")}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground transition-colors active:bg-muted"
          aria-label="התקשרו אלינו"
        >
          <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
          <span>שיחה</span>
        </a>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground transition-colors active:bg-muted"
          aria-label="שלחו הודעה בוואטסאפ"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
          <span>וואטסאפ</span>
        </a>
        <a
          href="#contact"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground transition-colors active:bg-muted"
          aria-label="מלאו טופס יצירת קשר"
        >
          <FileText className="h-5 w-5 text-gold" aria-hidden="true" />
          <span>טופס</span>
        </a>
      </div>
    </div>
  );
}
