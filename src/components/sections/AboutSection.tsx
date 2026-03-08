import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="section">
      <div className="flex w-full h-full">
        <div className="container items-start space-y-8">
          <div className="chip">✦ {t("title")}</div>
          <p className="text-title">
            {t("title2")}
          </p>
          <p className="text-body">
            {t("description")}
          </p>
          <div className="card w-full">
            <p className="text-caption">
              - {t("description2")}
              <br /><br />
              {t("description3")}
            </p>
          </div>
        </div>
        <div className="container items-end">
          <p className="text-heading">About</p>
        </div>
      </div>
    </section>
  );
}
