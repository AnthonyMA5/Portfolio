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
            <a href="#about" className="navbar-link">
              {t("aboutTitle")}
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">
              {t("projectsTitle")}
            </a>
          </li>
          <li>
            <a href="#experience" className="navbar-link">
              {t("experienceTitle")}
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              {t("contactTitle")}
            </a>
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
