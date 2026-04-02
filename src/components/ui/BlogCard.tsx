'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  date: string;
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  readTime?: string;
  linkText?: string;
  className?: string;
}

export default function BlogCard({
  date,
  category,
  title,
  excerpt,
  href,
  readTime,
  linkText = 'Lees artikel',
  className = '',
}: BlogCardProps) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="h-full overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl transition-all duration-300 hover:border-accent-primary/30"
      >
        <div className="p-8">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Calendar className="h-4 w-4" />
              <time>{date}</time>
            </div>
            {category && <Badge variant="default">{category}</Badge>}
            {readTime && (
              <span className="text-text-secondary">{readTime}</span>
            )}
          </div>

          <h3 className="mt-4 text-xl font-serif font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="mt-3 text-text-secondary leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
