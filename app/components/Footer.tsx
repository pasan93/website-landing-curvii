"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useTheme } from "./ThemeProvider";

export function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <footer className="bg-natural-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <img
              src={resolvedTheme === "dark" ? "/images/logo-white.svg" : "/images/logo.svg"}
              alt="Curvii"
              className="h-8 w-auto mb-2"
            />
            <p className="max-w-sm text-sm leading-body tracking-tight text-warm-purple/70">
              Made for NZ businesses who want clarity from Xero, without the
              admin.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <div className="font-semibold text-warm-purple/80">Product</div>
              <a className="block text-warm-purple/70 hover:text-warm-purple" href="#features">
                Features
              </a>
              <a className="block text-warm-purple/70 hover:text-warm-purple" href="#pricing">
                Pricing
              </a>
              <a className="block text-warm-purple/70 hover:text-warm-purple" href="#cta">
                Get started
              </a>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-warm-purple/80">Company</div>
              <a className="block text-warm-purple/70 hover:text-warm-purple" href="#about">
                About
              </a>
              <Link
                href="/privacy"
                className="block text-warm-purple/70 hover:text-warm-purple"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block text-warm-purple/70 hover:text-warm-purple"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-warm-grey/70 pt-6 text-xs text-warm-purple/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Curvii. Made for NZ businesses.</div>
          <div>Contact: hello@curvii.co.nz</div>
        </div>
      </Container>
    </footer>
  );
}

