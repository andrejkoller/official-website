"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/header";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        {/* Render the header only if not on the home page */}
        {!isHomePage && <Header />}

        {/* Main content */}
        <main
          className="flex min-h-0 flex-1 flex-col pt-16"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
