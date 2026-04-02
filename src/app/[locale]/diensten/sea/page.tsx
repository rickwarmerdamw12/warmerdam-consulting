'use client';

import { useTranslations } from 'next-intl';
import { Search, LayoutGrid, RefreshCw, BarChart3 } from 'lucide-react';
import {
  Badge,
  SectionHeading,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
} from '@/components/ui';

export default function SEAServicePage() {
  const t = useTranslations('sea');
  const tHome = useTranslations('home');

  const approachPoints = [
    { icon: Search, title: t('approach.point1.title'), desc: t('approach.point1.description') },
    { icon: LayoutGrid, title: t('approach.point2.title'), desc: t('approach.point2.description') },
    { icon: RefreshCw, title: t('approach.point3.title'), desc: t('approach.point3.description') },
    { icon: BarChart3, title: t('approach.point4.title'), desc: t('approach.point4.description') },
  ];

  return (
    <>
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <Badge>{t('hero.badge')}</Badge>
            <h1 className="mt-6 text-4xl font-serif font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section bg="secondary">
        <FadeIn>
          <SectionHeading title={t('approach.title')} gradientWords={['aanpak']} />
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="mt-16 grid gap-6 max-w-4xl mx-auto">
          {approachPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="group flex flex-col sm:flex-row items-start gap-6 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-accent-primary/50"
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent-primary/30 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent-primary" />
                  </div>
                  <span className="sm:mt-2 text-sm font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </Section>

      <Section>
        <FadeIn>
          <CTABanner
            title={tHome('ctaBanner.title')}
            subtitle={tHome('ctaBanner.subtitle')}
            buttonText={tHome('ctaBanner.cta')}
            buttonHref="/geo-scan"
          />
        </FadeIn>
      </Section>
    </>
  );
}
