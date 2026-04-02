'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeft, CheckCircle, Quote } from 'lucide-react';
import {
  Badge,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
  GradientText,
} from '@/components/ui';

export default function TaaiCasePage() {
  const t = useTranslations('taai');
  const tHome = useTranslations('home');

  const approachSteps = [
    t('approach.step1'),
    t('approach.step2'),
    t('approach.step3'),
    t('approach.step4'),
    t('approach.step5'),
  ];

  const stats = [
    { value: t('results.stat1.value'), label: t('results.stat1.label') },
    { value: t('results.stat2.value'), label: t('results.stat2.label') },
    { value: t('results.stat3.value'), label: t('results.stat3.label') },
    { value: t('results.stat4.value'), label: t('results.stat4.label') },
  ];

  return (
    <>
      <Section>
        <FadeIn>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar case studies
          </Link>

          <div className="max-w-4xl">
            <Badge>{t('hero.badge')}</Badge>
            <h1 className="mt-6 text-4xl font-serif font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {t('hero.client')}
            </h1>
            <p className="mt-4 text-2xl text-text-secondary">
              {t('hero.title')}
            </p>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section bg="secondary">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <h2 className="text-2xl font-serif font-bold text-text-primary">
              {t('challenge.title')}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {t('challenge.description')}
            </p>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-2xl font-serif font-bold text-text-primary">
              {t('approach.title')}
            </h2>
            <div className="mt-4 space-y-3">
              {approachSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-primary mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="text-3xl font-serif font-bold text-text-primary text-center mb-12">
            <GradientText>{t('results.title')}</GradientText>
          </h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative text-center p-8 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
              <div className="text-4xl font-bold font-serif">
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section bg="secondary">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-accent-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed italic">
              &ldquo;{t('testimonial.quote')}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-text-primary">{t('testimonial.author')}</p>
              <p className="text-text-secondary">{t('testimonial.role')}</p>
            </div>
          </div>
        </FadeIn>
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
