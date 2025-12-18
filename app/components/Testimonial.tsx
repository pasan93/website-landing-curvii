"use client";

import { Container } from "./Container";
import { FadeIn } from "./ui/FadeIn";
import { TestimonialDecorations } from "./ui/WavyDecorations";
import { TestimonialSlider } from "./ui/TestimonialSlider";

export function Testimonial() {
  return (
    <section className="relative bg-natural-white overflow-hidden">
      {/* Colorful decorations */}
      <TestimonialDecorations />

      <Container className="relative z-10 py-16 lg:py-24">
        <FadeIn>
          <TestimonialSlider />
        </FadeIn>
      </Container>
    </section>
  );
}
