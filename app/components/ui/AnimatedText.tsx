"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  wordReplacements?: Record<string, ReactNode>;
};

export function AnimatedText({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-highlighter-orange",
  wordReplacements = {},
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        // Check if this word should be replaced with a React element
        const replacement = wordReplacements[word];
        if (replacement) {
          return (
            <motion.span
              key={index}
              variants={child}
              className="inline-block"
              style={{ marginRight: "0.25em" }}
            >
              {replacement}
            </motion.span>
          );
        }

        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
            style={{ marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

type AnimatedParagraphProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedParagraph({
  text,
  className = "",
  delay = 0.5,
}: AnimatedParagraphProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.p>
  );
}
