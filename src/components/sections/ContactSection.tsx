import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="section">
            <div className="container text-center">
                <h2 className="text-title">{t("title")}</h2>
                <p className="text-subheading mt-4">{t("description")}</p>
            </div>
        </section>
    );
}