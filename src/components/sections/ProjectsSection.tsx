import { projectsData } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section2">
      <div className="container items-start mx-auto px-4">
        <p className="text-title">Proyectos</p>
        <p className="text-subheading mt-4">Algunos proyectos que he realizado</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              viewProjectText="Ver proyecto" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
