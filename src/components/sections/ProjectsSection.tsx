"use client";

import { useState } from "react";
import { projectsData, ProjectData } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpenModal = (project: ProjectData) => {
    setSelectedProject(project);
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

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
              onViewProject={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Render Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}
