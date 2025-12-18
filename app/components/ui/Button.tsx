import type React from "react";
import Link from "next/link";
import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-highlighter-orange text-natural-white hover:bg-highlighter-orange/90 hover:shadow-highlighter-orange/25",
  secondary:
    "bg-natural-white text-warm-purple border border-warm-grey/70 hover:bg-warm-grey/40 hover:shadow-md",
  ghost: "bg-transparent text-warm-purple hover:bg-warm-grey/35",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: ButtonBaseProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-natural-white disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  external,
  ariaLabel,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonLinkProps) {
  const classes = buttonClassName({ variant, size, className });
  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
