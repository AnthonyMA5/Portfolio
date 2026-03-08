import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("Hero");

  return (
    <section id="home" className="section">
      <div className="container">
        <div className="badge color-transition">
          <span className="status-dot">
            <span className="status-dot-ping" />
            <span className="status-dot-core" />
          </span>
          <p>{t("status")}</p>
        </div>
        <p className="text-heading mt-8">
          {t("name")}
          <br />
          {t("lastName")}
        </p>
        <p className="text-subheading text-center mt-8">
          {t("description")}
        </p>
        <div className="flex space-x-4 mt-10">
          <button className="btn-primary">{t("projectsButton")}</button>
          <button className="btn-secondary">{t("contactButton")}</button>
        </div>
      </div>
    </section>
  );
}
