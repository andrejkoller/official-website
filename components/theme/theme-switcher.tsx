"use client";

import { useTheme } from "@/components/theme/use-theme";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, switchTheme, mounted } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "D") {
        switchTheme();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [switchTheme]);

  if (!mounted) return null;

  return (
    <button
      onClick={switchTheme}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      className="flex items-center justify-center bg-transparent border-0 cursor-pointer text-(--color-muted) hover:text-(--color-primary) transition-colors duration-200"
    >
      {theme === "light" ? (
        <SunIcon className="size-4.5" />
      ) : (
        <MoonIcon className="size-4.5" />
      )}
    </button>
  );
};
