import { useTranslations } from "next-intl";
import TechCard from "../ui/TechCard";
import { webTechStack } from "@/data/techStack";

export default function ExperienceSection() {
    const t = useTranslations("Experience");

    return (
        <section id="experience" className="section">
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="container items-start space-y-8">
                    <div className="chip">✦ {t("title")}</div>
                    <p className="text-title">{t("title2")}</p>
                    <p className="text-body">{t("description")}</p>
                </div>
                <div className="container items-start space-y-8">
                    <div className="chip">✦ {t("title")}</div>
                    <p className="text-title">{t("title2")}</p>
                    <p className="text-body">{t("description")}</p>
                </div>
            </div>
        </section>
    );
}