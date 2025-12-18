"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
import { CTADecorations } from "./ui/WavyDecorations";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-purple via-warm-purple to-highlighter-pink/40" />
      
      {/* Colorful decorations */}
      <CTADecorations />
      
      <Container className="relative z-10 py-16 lg:py-24 text-natural-white">
        <FadeIn className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-heading tracking-tight sm:text-4xl">
              Ready to see your business <span className="text-highlighter-orange">clearly?</span>
            </h2>
            <p className="mt-4 text-lg leading-body tracking-tight text-natural-white/85">
              Join NZ businesses using Curvii to make better calls — faster.
            </p>
            
            {/* Colorful dots decoration */}
            <div className="mt-6 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-highlighter-orange animate-pulse" />
              <div className="h-3 w-3 rounded-full bg-highlighter-pink animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="h-3 w-3 rounded-full bg-lavender-blue animate-pulse" style={{ animationDelay: "0.4s" }} />
              <div className="h-3 w-3 rounded-full bg-natural-sage animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>

          <div className="rounded-2xl bg-natural-white/10 p-6 backdrop-blur-sm border border-natural-white/10">
            <form
              className="flex flex-col gap-3 md:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                }}
                placeholder="you@business.co.nz"
                className="h-12 flex-1 rounded-full border border-natural-white/20 bg-natural-white/10 px-5 text-sm tracking-tight text-natural-white placeholder:text-natural-white/55 focus:outline-none focus:ring-2 focus:ring-highlighter-orange/70"
              />
              <Button type="submit" className="h-12 px-6 bg-highlighter-orange hover:bg-highlighter-orange/90 whitespace-nowrap">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-3 text-sm text-natural-white/70">
              {submitted
                ? "Cheers — we'll be in touch soon."
                : "No spam. Just early access and launch updates."}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
