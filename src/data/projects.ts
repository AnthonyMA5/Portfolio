export interface ProjectBadgeData {
  id: string;
  variant: "uiux" | "web" | "mobile" | "desktop" | string;
  label: string;
}

export interface TechBadgeData {
  id: string;
  name: string;
  lightSrc: string;
  darkSrc?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  imageSrc: string;
  descriptionKey: string; // Used for translation key if applicable, or direct description
  projectBadges: ProjectBadgeData[];
  techBadges: TechBadgeData[];
  link?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "arte-jardin",
    title: "Arte Jardín",
    imageSrc: "/images/arte_jardin.png",
    descriptionKey: "Diseño de interfaz y experiencia de usuario para un sitio web sobre paisajismo junto a su versión móvil", // Later can map to a translation key
    projectBadges: [
      { id: "pb-uiux", variant: "uiux", label: "UX/UI" },
      { id: "pb-web", variant: "web", label: "Web" },
      { id: "pb-mobile", variant: "mobile", label: "Mobile" },
    ],
    techBadges: [
      { id: "tb-figma", name: "Figma", lightSrc: "/icons/design/figma.svg" },
    ],
    link: "#", // placeholder for real link
  },
  // Add more projects here
];
