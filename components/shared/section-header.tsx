import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center md:mb-16", className)}>
      {subtitle && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold tracking-wide",
            light ? "text-gold" : "text-gold"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        id={`${id}-heading`}
        className={cn(
          "font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
