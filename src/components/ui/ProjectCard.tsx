import Image from "next/image";
import ProjectBadge from "./ProjectBadge";
import TechBadge from "./TechBadge";
import { ProjectData } from "@/data/projects";

interface Props {
  project: ProjectData;
  viewProjectText: string;
}

export default function ProjectCard({ project, viewProjectText }: Props) {
  return (
    <div className="w-full h-full rounded-2xl bg-surface shadow-lg overflow-hidden flex flex-col">
      <Image 
        src={project.imageSrc} 
        alt={project.title} 
        width={500} 
        height={500} 
        className="object-cover w-full h-auto aspect-video" 
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start md:items-center justify-between gap-2 flex-col md:flex-row">
          <p className="text-lg font-medium text-dark-400 dark:text-light-100">{project.title}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {project.projectBadges.map((badge) => (
              <ProjectBadge key={badge.id} variant={badge.variant}>
                {badge.label}
              </ProjectBadge>
            ))}
          </div>
        </div>
        <p className="text-caption mt-4 flex-1">{project.descriptionKey}</p>
        <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {project.techBadges.map((tech) => (
              <TechBadge 
                key={tech.id} 
                name={tech.name} 
                lightSrc={tech.lightSrc} 
                darkSrc={tech.darkSrc} 
              />
            ))}
          </div>
          <a
            href={project.link || "#"}
            className="py-1 rounded-full font-medium text-md text-accent cursor-pointer hover:underline color-transition"
          >
            {viewProjectText}
          </a>
        </div>
      </div>
    </div>
  );
}
