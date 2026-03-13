"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ThemedIcon({ lightSrc, darkSrc, alt, width = 30, height = 30, className = "w-full h-full object-contain" }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ width, height }} />
    );
  }

  return (
    <Image
      src={resolvedTheme === "dark" ? darkSrc : lightSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}