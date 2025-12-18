"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah",
    quote: "Curvii gives me the quick read I need before service starts. I can see cash flow, overdue invoices, and what's changed this week — without drowning in reports.",
    author: "Sarah",
    role: "Café owner",
    location: "Wellington",
  },
  {
    id: "mike",
    quote: "The dashboard is incredibly intuitive. I can quickly spot trends and make decisions faster than ever. Curvii has transformed how we manage our finances.",
    author: "Mike",
    role: "Restaurant manager",
    location: "Auckland",
  },
  {
    id: "lisa",
    quote: "Finally, accounting software that works for small businesses! No more complex spreadsheets or expensive consultants. Everything I need is right there.",
    author: "Lisa",
    role: "Retail shop owner",
    location: "Christchurch",
  },
  {
    id: "david",
    quote: "The automated insights have saved us hours each week. We catch issues early and our cash flow has never been better.",
    author: "David",
    role: "Bar owner",
    location: "Hamilton",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="relative overflow-hidden p-8 border-2 border-lavender-blue/20">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-highlighter-orange via-highlighter-pink to-lavender-blue" />

              <div className="max-w-3xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-highlighter-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl leading-body tracking-tight text-warm-purple">
                  "{testimonials[currentIndex].quote.split(' — ')[0]} —{' '}
                  <span className="text-highlighter-pink font-semibold">
                    {testimonials[currentIndex].quote.split(' — ')[1] || testimonials[currentIndex].quote.split(' — ')[0]}
                  </span>"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-natural-sage to-lavender-blue" />
                  <div>
                    <div className="text-sm font-semibold tracking-tight text-warm-purple">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm tracking-tight text-warm-purple/60">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="p-2 hover:bg-lavender-blue/10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-lavender-blue scale-125"
                  : "bg-warm-grey/30 hover:bg-warm-grey/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="p-2 hover:bg-lavender-blue/10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}