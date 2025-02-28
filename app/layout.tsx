import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { plusJakartaSans } from "@/app/ui/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Cineo",
  description: "A movie recommendation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
