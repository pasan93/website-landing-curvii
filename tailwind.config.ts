import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "natural-white": "var(--natural-white)",
        "warm-purple": "var(--warm-purple)",
        "highlighter-orange": "var(--highlighter-orange)",
        "lavender-blue": "var(--lavender-blue)",
        "natural-sage": "var(--natural-sage)",
        "highlighter-pink": "var(--highlighter-pink)",
        "warm-grey": "var(--warm-grey)",
      },
      fontFamily: {
        sans: ["var(--font-stack-sans)", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      lineHeight: {
        heading: "1.1",
        body: "1.2",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(74, 28, 92, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;

