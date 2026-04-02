'use client';

import { useTranslations } from 'next-intl';
import { Zap, Layers, TrendingUp, Code2 } from 'lucide-react';
import {
  Badge,
  SectionHeading,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
} from '@/components/ui';

export default function WebsiteServicePage() {
  const t = useTranslations('website');
  const tHome = useTranslations('home');

  const services = [
    { icon: Zap, title: t('services.service1.title'), desc: t('services.service1.description') },
    { icon: Layers, title: t('services.service2.title'), desc: t('services.service2.description') },
    { icon: TrendingUp, title: t('services.service3.title'), desc: t('services.service3.description') },
    { icon: Code2, title: t('services.service4.title'), desc: t('services.service4.description') },
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
          <SectionHeading title={t('services.title')} gradientWords={['doen']} />
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8 transition-all duration-300 hover:border-accent-primary/50"
              >
                <span className="absolute -right-4 -top-4 text-[120px] font-bold leading-none bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent opacity-[0.07] group-hover:opacity-[0.15] transition-opacity select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent-primary" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {service.desc}
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
