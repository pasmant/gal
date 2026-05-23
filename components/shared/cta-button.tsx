import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
}

export function CtaButton({
  children,
  href,
  onClick,
  variant = "gold",
  size = "default",
  className,
}: CtaButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg font-heading font-bold transition-all duration-300 select-none",
    variant === "gold" &&
      "bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    variant === "outline" &&
      "border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground",
    variant === "ghost" &&
      "text-gold hover:bg-gold/10",
    size === "lg" && "h-12 px-8 text-base md:h-14 md:px-10 md:text-lg",
    size === "default" && "h-10 px-6 text-sm",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
}
