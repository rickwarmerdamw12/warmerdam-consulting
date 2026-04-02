"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        // Gradient van groen (#00E5A0) naar blauw (#00B4D8)
        background: "linear-gradient(135deg, #00E5A0 0%, #00B4D8 100%)",
        // Maak de achtergrond alleen zichtbaar door de tekst
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        // Maak de tekst transparant zodat de gradient zichtbaar is
        WebkitTextFillColor: "transparent",
        color: "transparent",
        // Zorg ervoor dat de gradient inline met de tekst loopt
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}
