import { getTranslations } from "next-intl/server";
import TechCard from "../ui/TechCard";
import { webTechStack, appTechStack, backendTechStack } from "@/data/techStack";

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
                {webTechStack.map((tech) => (
                  <TechCard
                    key={tech.id}
                    name={tech.name}
                    lightSrc={tech.lightSrc}
                    darkSrc={tech.darkSrc}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-body font-semibold">
                {t("appDev")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {appTechStack.map((tech) => (
                  <TechCard
                    key={tech.id}
                    name={tech.name}
                    lightSrc={tech.lightSrc}
                    darkSrc={tech.darkSrc}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-body font-semibold">{t("backendDb")}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {backendTechStack.map((tech) => (
                  <TechCard
                    key={tech.id}
                    name={tech.name}
                    lightSrc={tech.lightSrc}
                    darkSrc={tech.darkSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
