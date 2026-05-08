import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("Hero");

  return (
    <section id="home" className="section">
      <div className="container flex-col justify-center items-center text-center">
        <div className="badge color-transition">
          <span className="status-dot">
            <span className="status-dot-ping" />
            <span className="status-dot-core" />
          </span>
          <p>{t("status")}</p>
        </div>
        <p className="text-4xl lg:text-8xl md:text-heading mt-6 md:mt-8 font-bold text-light-600 dark:text-light-100">
          {t("name")}
          <br />
          {t("lastName")}
        </p>
        <p className="text-lg md:text-subheading mt-4 md:mt-8 max-w-2xl">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 md:mt-10 w-full sm:w-auto">
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
            {t("projectsButton")}
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">
            {t("contactButton")}
          </a>
        </div>
      </div>
    </section>
  );
}
