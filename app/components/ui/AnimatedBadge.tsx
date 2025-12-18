"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

type AnimatedBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "pink" | "sage" | "blue" | "grey" | "orange";
  delay?: number;
  pulse?: boolean;
};

const toneClasses: Record<NonNullable<AnimatedBadgeProps["tone"]>, string> = {
  pink: "bg-highlighter-pink/20 text-highlighter-pink border-highlighter-pink/40",
  sage: "bg-natural-sage/20 text-natural-sage border-natural-sage/40",
  blue: "bg-lavender-blue/20 text-lavender-blue border-lavender-blue/40",
  grey: "bg-warm-grey/35 text-warm-purple border-warm-grey/70",
  orange: "bg-highlighter-orange/20 text-highlighter-orange border-highlighter-orange/40",
};

export function AnimatedBadge({
  className,
  tone = "grey",
  delay = 0,
  pulse = false,
  children,
  ...props
}: AnimatedBadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold tracking-tight backdrop-blur-sm",
        toneClasses[tone],
        pulse && "animate-pulse-soft",
        className
      )}
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
}
