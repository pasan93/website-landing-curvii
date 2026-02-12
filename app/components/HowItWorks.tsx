"use client";

import { Container } from "./Container";
import { Card } from "./ui/Card";
import { FadeIn } from "./ui/FadeIn";
import { StepsDecorations } from "./ui/WavyDecorations";

const steps = [
  {
    title: "Connect your Xero account",
    description: "One click to link Curvii to your Xero organisation.",
    color: "bg-highlighter-orange",
    borderColor: "border-highlighter-orange/30",
  },
  {
    title: "Curvii syncs your data",
    description:
      "Revenue, expenses, cash flow, invoices — all pulled into one view.",
    color: "bg-lavender-blue",
    borderColor: "border-lavender-blue/30",
  },
  {
    title: "Ask questions and get insights",
    description:
      "Compare months, track customers who owe you money, and get weekly summaries.",
    color: "bg-highlighter-pink",
    borderColor: "border-highlighter-pink/30",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-warm-grey/20 overflow-hidden">
      {/* Colorful decorations */}
      <StepsDecorations />
      
      <Container className="relative z-10 py-16 lg:py-24">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-heading tracking-tight">
            How it <span className="text-lavender-blue">works</span>
          </h2>
          <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
            Revenue, expenses, cash flow, invoices — all pulled into one clean view.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <FadeIn key={step.title} delay={0.05 * idx}>
              <Card className={`h-full p-6 hover:${step.borderColor} transition-colors duration-300`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.color} text-natural-white shadow-lg`}>
                    <span className="text-lg font-bold">{idx + 1}</span>
                  </div>
                  <div className="text-lg font-bold leading-heading tracking-tight">
                    {step.title}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-body tracking-tight text-warm-purple/80">
                  {step.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
