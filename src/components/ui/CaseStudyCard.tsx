'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
  href: string;
  linkText?: string;
  className?: string;
}

export default function CaseStudyCard({
  title,
  subtitle,
  metrics,
  href,
  linkText = 'Bekijk case',
  className = '',
}: CaseStudyCardProps) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative h-full overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl transition-all duration-300 hover:border-accent-primary/30"
      >
        <div className="h-1 w-full bg-gradient-to-r from-accent-primary to-accent-secondary" />

        <div className="p-8">
          <h3 className="text-2xl font-serif font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-text-secondary">{subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {metrics.map((metric) => (
              <span
                key={metric.label}
                className="rounded-full border border-border bg-background-primary px-3 py-1.5 text-sm"
              >
                <span className="font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  {metric.value}
                </span>{' '}
                <span className="text-text-secondary">{metric.label}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ boxShadow: '0 0 40px rgba(255, 107, 0, 0.1)' }}
        />
      </motion.div>
    </Link>
  );
}
