"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();
  const nextLocale = locale === "es" ? "en" : "es";
  const pathname = usePathname();

  return (
    <div className="bg-primary-light-500 dark:bg-secondary-light-400 px-4 py-2 rounded-lg text-dark hover:bg-primary-light-600 dark:hover:bg-secondary-light-200 transition-colors duration-400 cursor-pointer">
      <Link locale={nextLocale} href={pathname} className="flex items-center gap-x-2">
        <Icon
          icon={locale === "es" ? "circle-flags:mx" : "circle-flags:us"}
          width={24}
        />
        <span>{locale === "es" ? "Español" : "English"}</span>
      </Link>
    </div>
  );
}
