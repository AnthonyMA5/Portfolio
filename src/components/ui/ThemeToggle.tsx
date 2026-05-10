"use client";


import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="bg-light-50 border border-light-200 dark:border-dark-200 dark:bg-dark-200 w-10 h-10 flex justify-center items-center rounded-full text-dark hover:bg-primary-light-600 dark:hover:bg-secondary-light-200 transition-colors duration-400 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="text-xl select-none leading-none pt-[2px]">
        {theme === "light" ? "🌚" : "🌞"}
      </span>
    </div>
  );
}
