export interface TechItem {
  id: string;
  name: string;
  lightSrc: string;
  darkSrc: string;
}

export const webTechStack: TechItem[] = [
  { id: "js", name: "JavaScript", lightSrc: "/icons/tech/javascript.svg", darkSrc: "/icons/tech/javascript.svg" },
  { id: "ts", name: "TypeScript", lightSrc: "/icons/tech/typescript.svg", darkSrc: "/icons/tech/typescript.svg" },
  { id: "react", name: "React", lightSrc: "/icons/tech/react_light.svg", darkSrc: "/icons/tech/react_dark.svg" },
  { id: "next", name: "Next.js", lightSrc: "/icons/tech/nextjs.svg", darkSrc: "/icons/tech/nextjs.svg" },
  { id: "vue", name: "Vue", lightSrc: "/icons/tech/vue.svg", darkSrc: "/icons/tech/vue.svg" },
  { id: "nuxt", name: "Nuxt", lightSrc: "/icons/tech/nuxt.svg", darkSrc: "/icons/tech/nuxt.svg" },
];

export const appTechStack: TechItem[] = [
  { id: "figma", name: "Figma", lightSrc: "/icons/design/figma.svg", darkSrc: "/icons/design/figma.svg" },
  { id: "tailwind", name: "Tailwind CSS", lightSrc: "/icons/tech/tailwindcss.svg", darkSrc: "/icons/tech/tailwindcss.svg" },
  { id: "flutter", name: "Flutter", lightSrc: "/icons/tech/flutter.svg", darkSrc: "/icons/tech/flutter.svg" },
  { id: "android", name: "Android", lightSrc: "/icons/tech/android-icon.svg", darkSrc: "/icons/tech/android-icon.svg" },
  { id: "swift", name: "Swift", lightSrc: "/icons/tech/swift.svg", darkSrc: "/icons/tech/swift.svg" },
  { id: "java", name: "Java", lightSrc: "/icons/tech/java.svg", darkSrc: "/icons/tech/java.svg" },
];

export const backendTechStack: TechItem[] = [
  { id: "laravel", name: "Laravel", lightSrc: "/icons/tech/laravel.svg", darkSrc: "/icons/tech/laravel.svg" },
  { id: "php", name: "PHP", lightSrc: "/icons/tech/php_light.svg", darkSrc: "/icons/tech/php_dark.svg" },
  { id: "mariadb", name: "MariaDB", lightSrc: "/icons/db/mariadb.svg", darkSrc: "/icons/db/mariadb.svg" },
  { id: "postgres", name: "PostgreSQL", lightSrc: "/icons/db/postgresql.svg", darkSrc: "/icons/db/postgresql.svg" },
  { id: "sqlserver", name: "SQLServer", lightSrc: "/icons/db/sql-server.svg", darkSrc: "/icons/db/sql-server.svg" },
  { id: "mongo", name: "MongoDB", lightSrc: "/icons/db/mongodb_light.svg", darkSrc: "/icons/db/mongodb_dark.svg" },
];
