"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Brand graphic variants
const brandGraphics = {
  "3bar": {
    orange: "/images/brand-assets/Curvii_BrandGraphic_3Bar_HighlighterOrange.svg",
    pink: "/images/brand-assets/Curvii_BrandGraphic_3Bar_HighlighterPink.svg",
    sage: "/images/brand-assets/Curvii_BrandGraphic_3Bar_NaturalSage.svg",
    blue: "/images/brand-assets/Curvii_BrandGraphic_3Bar_LavenderBlue.svg",
    purple: "/images/brand-assets/Curvii_BrandGraphic_3Bar_WarmPurple.svg",
    white: "/images/brand-assets/Curvii_BrandGraphic_3Bar_NaturalWhite.svg",
  },
  "6bar": {
    orange: "/images/brand-assets/Curvii_BrandGraphic_6Bar_HighlighterOrange.svg",
    pink: "/images/brand-assets/Curvii_BrandGraphic_6Bar_HighlighterPink.svg",
    sage: "/images/brand-assets/Curvii_BrandGraphic_6Bar_NaturalSage.svg",
    blue: "/images/brand-assets/Curvii_BrandGraphic_6Bar_LavenderBlue.svg",
    purple: "/images/brand-assets/Curvii_BrandGraphic_6Bar_WarmPurple.svg",
    white: "/images/brand-assets/Curvii_BrandGraphic_6Bar_NaturalWhite.svg",
  },
};

type BrandColor = "orange" | "pink" | "sage" | "blue" | "purple" | "white";
type GraphicVariant = "3bar" | "6bar";

interface BrandGraphicProps {
  variant: GraphicVariant;
  color: BrandColor;
  className?: string;
  delay?: number;
  rotate?: number;
  flipX?: boolean;
  flipY?: boolean;
  floating?: boolean;
  floatDuration?: number;
  floatDistance?: number;
}

