"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // Negatief = langzamer, positief = sneller dan scroll
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Volg de scroll positie relatief aan dit element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Van wanneer element in beeld komt tot wanneer het eruit gaat
  });

  // Transformeer scroll progress naar Y-beweging
  // Bij speed=0.5 beweegt het element 100px omhoog/omlaag tijdens scroll
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="will-change-transform" // Optimalisatie hint voor browser
      >
        {children}
      </motion.div>
    </div>
  );
}
