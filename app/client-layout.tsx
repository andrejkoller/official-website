"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        <main
          className="flex min-h-0 flex-1 flex-col"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
