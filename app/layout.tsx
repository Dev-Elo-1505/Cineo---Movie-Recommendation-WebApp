import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
