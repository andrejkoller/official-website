"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        {/* Main content */}
        <main
          className="flex min-h-0 flex-1 flex-col"
          aria-label="Main content"
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
