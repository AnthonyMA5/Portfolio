import { useTranslations } from "next-intl";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string;
}

export default function ExperienceSection() {
    const t = useTranslations("Experience");

    return (
        <section id="experience" className="section">
            <div className="flex flex-col md:flex-row w-full h-full gap-10 md:gap-4">
                <div className="container items-start space-y-8">
                    <div className="chip">✦ {t("title")}</div>
                    <p className="text-title">{t("title2")}</p>
                    <p className="text-body">{t("description")}</p>
                </div>
                <div className="container items-start space-y-8">
                    <div className="w-full h-full py-6">
                        <div className="w-full p-8">
                            <div className="flex flex-col items-start gap-y-12">
                                {(t.raw("experiences") as ExperienceItem[]).map((experience, index) => (
                                    <div key={index} className="flex gap-x-5 w-full">
                                        <div className="w-[1%] flex flex-col items-center py-2 gap-y-3">
                                            <div className="w-2.5 h-3 bg-brand-300 rounded-full"></div>
                                            <div className="w-0.5 h-full bg-light-400/70 rounded-full"></div>
                                        </div>
                                        <div className="w-[99%] flex flex-col gap-y-2">
                                            <p>{experience.title}</p>
                                            <div className="flex gap-x-5">
                                                <p>🏢 {experience.company}</p>
                                                <p>📍 {experience.location}</p>
                                                <p>📅 {experience.date}</p>
                                            </div>
                                            <p className="text-sm">{experience.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}