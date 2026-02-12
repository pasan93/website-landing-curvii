"use client";

import { Check } from "lucide-react";
import { Container } from "./Container";
import { ButtonLink } from "./ui/Button";
import { Card } from "./ui/Card";
import { FadeIn } from "./ui/FadeIn";
import { PricingDecorations } from "./ui/WavyDecorations";

const included = [
  "One-click Xero connection",
  "Revenue, expenses, cash flow, invoices",
  "Clients & suppliers",
  "AI summaries & plain-English answers",
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
        <FadeIn className="max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-bold leading-heading tracking-tight">
            Curvii pricing
          </h2>
          <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
            Simple pricing for small teams
          </p>
        </FadeIn>

        <div className="mt-10 max-w-md mx-auto">
          <FadeIn>
            <Card className="h-full p-8 border-2 border-natural-sage/30 hover:border-natural-sage/50 transition-colors duration-300 text-center">
              <div className="text-4xl font-bold leading-heading tracking-tight">
                $29<span className="text-base font-semibold text-warm-purple/60"> / month per organisation</span>
              </div>
              <div className="mt-2 text-sm text-warm-purple/70">
                Includes 2 users
              </div>
              <div className="mt-1 text-sm text-warm-purple/70">
                +$5 / month per additional user
              </div>
              <ul className="mt-6 space-y-3 text-sm text-warm-purple/80 text-left">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-natural-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="#cta" className="w-full justify-center">
                  Start 14-day free trial
                </ButtonLink>
              </div>
              <p className="mt-3 text-xs text-warm-purple/60">
                Cancel anytime
              </p>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
