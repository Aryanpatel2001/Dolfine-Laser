import type React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

import "@/app/globals.css";

export const metadata = {
  title:
    "Dolphin Laser Machine - India's Leading Laser Technology Manufacturer",
  description:
    "Premier manufacturer and exporter of industrial laser machines for marking, cutting, engraving, welding, and cleaning. ISO & CE certified with global presence.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <Toaster position="top-right" />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { Toaster } from "sonner";
