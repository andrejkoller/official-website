"use client";

import { useTheme } from "@/components/theme/use-theme";
import { useEffect } from "react";
import type { Theme } from "./types";

const themeOptions: { label: string; value: Theme }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

const getThemeButtonClassName = (isActive: boolean) =>
  `bg-transparent font-medium cursor-pointer transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider ${
    isActive
      ? "text-(--color-primary)"
      : "text-(--color-muted) hover:text-(--color-primary)"
  }`;

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
    <div className="flex items-center">
      {themeOptions.map((option, index) => (
        <div key={option.value} className="flex items-center">
          {index > 0 && (
            <span className="text-[10px] select-none text-(--color-muted) font-medium tracking-wider mx-2">
              |
            </span>
          )}
          <button
            onClick={switchTheme}
            className={getThemeButtonClassName(theme === option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};
