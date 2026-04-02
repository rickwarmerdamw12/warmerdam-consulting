'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-block rounded-full px-4 py-1.5 text-sm font-medium';

  const variantClasses = {
    default: 'bg-accent-primary/10 text-accent-primary',
    gradient:
      'bg-gradient-to-r from-accent-primary to-accent-secondary text-background-primary font-semibold',
    outline: 'border border-accent-primary/30 text-accent-primary bg-transparent',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
