"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { ButtonLink } from "./ui/Button";
import { cn } from "./ui/cn";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;

      // Only hide/show navbar after scrolling past 100px to avoid jarring behavior
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          // Scrolling down
          setHidden(true);
        } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 10) {
          // Scrolling up
          setHidden(false);
        }
      } else {
        // Show navbar when near top of page
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-warm-grey/70 bg-natural-white/80 backdrop-blur transition-transform duration-300 ease-in-out",
        hidden && "-translate-y-full"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
          aria-label="Curvii home"
        >
          <img
            src={resolvedTheme === "dark" ? "/images/logo-white.svg" : "/images/logo.svg"}
            alt="Curvii"
            className="h-8 w-auto"
          />
          <span className="hidden rounded-full bg-highlighter-pink/15 px-2 py-0.5 text-xs font-semibold text-highlighter-pink sm:inline-flex">
            NZ
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-tight text-warm-purple/80 hover:text-warm-purple"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/login" variant="secondary" size="sm">
            Login
          </ButtonLink>
          <Link
            href="#cta"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-natural-white disabled:pointer-events-none disabled:opacity-50",
              "bg-highlighter-orange text-natural-white hover:bg-highlighter-orange/90 hover:shadow-highlighter-orange/25",
              "h-10 px-4 text-sm",
              "group"
            )}
          >
            Try Curvii Free
            <ArrowRight className="h-4 w-4 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-grey/70 text-warm-purple/80 hover:bg-warm-grey/35 md:hidden",
            open && "bg-warm-grey/35",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-warm-grey/70 bg-natural-white md:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-warm-purple/85 hover:bg-warm-grey/35"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center justify-between mt-2 px-3 py-2">
                  <span className="text-sm font-semibold tracking-tight text-warm-purple/85">Theme</span>
                  <ThemeToggle />
                </div>
                <ButtonLink
                  href="/login"
                  variant="secondary"
                  size="md"
                  className="mt-2 w-full"
                >
                  Login
                </ButtonLink>
                <Link
                  href="#cta"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-natural-white disabled:pointer-events-none disabled:opacity-50",
                    "bg-highlighter-orange text-natural-white hover:bg-highlighter-orange/90 hover:shadow-highlighter-orange/25",
                    "h-11 px-5 text-sm",
                    "mt-2 w-full group"
                  )}
                >
                  Try Curvii Free
                  <ArrowRight className="h-4 w-4 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

