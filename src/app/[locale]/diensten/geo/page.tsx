'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle, Search, FileText, Settings, Award } from 'lucide-react';
import {
  Badge,
  SectionHeading,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
  GradientText,
} from '@/components/ui';

export default function GeoServicePage() {
  const t = useTranslations('geo');
  const tHome = useTranslations('home');

  const whatPoints = [
    t('what.point1'),
    t('what.point2'),
    t('what.point3'),
    t('what.point4'),
  ];

  const howSteps = [
    { icon: Search, title: t('how.step1.title'), desc: t('how.step1.description') },
    { icon: FileText, title: t('how.step2.title'), desc: t('how.step2.description') },
    { icon: Settings, title: t('how.step3.title'), desc: t('how.step3.description') },
    { icon: Award, title: t('how.step4.title'), desc: t('how.step4.description') },
  ];

  const stats = [
    { value: t('results.result1.value'), label: t('results.result1.label') },
    { value: t('results.result2.value'), label: t('results.result2.label') },
    { value: t('results.result3.value'), label: t('results.result3.label') },
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
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <SectionHeading
              title={t('what.title')}
              align="left"
              gradientWords={['GEO']}
            />
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {t('what.description')}
            </p>
          </FadeIn>

          <div className="space-y-4">
            {whatPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="right">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-5 hover:border-accent-primary/30 transition-colors">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-accent-primary mt-0.5" />
                  <p className="text-text-primary leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            title={t('how.title')}
            gradientWords={['werkt']}
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {howSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-accent-primary/50"
              >
                <span className="absolute -right-2 -top-2 text-[80px] font-bold leading-none bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent opacity-10 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background-card">
                    <Icon className="h-6 w-6 text-accent-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </Section>

      <Section bg="secondary">
        <FadeIn>
          <SectionHeading
            title={t('results.title')}
            gradientWords={['verwachten']}
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-12 grid gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative text-center p-8 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

              <div className="text-5xl font-bold font-serif lg:text-6xl">
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="mt-3 text-text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
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
