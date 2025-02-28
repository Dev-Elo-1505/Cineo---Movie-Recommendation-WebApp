'use client'


import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(()=> setMounted(true), [])

  if(!mounted) return null
  
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
