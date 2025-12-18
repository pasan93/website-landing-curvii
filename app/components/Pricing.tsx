"use client";

import { Check, Star } from "lucide-react";
import { Container } from "./Container";
import { ButtonLink } from "./ui/Button";
import { Card } from "./ui/Card";
import { FadeIn } from "./ui/FadeIn";
import { PricingDecorations } from "./ui/WavyDecorations";

const included = [
  "One-click Xero connection",
  "Revenue, expenses, cash flow dashboard",
  "AI weekly summaries",
  "Ask questions in plain English",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 bg-natural-white overflow-hidden"
    >
      {/* Colorful decorations */}
      <PricingDecorations />
      
      <Container className="relative z-10 py-16 lg:py-24">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-heading tracking-tight">
            Simple pricing for <span className="text-natural-sage">small teams</span>
          </h2>
          <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
            Start with a free trial, then pick the plan that fits. No long
            contracts — keep it flexible.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="h-full p-8 border-2 border-natural-sage/30 hover:border-natural-sage/50 transition-colors duration-300">
              <div className="text-sm font-semibold text-natural-sage">
                Starter
              </div>
              <div className="mt-2 text-4xl font-bold leading-heading tracking-tight">
                Free
              </div>
              <div className="mt-2 text-sm text-warm-purple/70">
                14-day trial • Cancel anytime
              </div>
              <ul className="mt-6 space-y-3 text-sm text-warm-purple/80">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-natural-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="#cta" className="w-full justify-center">
                  Start free trial
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.05}>
            <Card className="relative h-full p-8 border-2 border-highlighter-pink/30 hover:border-highlighter-pink/50 transition-colors duration-300 overflow-hidden">
              {/* Popular badge */}
              <div className="absolute -right-12 top-6 rotate-45 bg-highlighter-pink px-12 py-1 text-xs font-bold text-natural-white">
                POPULAR
              </div>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-highlighter-pink">
                <Star className="h-4 w-4 fill-highlighter-pink" />
                Pro
              </div>
              <div className="mt-2 text-4xl font-bold leading-heading tracking-tight">
                $49<span className="text-base font-semibold text-warm-purple/60">/mo</span>
              </div>
              <div className="mt-2 text-sm text-warm-purple/70">
                For growing businesses who want deeper insights
              </div>
              <ul className="mt-6 space-y-3 text-sm text-warm-purple/80">
                {included.concat([
                  "Multi-organisation support",
                  "Priority support",
                  "Export-ready insights for your accountant",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-highlighter-pink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="#cta"
                  className="w-full justify-center bg-highlighter-pink hover:bg-highlighter-pink/90"
                >
                  Get started
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
