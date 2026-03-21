"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Github, Figma, ExternalLink } from "lucide-react";
import { ProjectData } from "@/data/projects";
import ProjectBadge from "./ProjectBadge";
import TechBadge from "./TechBadge";
import ThemedIcon from "./ThemeIcon";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400); // Wait for the exit animation duration
  }, [onClose]);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsClosing(false);
  }, [project]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  if (!project) return null;

  const gallery = project.gallery?.length ? project.gallery : [{ lightSrc: project.imageSrc, darkSrc: project.imageDarkSrc }];
  const hasMultipleImages = gallery.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm ${isClosing ? 'animate-overlay-hide' : 'animate-overlay-show'}`}>
      {/* Click away to close */}
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-5xl max-h-[90vh] bg-surface rounded-2xl md:rounded-4xl shadow-2xl overflow-y-auto flex flex-col z-10 ${isClosing ? 'animate-modal-out' : 'animate-modal-in'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-400">
          <div>
            <h2 className="text-2xl font-bold text-dark-400 dark:text-light-100">{project.title}</h2>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <div className="text-caption2">
                {project.year || "2025"}
              </div>
              {project.projectBadges.map((badge) => (
                <ProjectBadge key={badge.id} variant={badge.variant}>
                  {badge.label}
                </ProjectBadge>
              ))}
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full border border-light-400 dark:border-light-200 text-dark-400 dark:text-light-100 hover:bg-light-100 dark:hover:bg-dark-300 cursor-pointer transition-colors shrink-0"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-col lg:flex-row flex-1 p-6 gap-8">
          
          {/* Left Column: Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <div className="relative w-full aspect-video bg-light-100 dark:bg-dark-300 rounded-xl overflow-hidden group">
               {/* Image rendering with dark mode support */}
               {gallery[currentImageIndex].darkSrc ? (
                  <>
                    <Image 
                      src={gallery[currentImageIndex].lightSrc} 
                      alt={`${project.title} image ${currentImageIndex + 1}`} 
                      fill 
                      className="object-cover dark:hidden" 
                    />
                    <Image 
                      src={gallery[currentImageIndex].darkSrc!} 
                      alt={`${project.title} image ${currentImageIndex + 1}`} 
                      fill 
                      className="object-cover hidden dark:block" 
                    />
                  </>
                ) : (
                  <Image 
                    src={gallery[currentImageIndex].lightSrc} 
                    alt={`${project.title} image ${currentImageIndex + 1}`} 
                    fill 
                    className="object-cover" 
                  />
                )}
                
              {/* Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-dark-400/80 hover:bg-white dark:hover:bg-dark-400 rounded-full flex items-center justify-center text-dark-400 dark:text-light-100 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-dark-400/80 hover:bg-white dark:hover:bg-dark-400 rounded-full flex items-center justify-center text-dark-400 dark:text-light-100 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Counter */}
                  <div className="absolute right-4 bottom-4 px-3 py-1 bg-white/80 dark:bg-dark-400/80 rounded-full text-xs font-medium text-dark-400 dark:text-light-100 backdrop-blur-sm">
                    {currentImageIndex + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>
            
            {/* Thumbnails */}
            {hasMultipleImages && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      currentImageIndex === idx 
                        ? "border-accent" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {img.darkSrc ? (
                      <>
                        <Image src={img.lightSrc} alt="Thumbnail" fill className="object-cover dark:hidden" />
                        <Image src={img.darkSrc} alt="Thumbnail" fill className="object-cover hidden dark:block" />
                      </>
                    ) : (
                      <Image src={img.lightSrc} alt="Thumbnail" fill className="object-cover" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="w-full lg:w-2/5 flex flex-col border-t lg:border-t-0 lg:border-l border-light-400 pt-6 lg:pt-0 lg:pl-6 pb-6 lg:pb-0">
            
            <div className="flex-1">
              <h3 className="text-caption2 tracking-wider uppercase mb-3">Descripción</h3>
              <p className="text-dark-400 dark:text-light-100 leading-relaxed text-md mb-8">
                {project.modalDescriptionKey || project.descriptionKey}
              </p>
              
              <h3 className="text-caption2 tracking-wider uppercase mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {(project.modalTechBadges || project.techBadges).map((tech) => (
                  <TechBadge 
                    key={tech.id} 
                    name={tech.name} 
                    lightSrc={tech.lightSrc} 
                    darkSrc={tech.darkSrc} 
                  />
                ))}
              </div>
            </div>

            {/* Acciones ubicadas siempre al final gracias al flex-col */}
            <div className="mt-auto flex flex-col gap-3 w-full">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-light-200 dark:border-dark-200 text-dark-400 dark:text-light-100 font-medium hover:bg-light-100 dark:hover:bg-dark-300 transition-colors"
                >
                  <Github size={18} /> Ver en GitHub
                </a>
              )}

              {project.figmaUrl && (
                <a 
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-light-200 dark:border-dark-200 text-dark-400 dark:text-light-100 font-medium hover:bg-light-100 dark:hover:bg-dark-300 transition-colors"
                >
                  <Figma size={18} /> Ver en Figma
                </a>
              )}

              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-light-200 dark:border-dark-200 bg-dark-400 dark:bg-light-100 text-light-100 dark:text-dark-400 font-medium hover:bg-dark-300 dark:hover:bg-white transition-colors shadow-sm"
                >
                  <ExternalLink size={18} /> Demo en vivo
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
