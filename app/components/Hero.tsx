"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Container } from "./Container";
import { HeroDecorations } from "./ui/WavyDecorations";
import { AnimatedText, AnimatedParagraph } from "./ui/AnimatedText";
import { AnimatedBadge } from "./ui/AnimatedBadge";
import { GlowButton, SecondaryAnimatedButton } from "./ui/GlowButton";
import { useTheme } from "./ThemeProvider";

// Xero logo component for replacement
const XeroLogo = () => (
  <Image
    src="/images/Xero Wordmark__Blue.svg"
    alt="Xero"
    width={140}
    height={42}
    className="inline-block h-6 w-auto sm:h-8 lg:h-10"
  />
);

export function Hero() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative overflow-hidden bg-natural-white">
      {/* Colorful wavy decorations */}
      <HeroDecorations />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-natural-white to-natural-white" />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Curvii Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={resolvedTheme === "dark" ? "/images/logo-white.svg" : "/images/logo.svg"}
              alt="Curvii"
              width={200}
              height={100}
              className="mx-auto"
            />
          </motion.div>

          {/* Animated badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedBadge tone="pink" delay={0.2} pulse>
              <Sparkles className="mr-1.5 h-3 w-3" />
              AI smart dashboard
            </AnimatedBadge>
            <AnimatedBadge tone="blue" delay={0.35}>
              <Zap className="mr-1.5 h-3 w-3" />
              Built for NZ businesses
            </AnimatedBadge>
          </motion.div>

          {/* Animated headline */}
          <div className="mt-8">
            <AnimatedText
              text="Your Xero data, finally making sense."
              className="text-4xl font-bold leading-heading tracking-tight text-warm-purple sm:text-5xl lg:text-6xl"
              highlightWords={["finally"]}
              highlightClassName="animate-gradient"
              wordReplacements={{
                "Xero": <XeroLogo />,
              }}
            />
          </div>

          {/* Animated paragraph */}
          <div className="mt-6">
            <AnimatedParagraph
              text="Curvii connects to Xero and turns your numbers into clear insights. Ask questions, get weekly summaries, and stay on top of cash flow — no spreadsheets required."
              className="mx-auto max-w-2xl text-lg leading-relaxed tracking-tight text-warm-purple/80"
              delay={0.8}
            />
          </div>

          {/* Animated buttons */}
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <GlowButton href="#cta" delay={1.1}>
              Try Curvii Free <ArrowRight className="h-5 w-5" />
            </GlowButton>
            <SecondaryAnimatedButton href="#features" delay={1.2}>
              See features
            </SecondaryAnimatedButton>
          </motion.div>

          {/* Trust indicator */}
          <motion.div 
            className="mt-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 rounded-full border border-warm-purple/10 bg-warm-purple/5 px-4 py-2">
              <Image
                src="/images/xero-badge.svg"
                alt="Xero Connected"
                width={88}
                height={24}
              />
              <span className="text-sm text-warm-purple/70">
                One-click connection • Read-only access
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard preview card with colorful border */}
        <motion.div 
          className="mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-highlighter-pink via-lavender-blue to-natural-sage p-1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="rounded-[22px] bg-warm-purple p-8 text-center text-natural-white">
              <div className="text-lg font-semibold mb-2">Dashboard Preview</div>
              <div className="text-sm text-natural-white/70">Coming Soon</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
