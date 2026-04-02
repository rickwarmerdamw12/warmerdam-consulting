'use client';

import { useTranslations } from 'next-intl';
import {
  Badge,
  SectionHeading,
  ServiceCard,
  FAQ,
  CTABanner,
  FadeIn,
  StaggerChildren,
  Section,
} from '@/components/ui';

export default function DienstenPage() {
  const t = useTranslations('services');
  const tHome = useTranslations('home');

  const steps = [
    { num: t('process.step1.number'), title: t('process.step1.title'), desc: t('process.step1.description') },
    { num: t('process.step2.number'), title: t('process.step2.title'), desc: t('process.step2.description') },
    { num: t('process.step3.number'), title: t('process.step3.title'), desc: t('process.step3.description') },
    { num: t('process.step4.number'), title: t('process.step4.title'), desc: t('process.step4.description') },
  ];

  const faqItems = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
    { question: t('faq.q6.question'), answer: t('faq.q6.answer') },
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
        <StaggerChildren
          staggerDelay={0.15}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <ServiceCard
            number={tHome('services.geo.number')}
            title={tHome('services.geo.title')}
            description={tHome('services.geo.description')}
            href="/diensten/geo"
          />
          <ServiceCard
            number={tHome('services.website.number')}
            title={tHome('services.website.title')}
            description={tHome('services.website.description')}
            href="/diensten/website"
          />
          <ServiceCard
            number={tHome('services.sea.number')}
            title={tHome('services.sea.title')}
            description={tHome('services.sea.description')}
            href="/diensten/sea"
          />
        </StaggerChildren>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            badge={t('process.subtitle')}
            title={t('process.title')}
            gradientWords={['aanpak']}
          />
        </FadeIn>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary opacity-20" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <FadeIn key={step.num} delay={i * 0.15} direction={isEven ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                      <p className="mt-2 text-text-secondary leading-relaxed max-w-md inline-block">
                        {step.desc}
                      </p>
                    </div>

                    <div className="relative flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent-primary/30 bg-background-card">
                        <span className="text-lg font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <FadeIn>
          <SectionHeading
            title={t('faq.title')}
            gradientWords={['vragen']}
          />
        </FadeIn>
        <div className="mt-12 max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <FAQ items={faqItems} />
          </FadeIn>
        </div>
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
