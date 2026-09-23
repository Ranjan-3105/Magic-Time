import { cn } from "../lib/utils";

export function BreathingCircle({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <div
      className={cn(
        "absolute rounded-full bg-accent-rust/30 blur-[80px] -z-10 animate-breathe pointer-events-none",
        className
      )}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    />
  );
}

export function ConcentricRings({ className }: { className?: string }) {
  return (
    <svg 
      className={cn("w-12 h-12 text-accent-orange/40", className)} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Starburst({ className }: { className?: string }) {
  return (
    <svg 
      className={cn("w-8 h-8 text-white/50", className)} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M50 0 L52 40 L90 20 L60 50 L100 50 L60 55 L90 85 L52 65 L50 100 L48 65 L10 85 L40 55 L0 50 L40 50 L10 20 L48 40 Z" fill="currentColor" />
    </svg>
  );
}
