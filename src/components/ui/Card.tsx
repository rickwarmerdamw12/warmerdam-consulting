'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glowOnHover = true,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        hover
          ? {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1000,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      whileHover={
        glowOnHover
          ? {
              boxShadow: '0 0 40px rgba(255, 107, 0, 0.15)',
              borderColor: 'rgba(255, 107, 0, 0.3)',
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
