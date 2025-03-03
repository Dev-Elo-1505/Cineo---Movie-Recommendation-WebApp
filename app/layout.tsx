import type { Metadata } from "next";
import Provider from "@/app/components/Provider";
import { plusJakartaSans } from "@/app/components/fonts";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
