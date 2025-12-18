import type React from "react";
import { cn } from "./cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-warm-grey/70 bg-natural-white shadow-soft",
        className,
      )}
      {...props}
    />
  );
}
