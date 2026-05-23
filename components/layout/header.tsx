"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const sectionIds = siteConfig.nav.map((n) => n.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-card/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="ניווט ראשי"
      >
        <a
          href="#hero"
          className="font-heading text-xl font-bold text-foreground transition-colors hover:text-gold"
          aria-label={`${siteConfig.name} — חזרה לראשי`}
        >
          <span className="text-gold">הגל</span> הפיננסי
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                activeId === item.href.replace("#", "")
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.contact.mobile.replace(/-/g, "")}`}
            className="inline-flex h-7 items-center gap-1 rounded-[min(var(--radius-md),12px)] bg-gold px-2.5 text-[0.8rem] font-bold text-gold-foreground transition-colors hover:bg-gold/90 font-heading"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.mobile}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-all hover:bg-muted hover:text-foreground"
              aria-label="פתח תפריט"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
              <div className="flex flex-col gap-2">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-muted",
                      activeId === item.href.replace("#", "")
                        ? "text-gold bg-gold/5"
                        : "text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 border-t border-border pt-4">
                  <a
                    href={`tel:${siteConfig.contact.mobile.replace(/-/g, "")}`}
                    className="flex items-center gap-3 rounded-md px-4 py-3 text-base font-bold text-gold transition-colors hover:bg-gold/10"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {siteConfig.contact.mobile}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
