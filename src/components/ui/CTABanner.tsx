'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = '',
}: CTABannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10" />

      <div className="absolute inset-0 rounded-3xl border border-border" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent" />

      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent-primary/10 blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[100px]" />

      <div className="relative px-8 py-16 text-center sm:px-16 lg:py-20">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-serif font-bold text-text-primary sm:text-3xl lg:text-4xl"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-lg text-text-secondary"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={buttonHref} size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            {buttonText}
          </Button>
          {secondaryButtonText && secondaryButtonHref && (
            <Button href={secondaryButtonHref} variant="secondary" size="lg">
              {secondaryButtonText}
            </Button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
