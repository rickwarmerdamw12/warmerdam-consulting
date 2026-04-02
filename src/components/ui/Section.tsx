import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: 'primary' | 'secondary';
  id?: string;
}

const bgClasses = {
  primary: 'bg-background-primary',
  secondary: 'bg-background-secondary',
};

export default function Section({
  children,
  className = '',
  bg = 'primary',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgClasses[bg]} py-20 md:py-32`}>
      <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>
    </section>
  );
}
