"use client";

import { headerConfig } from "@/configs/header.config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Tooltip } from "@/components/tooltip";
import { cn } from "@/lib/merge-classes";

export const Header = () => {
  return (
    <header
      className={cn(
        "fixed top-0 z-70 flex h-(--header-height) w-full items-center bg-(--background)",
        "before:absolute before:inset-x-0 before:bottom-0 before:h-px",
        "before:bg-(--border) before:content-['']",
        "animate-fade-in",
      )}
      aria-label="Header"
    >
      <nav className="layout-container flex h-full items-center justify-between">
        <ul className="flex gap-6">
          {headerConfig.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                aria-label={link.title}
                className="text-sm font-bold font-(family-name:--font-geist-mono) underline decoration-dashed"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <Tooltip content="Toggle theme (Shift + D)" side="bottom">
          <ThemeSwitcher />
        </Tooltip>
      </nav>
    </header>
  );
};
