import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "dark";
}

export function Section({
  id,
  children,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        variant === "muted" && "bg-muted/50",
        variant === "dark" &&
          "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
