import React, { useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { motion, type HTMLMotionProps, useInView } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
}

export function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-body font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-accent-orange text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-bg-primary"
  };

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(baseClasses, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

interface SectionHeadingProps extends Omit<HTMLMotionProps<"div">, "title"> {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, align = "left", className, ...props }: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      <span className="font-body text-sm md:text-base font-light tracking-[0.15em] text-accent-orange uppercase">
        {eyebrow}
      </span>
      <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}

export function AnimatedNumber({ value, suffix = "", duration = 1.2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * value);
        
        if (ref.current) {
          ref.current.textContent = currentCount.toLocaleString() + suffix;
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else if (ref.current) {
           ref.current.textContent = value.toLocaleString() + suffix;
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, suffix, duration]);

  return <span ref={ref} className="font-number">0{suffix}</span>;
}
