"use client";

import { ThemeProvider } from "next-themes";

interface ChildrenProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="bg-[#fdf8f5] text-[#1e1e1e] dark:bg-[#121212] dark:text-[#ededed] select-none transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
};

export default Provider;
