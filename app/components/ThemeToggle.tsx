"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "./ui/cn";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    }
    return resolvedTheme === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );
  };

  const getLabel = () => {
    if (theme === "system") {
      return "System";
    }
    return resolvedTheme === "dark" ? "Dark" : "Light";
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-grey/70 text-warm-purple/80 hover:bg-warm-grey/35 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-highlighter-orange/50 focus:ring-offset-2"
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
}