function BrandGraphic({ 
  variant, 
  color, 
  className = "", 
  delay = 0,
  rotate = 0,
  flipX = false,
  flipY = false,
  floating = false,
  floatDuration = 4,
  floatDistance = 15,
}: BrandGraphicProps) {
  const src = brandGraphics[variant][color];
  
  const floatingAnimation = floating ? {
    y: [0, -floatDistance, 0, floatDistance * 0.5, 0],
    x: [0, floatDistance * 0.3, 0, -floatDistance * 0.3, 0],
    rotate: [rotate, rotate + 3, rotate, rotate - 3, rotate],
  } : {};

  const floatingTransition = floating ? {
    duration: floatDuration,
    repeat: Infinity,
    ease: "easeInOut" as const,
  } : {};
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...floatingAnimation,
      }}
      transition={{ 
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        ...floatingTransition,
      }}
      style={{ 
        transform: `rotate(${rotate}deg) scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
      }}
    >
      <Image
        src={src}
        alt=""
        width={200}
        height={200}
        className="w-full h-auto"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// Hero decorations - colorful brand shapes scattered around with floating animation
export function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Top left - Orange 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute left-4 md:left-8 lg:left-16 top-4 md:top-8 w-24 md:w-32 lg:w-40"
        delay={0.1}
        rotate={-15}
        floating
        floatDuration={5}
        floatDistance={12}
      />
      
      {/* Top right - Pink 3bar flipped */}
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute right-4 md:right-8 lg:right-16 top-4 md:top-8 w-28 md:w-36 lg:w-44"
        delay={0.2}
        rotate={15}
        flipX
        floating
        floatDuration={6}
        floatDistance={15}
      />
      
      {/* Top center left - Blue 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute left-1/4 top-12 md:top-16 w-16 md:w-20 lg:w-24 opacity-70"
        delay={0.25}
        rotate={-30}
        floating
        floatDuration={4.5}
        floatDistance={10}
      />
      
      {/* Top center right - Sage 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute right-1/4 top-8 md:top-12 w-14 md:w-18 lg:w-22 opacity-60"
        delay={0.3}
        rotate={25}
        flipX
        floating
        floatDuration={5.5}
        floatDistance={8}
      />
      
      {/* Left side upper - Sage 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute left-4 md:left-12 lg:left-20 top-1/4 w-20 md:w-24 lg:w-32"
        delay={0.35}
        rotate={45}
        floating
        floatDuration={7}
        floatDistance={18}
      />
      
      {/* Left side middle - Blue 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute left-8 md:left-16 lg:left-24 top-1/2 w-16 md:w-20 lg:w-28 opacity-80"
        delay={0.4}
        rotate={70}
        floating
        floatDuration={5}
        floatDistance={14}
      />
      
      {/* Right side upper - Orange 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute right-6 md:right-14 lg:right-24 top-1/4 w-18 md:w-24 lg:w-30 opacity-70"
        delay={0.35}
        rotate={-45}
        flipX
        floating
        floatDuration={6}
        floatDistance={16}
      />
      
      {/* Right middle - Lavender blue 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute right-4 md:right-12 lg:right-20 top-[45%] w-20 md:w-28 lg:w-36"
        delay={0.45}
        rotate={-30}
        flipX
        floating
        floatDuration={5.5}
        floatDistance={12}
      />
      
      {/* Right side lower - Pink 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute right-8 md:right-20 lg:right-32 top-[60%] w-14 md:w-20 lg:w-24 opacity-60"
        delay={0.5}
        rotate={-60}
        flipX
        floating
        floatDuration={4}
        floatDistance={10}
      />
      
      {/* Bottom left - Pink 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute left-8 md:left-16 bottom-24 w-16 md:w-24 opacity-70"
        delay={0.55}
        rotate={180}
        flipY
        floating
        floatDuration={6.5}
        floatDistance={14}
      />
      
      {/* Bottom left center - Sage 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute left-1/4 bottom-16 md:bottom-20 w-12 md:w-16 opacity-50"
        delay={0.6}
        rotate={120}
        floating
        floatDuration={5}
        floatDistance={8}
      />
      
      {/* Bottom center - Blue 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 w-14 md:w-20 opacity-40"
        delay={0.65}
        rotate={0}
        flipY
        floating
        floatDuration={4.5}
        floatDistance={6}
      />
      
      {/* Bottom right center - Orange 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute right-1/4 bottom-20 md:bottom-24 w-14 md:w-18 opacity-50"
        delay={0.7}
        rotate={-120}
        flipX
        floating
        floatDuration={5.5}
        floatDistance={10}
      />
      
      {/* Bottom right - Orange 3bar */}
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute right-8 md:right-16 bottom-16 w-20 md:w-28 opacity-80"
        delay={0.75}
        rotate={160}
        flipX
        floating
        floatDuration={6}
        floatDistance={16}
      />
    </div>
  );
}

// Feature section decorations
export function FeatureDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute left-4 md:left-8 top-20 w-20 md:w-28 opacity-40"
        delay={0}
        rotate={-25}
      />
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute right-4 md:right-8 bottom-20 w-24 md:w-32 opacity-40"
        delay={0.1}
        rotate={20}
        flipX
      />
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute right-1/4 top-8 w-14 md:w-18 opacity-30"
        delay={0.2}
        rotate={45}
      />
    </div>
  );
}

// How it works decorations
export function StepsDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute left-4 md:left-8 top-1/4 w-20 md:w-28 opacity-50"
        delay={0}
        rotate={60}
      />
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute right-4 md:right-8 top-1/3 w-24 md:w-32 opacity-40"
        delay={0.1}
        rotate={-20}
        flipX
      />
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute left-1/3 bottom-8 w-14 md:w-18 opacity-40"
        delay={0.2}
        rotate={180}
        flipY
      />
    </div>
  );
}

// Testimonial decorations
export function TestimonialDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute left-4 md:left-8 top-1/2 w-24 md:w-32 opacity-30 -translate-y-1/2"
        delay={0}
        rotate={90}
      />
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute right-4 md:right-8 top-1/2 w-20 md:w-28 opacity-30 -translate-y-1/2"
        delay={0.1}
        rotate={-90}
        flipX
      />
    </div>
  );
}

// Pricing decorations
export function PricingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute left-4 md:left-8 top-16 w-20 md:w-28 opacity-50"
        delay={0}
        rotate={-15}
      />
      <BrandGraphic 
        variant="3bar"
        color="blue"
        className="absolute right-4 md:right-8 bottom-16 w-20 md:w-28 opacity-50"
        delay={0.1}
        rotate={30}
        flipX
      />
      <BrandGraphic 
        variant="3bar"
        color="orange"
        className="absolute left-1/2 top-8 w-12 md:w-16 opacity-40"
        delay={0.2}
        rotate={180}
        flipY
      />
    </div>
  );
}

// Magnetic repel decoration component
interface MagneticGraphicProps extends BrandGraphicProps {
  baseX: number; // percentage from left (0-100)
  baseY: number; // percentage from top (0-100)
  mouseX: number;
  mouseY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  repelStrength?: number;
  repelRadius?: number;
}

function MagneticGraphic({
  baseX,
  baseY,
  mouseX,
  mouseY,
  containerRef,
  repelStrength = 80,
  repelRadius = 200,
  ...graphicProps
}: MagneticGraphicProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const elementX = rect.left + (rect.width * baseX) / 100;
    const elementY = rect.top + (rect.height * baseY) / 100;

    const deltaX = elementX - mouseX;
    const deltaY = elementY - mouseY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < repelRadius && distance > 0) {
      const force = (1 - distance / repelRadius) * repelStrength;
      const angle = Math.atan2(deltaY, deltaX);
      setOffset({
        x: Math.cos(angle) * force,
        y: Math.sin(angle) * force,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mouseX, mouseY, baseX, baseY, containerRef, repelStrength, repelRadius]);

  return (
    <motion.div
      className={graphicProps.className}
      style={{
        left: `${baseX}%`,
        top: `${baseY}%`,
      }}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
    >
      <BrandGraphic {...graphicProps} className="w-full h-auto" />
    </motion.div>
  );
}

// CTA decorations with magnetic repel effect
export function CTADecorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      {/* Top left - Orange */}
      <MagneticGraphic
        variant="3bar"
        color="orange"
        className="absolute w-20 md:w-28 opacity-40 -translate-x-1/2 -translate-y-1/2"
        baseX={8}
        baseY={15}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        containerRef={containerRef}
        delay={0}
        rotate={-20}
        repelStrength={60}
        repelRadius={180}
      />
      {/* Bottom left - Pink */}
      <MagneticGraphic
        variant="3bar"
        color="pink"
        className="absolute w-18 md:w-24 opacity-35 -translate-x-1/2 -translate-y-1/2"
        baseX={8}
        baseY={85}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        containerRef={containerRef}
        delay={0.1}
        rotate={25}
        repelStrength={60}
        repelRadius={180}
      />
      {/* Top center - Blue (above email box, between text and form) */}
      <MagneticGraphic
        variant="3bar"
        color="blue"
        className="absolute w-20 md:w-28 opacity-35 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        baseX={50}
        baseY={20}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        containerRef={containerRef}
        delay={0.2}
        rotate={15}
        repelStrength={70}
        repelRadius={200}
      />
      {/* Bottom right - Sage */}
      <MagneticGraphic
        variant="3bar"
        color="sage"
        className="absolute w-18 md:w-24 opacity-35 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        baseX={92}
        baseY={85}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        containerRef={containerRef}
        delay={0.3}
        rotate={-45}
        flipX
        repelStrength={60}
        repelRadius={180}
      />
    </div>
  );
}

// About decorations
export function AboutDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <BrandGraphic 
        variant="3bar"
        color="pink"
        className="absolute left-4 md:left-8 top-1/3 w-20 md:w-28 opacity-40"
        delay={0}
        rotate={70}
      />
      <BrandGraphic 
        variant="3bar"
        color="sage"
        className="absolute right-4 md:right-8 top-1/4 w-24 md:w-32 opacity-40"
        delay={0.1}
        rotate={-25}
        flipX
      />
    </div>
  );
}

// Full-width 6-bar decoration for section dividers
export function SectionDivider({ color = "blue" }: { color?: BrandColor }) {
  return (
    <div className="pointer-events-none w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={brandGraphics["6bar"][color]}
          alt=""
          width={1960}
          height={1080}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}


