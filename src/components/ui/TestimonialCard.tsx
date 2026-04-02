'use client';

import { motion } from 'framer-motion';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  className = '',
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`relative h-full ${className}`} hover={false} glowOnHover>
        <span className="absolute -top-2 left-4 text-7xl font-serif text-accent-primary/20 leading-none select-none">
          &ldquo;
        </span>

        <p className="relative z-10 mt-6 text-text-primary/90 text-lg leading-relaxed italic">
          {quote}
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary">
            <span className="text-lg font-bold text-background-primary">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-text-primary">{name}</p>
            <p className="text-sm text-text-secondary">
              {role}{company && `, ${company}`}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
