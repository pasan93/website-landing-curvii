"use client";

import { Container } from "./Container";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { FadeIn } from "./ui/FadeIn";
import { AboutDecorations } from "./ui/WavyDecorations";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-warm-grey/20 overflow-hidden">
      {/* Colorful decorations */}
      <AboutDecorations />
      
      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-heading tracking-tight">
              About <span className="text-highlighter-orange">Curvii</span>
            </h2>
            <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
              Curvii is a smart dashboard for New Zealand businesses using Xero.
              It's designed to be warm, trustworthy, and refreshingly simple —
              like a mate who's good with numbers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="orange">NZ-first</Badge>
              <Badge tone="blue">Xero-connected</Badge>
              <Badge tone="sage">Plain-English insights</Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="p-6 border-2 border-lavender-blue/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-lavender-blue flex items-center justify-center">
                  <svg className="h-5 w-5 text-natural-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-lg font-bold leading-heading tracking-tight">
                  Built with privacy in mind
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-body tracking-tight text-warm-purple/80">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlighter-orange" />
                  Connect in seconds, no manual exports.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lavender-blue" />
                  Keep visibility on cash flow, invoices, and GST.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlighter-pink" />
                  Use AI to summarise — without the spreadsheet grind.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-natural-sage" />
                  Stay in control: disconnect any time.
                </li>
              </ul>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
