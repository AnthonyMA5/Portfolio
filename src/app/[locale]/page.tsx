import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full h-screen color-transition bg-app">
      <section id="home" className="section">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
          <div className="badge color-transition">
            <span className="status-dot">
              <span className="status-dot-ping" />
              <span className="status-dot-core" />
            </span>
            <p>Disponible para nuevas oportunidades</p>
          </div>
          <p className="text-heading">
            Anthony
            <br />
            Martinez
          </p>
          <p className="text-subheading text-center">
            Ingeniero en Desarrollo y Gestión de Software en plataformas
            móviles, web y de escritorio con enfoque en el área UX/UI.
          </p>
        </div>
      </section>
    </div>
  );
}
