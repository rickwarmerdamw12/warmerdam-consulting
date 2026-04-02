'use client';

import { useTranslations } from 'next-intl';
import { MapPin, BarChart3, Lightbulb, Eye } from 'lucide-react';
import {
  Badge,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
  GradientText,
} from '@/components/ui';

export default function AboutPage() {
  const t = useTranslations('about');
  const tHome = useTranslations('home');

  const values = [
    { icon: BarChart3, title: t('values.value1.title'), desc: t('values.value1.description') },
    { icon: Eye, title: t('values.value2.title'), desc: t('values.value2.description') },
    { icon: Lightbulb, title: t('values.value3.title'), desc: t('values.value3.description') },
  ];

  return (
    <>
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <Badge>{t('hero.badge')}</Badge>
            <h1 className="mt-6 text-4xl font-serif font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              <GradientText>{t('hero.title')}</GradientText>
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section bg="secondary">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-3xl font-bold text-background-primary mb-6">
              RW
            </div>
            <h2 className="text-3xl font-serif font-bold text-text-primary">
              {t('rick.name')}
            </h2>
            <p className="text-accent-primary font-medium mt-1">{t('rick.role')}</p>
            <div className="flex items-center gap-2 text-text-secondary mt-2">
              <MapPin className="h-4 w-4" />
              <span>{t('rick.location')}</span>
              <span className="text-border">|</span>
              <span>{t('rick.age')}</span>
            </div>
            <p className="mt-6 text-text-secondary leading-relaxed">
              {t('rick.bio')}
            </p>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-text-primary">{t('mission.title')}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {t('mission.description')}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="text-3xl font-serif font-bold text-text-primary text-center mb-12">
            {t('values.title')}
          </h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8 text-center hover:border-accent-primary/30 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 mx-auto">
                  <Icon className="h-7 w-7 text-accent-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-text-primary">{value.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </StaggerChildren>
      </Section>

      <Section bg="secondary">
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
