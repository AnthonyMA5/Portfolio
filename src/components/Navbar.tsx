import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const t = useTranslations("Navigator");
  const t2 = useTranslations("Language");
  const t3 = useTranslations("Theme");
  const t4 = useTranslations();
  
  return (
<nav className="sticky top-0 w-full bg-primary-light-300 dark:bg-primary-dark-400 shadow-md z-50 color-transition">
      <div className="w-full mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex w-1/5 justify-center">
          <h1 className="text-xl font-bold">{t4("title")}</h1>
        </div>

        <ul className="flex gap-x-6 w-3/5 justify-center">
          <li>{t("homeTitle")}</li>
          <li>{t("aboutTitle")}</li>
          <li>{t("projectsTitle")}</li>
          <li>{t("contactTitle")}</li>
        </ul>

        <div className="flex w-1/5 justify-center gap-x-4">
          <ThemeToggle />
          <div className="bg-primary-light-500 dark:bg-secondary-light-400 px-8 py-2.5 rounded-lg text-dark hover:bg-primary-light-600 transition ease-in-out duration-400 cursor-pointer">
            <Link href="/" className="flex items-center gap-x-2">
              <Icon icon="circle-flags:mx" width="24" />
              <span>{t2("spanish")}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
