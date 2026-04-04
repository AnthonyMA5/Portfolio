export interface ProjectBadgeData {
  id: string;
  variant: "uiux" | "web" | "mobile" | "desktop" | "smartwatch" | string;
  label: string;
}

export interface TechBadgeData {
  id: string;
  name: string;
  lightSrc: string;
  darkSrc?: string;
}

export interface ProjectGalleryImage {
  lightSrc: string;
  darkSrc?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  imageSrc: string;
  imageDarkSrc?: string;
  gallery?: ProjectGalleryImage[];
  year?: string;
  githubUrl?: string;
  figmaUrl?: string;
  demoUrl?: string;
  descriptionKey: string;
  modalDescriptionKey?: string;
  projectBadges: ProjectBadgeData[];
  techBadges: TechBadgeData[];
  modalTechBadges?: TechBadgeData[];
  link?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "arte-jardin",
    title: "Arte Jardín - Paisajismo",
    imageSrc: "/images/arte_jardin/arte_jardin_00.png",
    year: "2025",
    gallery: [
      { lightSrc: "/images/arte_jardin/arte_jardin_00.png" },
      { lightSrc: "/images/arte_jardin/arte_jardin_01.png" },
      { lightSrc: "/images/arte_jardin/arte_jardin_02.png" },
      { lightSrc: "/images/arte_jardin/arte_jardin_03.png" },
      { lightSrc: "/images/arte_jardin/arte_jardin_04.png" },
      { lightSrc: "/images/arte_jardin/arte_jardin_05.png" },
    ],
    githubUrl: "",
    figmaUrl: "https://www.figma.com/design/oQaN07esCncZ3ND9s1u2CT/Arte-Jard%C3%ADn--Paisajismo----Website?node-id=0-1&t=zz73a0cl4yLBEx3G-1",
    descriptionKey:
      "Diseño UI/UX integral para ecosistema web y móvil, priorizando la usabilidad y estética natural.",
    modalDescriptionKey:
      "Diseño UI/UX para web y móvil sobre paisajismo. Ideé una experiencia visual de 'estética natural' con alta interactividad, construyendo desde cero una interfaz intuitiva y responsiva centrada en el usuario.",
    projectBadges: [
      { id: "pb-uiux", variant: "uiux", label: "UX/UI" },
    ],
    techBadges: [
      { id: "tb-figma", name: "Figma", lightSrc: "/icons/design/figma.svg" },
    ],
    modalTechBadges: [
      { id: "tb-figma", name: "Figma", lightSrc: "/icons/design/figma.svg" },
    ],
    link: "",
  },
  {
    id: "utzmg",
    title: "Portal UTZMG",
    imageSrc: "/images/utzmg/utzmg_00.png",
    year: "2025",
    figmaUrl: "https://www.figma.com/design/7rJweal6xTV0eF42afUmKK/UTZMG---Website?node-id=0-1&t=v9okifYXRCpSxQ37-1",
    demoUrl: "https://utzmg-website.vercel.app/",
    gallery: [
      { lightSrc: "/images/utzmg/utzmg_00.png" },
      { lightSrc: "/images/utzmg/utzmg_01.png" },
      { lightSrc: "/images/utzmg/utzmg_02.png" },
      { lightSrc: "/images/utzmg/utzmg_03.png" },
      { lightSrc: "/images/utzmg/utzmg_04.png" },
      { lightSrc: "/images/utzmg/utzmg_05.png" },
    ],
    descriptionKey:
      "Rediseño completo del sitio web institucional de la UTZMG, enfocado en mejorar la experiencia de navegación para estudiantes y aspirantes.",
    modalDescriptionKey:
      "Rediseño UI/UX y desarrollo web orientado a los estudiantes. Construí de cero una plataforma responsiva de estética natural con componentes modernos de alta interactividad.",
    projectBadges: [
      { id: "pb-uiux", variant: "uiux", label: "UX/UI" },
      { id: "pb-web", variant: "web", label: "Web" },
    ],
    techBadges: [
      { id: "tb-figma", name: "Figma", lightSrc: "/icons/design/figma.svg" },
      { id: "tb-react", name: "React", lightSrc: "/icons/tech/react_light.svg", darkSrc: "/icons/tech/react_dark.svg" },
      { id: "tb-nextjs", name: "Next.js", lightSrc: "/icons/tech/nextjs.svg" },
    ],
    link: "#",
  },
  {
    id: "busme",
    title: "BusMe",
    imageSrc: "/images/busme.png",
    imageDarkSrc: "/images/busme_dark.png",
    year: "2025",
    figmaUrl: "https://www.figma.com/design/SD3aYXIAc1eTWy0HLylME7/BusMe---Multiplatform?node-id=161-201&t=g3wEzXXj2F5WMI9N-1",
    demoUrl: "https://busme.netlify.app",
    gallery: [
      { lightSrc: "/images/busme.png", darkSrc: "/images/busme_dark.png" },
      { lightSrc: "/images/busme/busme_web_01.png"},
      { lightSrc: "/images/busme/busme_web_02.png"},
      { lightSrc: "/images/busme/busme_web_03.png"},
      { lightSrc: "/images/busme/busme_mbl_01.png"},
      { lightSrc: "/images/busme/busme_mbl_02.png"},
      { lightSrc: "/images/busme/busme_mbl_03.png"},
      { lightSrc: "/images/busme/busme_smw_01.png"},
      { lightSrc: "/images/busme/busme_smw_02.png"},
      { lightSrc: "/images/busme/busme_smw_03.png"},
    ],
    descriptionKey:
      "Diseño UI/UX y desarrollo líder de aplicaciones móviles (Flutter, Swift) y smartwatch.",
    modalDescriptionKey:
      "Lideré el diseño y desarrollo de las aplicaciones. Construí una primera iteración multiplataforma en Flutter, evolucionando después a un desarrollo 100% nativo en Swift para iOS/WatchOS, apoyando además en el frontend web.",
    projectBadges: [
      { id: "pb-uiux", variant: "uiux", label: "UX/UI" },
      { id: "pb-web", variant: "web", label: "Web" },
      { id: "pb-mobile", variant: "mobile", label: "Mobile" },
      { id: "pb-smartwatch", variant: "smartwatch", label: "Smartwatch" },
    ],
    techBadges: [
      { id: "tb-nextjs", name: "Next.js", lightSrc: "/icons/tech/nextjs.svg" },
      { id: "tb-android", name: "Android", lightSrc: "/icons/tech/android-icon.svg" },
      { id: "tb-apple", name: "Apple", lightSrc: "/icons/tech/apple_light.svg", darkSrc: "/icons/tech/apple_dark.svg" },
    ],
    link: "#",
  },
  {
    id: "plantilla",
    title: "Plantilla Multiusos",
    imageSrc: "/images/nuxt_template/nuxt_template_00.png",
    year: "2025",
    demoUrl: "https://nuxt-template-beta.vercel.app/",
    gallery: [
      { lightSrc: "/images/nuxt_template/nuxt_template_00.png" },
      { lightSrc: "/images/nuxt_template/nuxt_template_01.png" },
      { lightSrc: "/images/nuxt_template/nuxt_template_02.png" },
      { lightSrc: "/images/nuxt_template/nuxt_template_03.png" },
      { lightSrc: "/images/nuxt_template/nuxt_template_04.png" },
    ],
    descriptionKey:
      "Desarrollo de ecosistema escalable en Nuxt con sistema de componentes personalizables.",
    modalDescriptionKey:
      "Desarrollo frontend de plantilla escalable en Nuxt. Diseñé un sistema modular de páginas y componentes adaptables, implementando funcionalidades avanzadas como modo oscuro nativo, internacionalización (i18n) y bandeja de notificaciones.",
    projectBadges: [
      { id: "pb-web", variant: "web", label: "Web" },
    ],
    techBadges: [
      { id: "tb-nuxt", name: "Nuxt", lightSrc: "/icons/tech/nuxt.svg" },
      { id: "tb-vue", name: "Vue", lightSrc: "/icons/tech/vue.svg" },
      { id: "tb-typescript", name: "TypeScript", lightSrc: "/icons/tech/typescript.svg" },
    ],
    link: "#",
  },
  
];
