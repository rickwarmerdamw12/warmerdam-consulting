'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1280px] px-6 py-24 md:py-32 ${className || ''}`}
    >
      {children}
    </section>
  );
}
