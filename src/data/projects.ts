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
  demoUrl?: string;
  descriptionKey: string;
  projectBadges: ProjectBadgeData[];
  techBadges: TechBadgeData[];
  link?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "arte-jardin",
    title: "Arte Jardín",
    imageSrc: "/images/arte_jardin.png",
    year: "2024",
    gallery: [
      { lightSrc: "/images/arte_jardin.png" },
      { lightSrc: "/images/arte_jardin.png" },
      { lightSrc: "/images/arte_jardin.png" },
      { lightSrc: "/images/arte_jardin.png" },
    ],
    githubUrl: "#",
    demoUrl: "#",
    descriptionKey:
      "Diseño de interfaz y experiencia de usuario para un sitio web sobre paisajismo junto a su versión móvil", // Later can map to a translation key
    projectBadges: [
      { id: "pb-uiux", variant: "uiux", label: "UX/UI" },
    ],
    techBadges: [
      { id: "tb-figma", name: "Figma", lightSrc: "/icons/design/figma.svg" },
    ],
    link: "#",
  },
  {
    id: "utzmg",
    title: "Portal UTZMG",
    imageSrc: "/images/utzmg.png",
    year: "2025",
    githubUrl: "#",
    demoUrl: "#",
    gallery: [
      { lightSrc: "/images/utzmg.png" },
    ],
    descriptionKey:
      "Rediseño completo del sitio web institucional de la UTZMG, enfocado en mejorar la experiencia de navegación para estudiantes y aspirantes.",
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
    id: "plantilla",
    title: "Plantilla Multiusos",
    imageSrc: "/images/plantilla_nuxt.png",
    imageDarkSrc: "/images/plantilla_nuxt_dark.png",
    year: "2025",
    githubUrl: "#",
    demoUrl: "#",
    gallery: [
      { lightSrc: "/images/plantilla_nuxt.png", darkSrc: "/images/plantilla_nuxt_dark.png" },
    ],
    descriptionKey:
      "Rediseño completo del sitio web de la Universidad Tecnológica de la Zona Metropolitana de Guadalajara",
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
  {
    id: "busme",
    title: "BusMe",
    imageSrc: "/images/busme.png",
    imageDarkSrc: "/images/busme_dark.png",
    year: "2025",
    githubUrl: "#",
    demoUrl: "#",
    gallery: [
      { lightSrc: "/images/busme.png", darkSrc: "/images/busme_dark.png" },
    ],
    descriptionKey:
      "Rediseño completo del sitio web de la Universidad Tecnológica de la Zona Metropolitana de Guadalajara",
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
  // Add more projects here
];
