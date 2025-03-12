import type { Metadata } from "next";
import Provider from "@/app/components/Provider";
import { plusJakartaSans } from "@/app/components/fonts";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";

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
      <body className={`${plusJakartaSans.className} antialiased container mx-auto min-h-screen p-5 lg:px-20 lg:py-5`}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
