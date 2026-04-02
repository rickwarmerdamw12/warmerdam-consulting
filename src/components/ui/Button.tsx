'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-3',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-primary to-accent-secondary text-background-primary font-semibold shadow-lg shadow-accent-primary/20',
  secondary:
    'border-2 border-border text-text-primary hover:border-accent-primary/50 bg-transparent',
  ghost: 'text-text-primary bg-transparent hover:text-accent-primary',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const hoverAnimation = {
    scale: 1.02,
    boxShadow:
      variant === 'primary'
        ? '0 0 30px rgba(255, 107, 0, 0.4), 0 0 60px rgba(255, 154, 60, 0.2)'
        : variant === 'secondary'
        ? '0 0 20px rgba(255, 107, 0, 0.2)'
        : undefined,
  };

  const tapAnimation = { scale: 0.98 };

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={!disabled ? hoverAnimation : undefined}
      whileTap={!disabled ? tapAnimation : undefined}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </motion.button>
  );
}
