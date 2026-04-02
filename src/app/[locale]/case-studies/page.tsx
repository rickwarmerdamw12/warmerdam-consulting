'use client';

import { useTranslations } from 'next-intl';
import {
  Badge,
  CaseStudyCard,
  CTABanner,
  FadeIn,
  Section,
} from '@/components/ui';

export default function CaseStudiesPage() {
  const t = useTranslations('caseStudies');
  const tTaai = useTranslations('taai');
  const tHome = useTranslations('home');

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
        <FadeIn className="max-w-3xl mx-auto">
          <CaseStudyCard
            title={tTaai('hero.client')}
            subtitle={tTaai('hero.subtitle')}
            metrics={[
              { value: tTaai('results.stat1.value'), label: tTaai('results.stat1.label') },
              { value: tTaai('results.stat2.value'), label: tTaai('results.stat2.label') },
              { value: tTaai('results.stat3.value'), label: tTaai('results.stat3.label') },
            ]}
            href="/case-studies/taai"
          />
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
