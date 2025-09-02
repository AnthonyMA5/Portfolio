import { NextIntlClientProvider } from "next-intl";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">
            <div>
              <Navbar />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
