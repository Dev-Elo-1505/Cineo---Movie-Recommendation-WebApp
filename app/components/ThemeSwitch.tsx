"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);



  return (
    <div>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer hover:text-[#ff6c37]"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer hover:text-[#ff6c37]"
        />
      ))}
    </div>
  );
};

export default ThemeSwitch;
