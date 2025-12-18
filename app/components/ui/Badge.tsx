import type React from "react";
import { cn } from "./cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "pink" | "sage" | "blue" | "grey" | "orange";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  pink: "bg-highlighter-pink/15 text-highlighter-pink border-highlighter-pink/30",
  sage: "bg-natural-sage/15 text-natural-sage border-natural-sage/30",
  blue: "bg-lavender-blue/15 text-lavender-blue border-lavender-blue/30",
  grey: "bg-warm-grey/35 text-warm-purple border-warm-grey/70",
  orange: "bg-highlighter-orange/15 text-highlighter-orange border-highlighter-orange/30",
};

export function Badge({
  className,
  tone = "grey",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-tight",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
