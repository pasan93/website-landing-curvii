import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Curvii — Your Xero data, supercharged by AI",
  description:
    "Curvii connects to Xero and turns your numbers into crystal-clear insights for New Zealand businesses. Ask questions, get summaries, and stay on top of cash flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-dvh bg-natural-white font-sans tracking-tight text-warm-purple antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
