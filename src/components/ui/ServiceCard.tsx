'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  className?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
  linkText = 'Meer informatie',
  className = '',
}: ServiceCardProps) {
  const content = (
    <motion.div
      whileHover="hover"
      initial="rest"
      className={`group relative overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8 transition-all duration-300 h-full ${className}`}
    >
      <motion.span
        variants={{
          rest: { opacity: 0.08, scale: 1 },
          hover: { opacity: 0.2, scale: 1.1 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute -right-4 -top-4 text-[140px] font-bold leading-none bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent select-none"
      >
        {number}
      </motion.span>

      <div className="relative z-10">
        <h3 className="text-2xl font-serif font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-4 text-text-secondary leading-relaxed">{description}</p>

        {href && (
          <motion.div
            variants={{
              rest: { opacity: 0.7, x: 0 },
              hover: { opacity: 1, x: 5 },
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-primary"
          >
            {linkText} <ArrowRight className="h-4 w-4" />
          </motion.div>
        )}
      </div>

      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl border border-accent-primary/40 pointer-events-none"
        style={{ boxShadow: '0 0 30px rgba(255, 107, 0, 0.1)' }}
      />
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }

  return content;
}
