import { getTranslations } from "next-intl/server";
import TechCard from "../ui/TechCard";

export default async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="section">
      <div className="flex flex-col md:flex-row w-full h-full md:space-x-14">
        <div className="container items-start space-y-8">
          <div className="chip">✦ {t("title")}</div>
          <p className="text-title">{t("title2")}</p>
          <p className="text-body">{t("description")}</p>
          <div className="card w-full">
            <p className="text-caption">
              - {t("description2")}
              <br />
              <br />
              {t("description3")}
            </p>
          </div>
        </div>
        <div className="container items-start space-y-8 mt-10 md:mt-0">
          <div className="chip">✦ {t("stackTitle")}</div>
          <div className="w-full flex flex-col gap-6">
            <div>
              <p className="text-body font-semibold">{t("webDev")}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                <TechCard
                  name="JavaScript"
                  lightSrc="/icons/tech/javascript.svg"
                  darkSrc="/icons/tech/javascript.svg"
                />
                <TechCard
                  name="TypeScript"
                  lightSrc="/icons/tech/typescript.svg"
                  darkSrc="/icons/tech/typescript.svg"
                />
                <TechCard
                  name="React"
                  lightSrc="/icons/tech/react_light.svg"
                  darkSrc="/icons/tech/react_dark.svg"
                />
                <TechCard
                  name="Next.js"
                  lightSrc="/icons/tech/nextjs.svg"
                  darkSrc="/icons/tech/nextjs.svg"
                />
                <TechCard
                  name="Vue"
                  lightSrc="/icons/tech/vue.svg"
                  darkSrc="/icons/tech/vue.svg"
                />
                <TechCard
                  name="Nuxt"
                  lightSrc="/icons/tech/nuxt.svg"
                  darkSrc="/icons/tech/nuxt.svg"
                />
              </div>
            </div>

            <div>
              <p className="text-body font-semibold">
                {t("appDev")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                <TechCard
                  name="Figma"
                  lightSrc="/icons/design/figma.svg"
                  darkSrc="/icons/design/figma.svg"
                />
                <TechCard
                  name="Tailwind CSS"
                  lightSrc="/icons/tech/tailwindcss.svg"
                  darkSrc="/icons/tech/tailwindcss.svg"
                />
                <TechCard
                  name="Flutter"
                  lightSrc="/icons/tech/flutter.svg"
                  darkSrc="/icons/tech/flutter.svg"
                />
                <TechCard
                  name="Android"
                  lightSrc="/icons/tech/android-icon.svg"
                  darkSrc="/icons/tech/android-icon.svg"
                />
                <TechCard
                  name="Swift"
                  lightSrc="/icons/tech/swift.svg"
                  darkSrc="/icons/tech/swift.svg"
                />
                <TechCard
                  name="Java"
                  lightSrc="/icons/tech/java.svg"
                  darkSrc="/icons/tech/java.svg"
                />
              </div>
            </div>

            <div>
              <p className="text-body font-semibold">{t("backendDb")}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                <TechCard
                  name="Laravel"
                  lightSrc="/icons/tech/laravel.svg"
                  darkSrc="/icons/tech/laravel.svg"
                />
                <TechCard
                  name="PHP"
                  lightSrc="/icons/tech/php_light.svg"
                  darkSrc="/icons/tech/php_dark.svg"
                />
                <TechCard
                  name="MariaDB"
                  lightSrc="/icons/db/mariadb.svg"
                  darkSrc="/icons/db/mariadb.svg"
                />
                <TechCard
                  name="PostgreSQL"
                  lightSrc="/icons/db/postgresql.svg"
                  darkSrc="/icons/db/postgresql.svg"
                />
                <TechCard
                  name="SQLServer"
                  lightSrc="/icons/db/sql-server.svg"
                  darkSrc="/icons/db/sql-server.svg"
                />
                <TechCard
                  name="MongoDB"
                  lightSrc="/icons/db/mongodb_light.svg"
                  darkSrc="/icons/db/mongodb_dark.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
