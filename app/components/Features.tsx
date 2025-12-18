"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Link2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Container } from "./Container";
import { Card } from "./ui/Card";
import { FadeIn } from "./ui/FadeIn";
import { FeatureDecorations } from "./ui/WavyDecorations";

const features = [
  {
    title: "Xero integration",
    titleComponent: (
      <div className="flex items-center gap-2">
        <Image
          src="/images/Xero Wordmark__Blue.svg"
          alt="Xero"
          width={60}
          height={20}
          className="h-4 w-auto"
        />
        <span>integration</span>
      </div>
    ),
    description:
      "Connect in seconds, not hours. One-click sync with your Xero account.",
    icon: Link2,
    color: "bg-highlighter-orange",
  },
  {
    title: "Crystal-clear dashboard",
    description:
      "Everything you need, nothing you don't — revenue, expenses, cash flow, invoices.",
    icon: LayoutDashboard,
    color: "bg-lavender-blue",
  },
  {
    title: "AI summaries",
    description:
      "Your weekly business brief, sorted. Plain-English insights without the noise.",
    icon: Sparkles,
    color: "bg-highlighter-pink",
  },
  {
    title: "Ask anything",
    description:
      "Just ask, like you would a mate. Curvii answers natural questions about your data.",
    icon: MessageCircle,
    color: "bg-natural-sage",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 bg-natural-white overflow-hidden">
      {/* Colorful decorations */}
      <FeatureDecorations />
      
      <Container className="relative z-10 py-16 lg:py-24">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-heading tracking-tight">
            Know what's happening, <span className="text-highlighter-pink">at a glance</span>
          </h2>
          <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
            Curvii turns Xero data into a dashboard you actually want to check —
            plus AI insights that cut straight to the point.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f, idx) => (
            <FadeIn key={f.title} delay={0.05 * idx}>
              <Card className="group h-full p-6 hover:border-highlighter-pink/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.color} text-natural-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold leading-heading tracking-tight">
                      {f.titleComponent || f.title}
                    </div>
                    <p className="mt-2 text-sm leading-body tracking-tight text-warm-purple/80">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
