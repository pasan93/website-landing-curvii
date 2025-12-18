"use client";

import { motion } from "framer-motion";

const shapes = [
  {
    size: 200,
    color: "var(--highlighter-pink)",
    initialX: "10%",
    initialY: "20%",
    duration: 20,
  },
  {
    size: 150,
    color: "var(--lavender-blue)",
    initialX: "80%",
    initialY: "10%",
    duration: 25,
  },
  {
    size: 100,
    color: "var(--natural-sage)",
    initialX: "70%",
    initialY: "70%",
    duration: 18,
  },
  {
    size: 120,
    color: "var(--highlighter-orange)",
    initialX: "20%",
    initialY: "80%",
    duration: 22,
  },
  {
    size: 80,
    color: "var(--lavender-blue)",
    initialX: "50%",
    initialY: "50%",
    duration: 15,
  },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
