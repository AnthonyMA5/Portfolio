import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="section">
            <div className="container text-center bg-dark-300 border-2 border-dark-200 p-8 md:p-12 lg:p-20 rounded-3xl">
                <div className="flex flex-col lg:flex-row w-full h-full gap-10">
                    <div className="container items-start space-y-8">
                        <div className="chip">✉️ {t("title")}</div>
                        <p className="text-title">{t("letsWorkTogether")}</p>
                        <p className="text-body">{t("email")}</p>
                        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-4">
                            <a href="https://github.com/AnthonyMA5" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                <Image src="/icons/social/github_dark.svg" alt="GitHub" width={20} height={20} className="shrink-0" />
                                <span className="leading-none pt-[2px]">{t("github")}</span>
                            </a>
                            <a href="https://www.linkedin.com/in/anthony-martinez-arellano/" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                <Image src="/icons/social/linkedin.svg" alt="LinkedIn" width={20} height={20} className="shrink-0" />
                                <span className="leading-none pt-[2px]">{t("linkedin")}</span>
                            </a>
                            <a href="https://github.com/AnthonyMA5" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                📄
                                <span className="leading-none pt-[2px]">{t("resume")}</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-full grid grid-rows-3 gap-4 sm:gap-6 mt-4 lg:mt-0">
                        <div className="flex flex-col sm:flex-row w-full h-full bg-dark-200 border border-dark-100 p-4 sm:p-6 rounded-xl items-start sm:items-center justify-between gap-2 sm:gap-0">
                            <p className="text-body">{t("status")}</p>
                            <p className="text-body">{t("statusValue")}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full h-full bg-dark-200 border border-dark-100 p-4 sm:p-6 rounded-xl items-start sm:items-center justify-between gap-2 sm:gap-0">
                            <p className="text-body">{t("location")}</p>
                            <p className="text-body">{t("locationValue")}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full h-full bg-dark-200 border border-dark-100 p-4 sm:p-6 rounded-xl items-start sm:items-center justify-between gap-2 sm:gap-0">
                            <p className="text-body">{t("workMode")}</p>
                            <p className="text-body">{t("workModeValue")}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}