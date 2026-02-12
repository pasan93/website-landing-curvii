"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "./cn";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
};

export function GlowButton({
  href,
  children,
  className,
  delay = 0,
  glowColor = "var(--highlighter-orange)",
}: GlowButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      {/* Glow effect - static and subtle */}
      <div
        className="absolute -inset-1 rounded-full opacity-40 blur-md"
        style={{ backgroundColor: glowColor }}
      />
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full bg-highlighter-orange px-8 py-4 text-base font-semibold text-natural-white transition-all hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlighter-orange/70 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function SecondaryAnimatedButton({
  href,
  children,
  className,
  delay = 0,
}: Omit<GlowButtonProps, "glowColor">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full border-2 border-natural-white/30 bg-natural-white/10 px-8 py-4 text-base font-semibold text-natural-white backdrop-blur-sm transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:border-natural-white/50 hover:bg-natural-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-natural-white/50 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
