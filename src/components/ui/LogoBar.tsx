'use client';

import { motion } from 'framer-motion';

interface Logo {
  name: string;
  src: string;
  alt?: string;
}

interface LogoBarProps {
  logos: Logo[];
  speed?: number;
  className?: string;
  grayscale?: boolean;
}

export default function LogoBar({
  logos,
  speed = 30,
  className = '',
  grayscale = true,
}: LogoBarProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient fade on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

      {/* Scrolling container */}
      <motion.div
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="flex items-center gap-16"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`flex-shrink-0 ${
              grayscale
                ? 'opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0'
                : ''
            }`}
          >
            <img
              src={logo.src}
              alt={logo.alt || logo.name}
              className="h-8 w-auto object-contain sm:h-10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
