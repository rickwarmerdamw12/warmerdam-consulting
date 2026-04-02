'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function StatsGrid({
  stats,
  columns = 3,
  className = '',
}: StatsGridProps) {
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`grid grid-cols-1 gap-8 ${columnClasses[columns]} ${className}`}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="relative text-center p-8 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

          <div className="text-5xl font-bold lg:text-6xl font-serif">
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </span>
          </div>
          <p className="mt-4 text-text-secondary font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
