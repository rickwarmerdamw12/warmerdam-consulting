'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, Send, BarChart3, Users, Lightbulb } from 'lucide-react';
import {
  Badge,
  FadeIn,
  StaggerChildren,
  Section,
  Button,
  GradientText,
} from '@/components/ui';

export default function GeoScanPage() {
  const t = useTranslations('geoScan');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatYouGet = [
    { icon: BarChart3, title: t('what.point1.title'), desc: t('what.point1.description') },
    { icon: Users, title: t('what.point2.title'), desc: t('what.point2.description') },
    { icon: Lightbulb, title: t('what.point3.title'), desc: t('what.point3.description') },
  ];

  const howItWorks = [
    { num: t('how.step1.number'), title: t('how.step1.title'), desc: t('how.step1.description') },
    { num: t('how.step2.number'), title: t('how.step2.title'), desc: t('how.step2.description') },
    { num: t('how.step3.number'), title: t('how.step3.title'), desc: t('how.step3.description') },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-8">
                {t('what.title')}
              </h2>
            </FadeIn>

            <StaggerChildren staggerDelay={0.1} className="space-y-6">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-6 hover:border-accent-primary/30 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <p className="mt-1 text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </div>

          <FadeIn direction="right">
            {isSubmitted ? (
              <div className="rounded-2xl border border-accent-primary/30 bg-background-card/80 backdrop-blur-xl p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-background-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary">{t('form.success')}</h3>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-6">
                  Vraag je gratis scan aan
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background-secondary px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-background-secondary px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.company')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background-secondary px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.website')}
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://"
                      className="w-full rounded-xl border border-border bg-background-secondary px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Versturen...' : t('form.submit')}
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    {t('form.privacy')}
                  </p>
                </form>
              </div>
            )}
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="text-2xl font-serif font-bold text-text-primary text-center mb-12">
            {t('how.title')}
          </h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-xl font-bold text-background-primary mx-auto mb-6">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
