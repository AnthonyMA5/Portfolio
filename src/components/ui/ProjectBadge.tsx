import React from "react";

interface ProjectBadgeProps {
  variant: "uiux" | "web" | "mobile" | "desktop" | "smartwatch" | string;
  children: React.ReactNode;
}

export default function ProjectBadge({ variant, children }: ProjectBadgeProps) {
  return (
    <div className={`badge-${variant} px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1.5 w-fit`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
