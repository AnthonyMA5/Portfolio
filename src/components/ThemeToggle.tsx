"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const t3 = useTranslations("Theme");
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
      className="bg-primary-light-500 dark:bg-secondary-light-400 px-8 py-2.5 rounded-lg text-dark hover:bg-primary-light-600 transition ease-in-out dark:hover:bg-secondary-light-200 duration-400 cursor-pointer flex items-center gap-x-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon icon={theme === "light" ? "fxemoji:sunbehindcloud" : "flat-color-icons:night-landscape"} width="24" />
      <span className="text-black dark:text-white">{theme === "light" ? t3("light") : t3("dark")}</span>
    </div>
  );
}
