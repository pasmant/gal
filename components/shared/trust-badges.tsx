import { ShieldCheck, Building2, Heart, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [ShieldCheck, Building2, Heart, UserCheck];

interface TrustBadgesProps {
  badges: string[];
  className?: string;
}

export function TrustBadges({ badges, className }: TrustBadgesProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 md:gap-6",
        className
      )}
    >
      {badges.map((badge, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={badge}
            className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold-muted px-4 py-2 text-sm font-medium text-foreground"
          >
            <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
            <span>{badge}</span>
          </div>
        );
      })}
    </div>
  );
}
