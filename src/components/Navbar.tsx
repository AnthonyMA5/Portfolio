import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("Navigator");
  const t2 = await getTranslations("Language");
  const t4 = await getTranslations();

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
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
