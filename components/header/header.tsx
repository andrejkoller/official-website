"use client";

import {
  getHeaderLinkClassName,
  websiteLinksConfig,
} from "@/configs/header-links.config";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <header
        className="sticky top-0 z-40 flex justify-between items-center h-(--header-height) bg-(--color-background) px-6"
        aria-label="Site header"
      >
        <div className="flex items-center gap-6">
          <button
            className="flex flex-col gap-1.5 min-[768px]:hidden"
            aria-label="Menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200"></span>
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200"></span>
          </button>

          <ul className="hidden min-[768px]:flex items-center gap-6">
            {websiteLinksConfig.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.url}
                  target={link.hasTargetBlank ? "_blank" : undefined}
                  rel={link.hasRelNoopener ? "noopener noreferrer" : undefined}
                  className={getHeaderLinkClassName(link)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ThemeSwitcher />
      </header>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
