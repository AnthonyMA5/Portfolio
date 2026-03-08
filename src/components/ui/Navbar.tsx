import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("Navigator");
  const t4 = await getTranslations();

  return (
    <nav className="sticky top-0 w-full bg-nav/50 border-base z-50 color-transition backdrop-blur-lg">
      <div className="w-full mx-auto py-5 flex justify-between items-center">
        <div className="flex w-1/5 justify-center">
          <h1 className="text-xl font-bold">{t4("title")}</h1>
        </div>

        <ul className="flex gap-x-6 w-3/5 justify-center">
          <li>{t("aboutTitle")}</li>
          <li>{t("projectsTitle")}</li>
          <li>{t("experienceTitle")}</li>
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
