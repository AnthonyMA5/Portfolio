import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="section">
            <div className="container text-center bg-dark-300 border-2 border-dark-200 p-10 rounded-3xl">
                <div className="flex flex-row w-full h-full">
                    <div className="container items-start space-y-8">
                        <div className="chip">✉️ {t("title")}</div>
                        <p className="text-title">Trabajemos juntos</p>
                        <p className="text-body">anthony_ar2003@icloud.com</p>
                        <div className="flex flex-row w-full gap-4">
                            <a href="https://github.com/AnthonyMA5" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                <Image src="/icons/social/github_dark.svg" alt="GitHub" width={20} height={20} className="shrink-0" />
                                <span className="leading-none pt-[2px]">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/anthony-martinez-arellano/" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                <Image src="/icons/social/linkedin.svg" alt="LinkedIn" width={20} height={20} className="shrink-0" />
                                <span className="leading-none pt-[2px]">LinkedIn</span>
                            </a>
                            <a href="https://github.com/AnthonyMA5" className="btn-secondary-alternative2 w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3">
                                📄
                                <span className="leading-none pt-[2px]">CV</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-full grid grid-rows-3 gap-6">
                        <div className="flex flex-row w-full h-full bg-dark-200 border-2 border-dark-100 p-6 rounded-xl items-center justify-between">
                            <p className="text-body">Estado</p>
                            <p className="text-body">Disponible para trabajar</p>
                        </div>
                        <div className="flex flex-row w-full h-full bg-dark-200 border-2 border-dark-100 p-6 rounded-xl items-center justify-between">
                            <p className="text-body">Ubicación</p>
                            <p className="text-body">Guadalajara, Jalisco</p>
                        </div>
                        <div className="flex flex-row w-full h-full bg-dark-200 border-2 border-dark-100 p-6 rounded-xl items-center justify-between">
                            <p className="text-body">Modalidad de trabajo</p>
                            <p className="text-body">Tiempo Completo, Freelance o Temporal</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}