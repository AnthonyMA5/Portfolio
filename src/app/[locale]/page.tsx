import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full h-screen color-transition flex items-center justify-center bg-primary-light-50 dark:bg-primary-dark-500">
      <h1>{t("title")}</h1>
    </div>
  );
}