import React from "react";

interface ProjectBadgeProps {
  variant: "uiux" | "web" | "mobile" | "desktop" | string;
  children: React.ReactNode;
}

export default function ProjectBadge({ variant, children }: ProjectBadgeProps) {
  return (
    <p className={`badge-${variant} px-3 py-1 rounded-full font-medium text-sm`}>
      {children}
    </p>
  );
}
