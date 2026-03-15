import React from "react";
import ThemedIcon from "./ThemeIcon";

interface TechBadgeProps {
  name: string;
  lightSrc: string;
  darkSrc?: string;
}

export default function TechBadge({ name, lightSrc, darkSrc }: TechBadgeProps) {
  return (
    <div className="badge-tech w-fit">
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        <ThemedIcon 
          lightSrc={lightSrc} 
          darkSrc={darkSrc || lightSrc} 
          alt={name} 
          width={20} 
          height={20} 
        />
      </div>
      <span>{name}</span>
    </div>
  );
}
