"use client";

import {
  getHeaderLinkClassName,
  websiteLinksConfig,
  imprintLinkConfig,
} from "@/configs/header-links.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-(--color-overlay) z-40 min-[768px]:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[75vw] border-r border-(--color-border) bg-(--color-background) z-50 transform transition-transform duration-200 ease-in-out flex flex-col min-[768px]:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-(--header-height) flex items-center justify-start px-6">
          <button
            onClick={onClose}
            className="pointer-events-auto flex min-[768px]:hidden flex-col justify-center items-start gap-1.25 w-8 h-5 cursor-pointer bg-transparent border-0 z-50"
            aria-label="Toggle menu"
          >
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200 translate-y-[3.25px] rotate-45" />
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200 translate-y-[-3.25px] -rotate-45" />
          </button>
        </div>

        <nav className="flex-1 pt-3 px-6">
          <ul className="flex flex-col gap-4">
            {websiteLinksConfig.map((link) => (
              <li key={link.key} className="pointer-events-auto w-full">
                <Link
                  href={link.url}
                  target={link.hasTargetBlank ? "_blank" : undefined}
                  rel={link.hasRelNoopener ? "noopener noreferrer" : undefined}
                  className={getHeaderLinkClassName(
                    link.key === "official-website" && pathname === "/",
                  )}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-(--color-border) px-6 py-4">
          <Link
            href={imprintLinkConfig.url}
            className={getHeaderLinkClassName(
              pathname === imprintLinkConfig.url,
            )}
            onClick={onClose}
          >
            {imprintLinkConfig.label}
          </Link>
        </div>
      </aside>
    </>
  );
};
