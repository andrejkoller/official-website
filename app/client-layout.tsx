"use client";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1" aria-label="Main content">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
