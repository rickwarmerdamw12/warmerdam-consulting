'use client';

import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'default' | 'gradient' | 'outline';
  title: string;
  subtitle?: string;
  gradientWords?: string[];
  align?: 'left' | 'center';
  className?: string;
  size?: 'default' | 'large' | 'hero';
}

export default function SectionHeading({
  badge,
  badgeVariant = 'default',
  title,
  subtitle,
  gradientWords = [],
  align = 'center',
  className = '',
  size = 'default',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  const titleSizeClass = {
    default: 'text-3xl sm:text-4xl lg:text-5xl',
    large: 'text-4xl sm:text-5xl lg:text-6xl',
    hero: 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl',
  }[size];

  function renderTitle() {
    if (gradientWords.length === 0) return title;

    const regex = new RegExp(`(${gradientWords.join('|')})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, i) => {
      if (gradientWords.some((w) => w.toLowerCase() === part.toLowerCase())) {
        return (
          <span
            key={i}
            className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  }

  return (
    <div className={`${alignClass} ${className}`}>
      {badge && (
        <div className={`mb-6 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`font-serif font-bold tracking-tight text-text-primary ${titleSizeClass}`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed"
          style={align === 'center' ? { marginInline: 'auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
