import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("Navigator");
  const t4 = await getTranslations();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-nav/50 border-base z-50 color-transition backdrop-blur-lg">
      <div className="w-full mx-auto py-5 flex justify-between items-center">
        <div className="flex w-1/5 justify-center">
          <h1 className="text-xl font-bold">
            <a href="#">{t4("title")}</a>
          </h1>
        </div>

        <ul className="flex gap-x-6 w-3/5 justify-center">
          <li>
            <a href="#about" className="hover:text-brand-700 hover:bg-brand-100/70 dark:hover:bg-dark-200 dark:hover:text-brand-400 rounded-3xl transition-colors duration-500 ease-in-out px-4 py-2">{t("aboutTitle")}</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-brand-700 hover:bg-brand-100/70 dark:hover:bg-dark-200 dark:hover:text-brand-400 rounded-3xl transition-colors duration-500 ease-in-out px-4 py-2">{t("projectsTitle")}</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-brand-700 hover:bg-brand-100/70 dark:hover:bg-dark-200 dark:hover:text-brand-400 rounded-3xl transition-colors duration-500 ease-in-out px-4 py-2">{t("experienceTitle")}</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-brand-700 hover:bg-brand-100/70 dark:hover:bg-dark-200 dark:hover:text-brand-400 rounded-3xl transition-colors duration-500 ease-in-out px-4 py-2">{t("contactTitle")}</a>
          </li>
        </ul>

        <div className="flex w-1/5 justify-center gap-x-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
