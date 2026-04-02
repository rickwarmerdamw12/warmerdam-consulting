import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import {
  Badge,
  GradientText,
  FadeIn,
  StaggerChildren,
  Section,
  AnimatedCounter,
  ServiceCard,
  CaseStudyCard,
  CTABanner,
  TestimonialCard,
} from '@/components/ui';
import HeroVisual from '@/components/animations/HeroVisual';

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations('home');

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent-primary/[0.07] blur-[120px]" />
          <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent-secondary/[0.05] blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-primary/[0.04] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10 grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <FadeIn delay={0}>
              <Badge>{t('hero.badge')}</Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-serif font-bold tracking-tight text-text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
                Word <GradientText>gevonden</GradientText> door{' '}
                <GradientText>AI</GradientText> voordat je concurrent het doet
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-text-secondary md:text-xl leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/geo-scan"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wide rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-background-primary shadow-lg shadow-accent-primary/20 hover:shadow-xl hover:shadow-accent-primary/30 transition-all"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/diensten"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-sm tracking-wide rounded-xl border-2 border-border text-text-primary hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="right" className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <Section bg="secondary">
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center p-8 rounded-2xl border border-border bg-background-card/50">
              <AnimatedCounter
                target={3}
                suffix="x"
                className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
              />
              <p className="mt-3 text-text-secondary">{t('stats.stat1.label')}</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border border-border bg-background-card/50">
              <AnimatedCounter
                target={47}
                suffix="%"
                className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
              />
              <p className="mt-3 text-text-secondary">{t('stats.stat2.label')}</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border border-border bg-background-card/50">
              <AnimatedCounter
                target={12}
                suffix="+"
                className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
              />
              <p className="mt-3 text-text-secondary">{t('stats.stat3.label')}</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* SERVICES */}
      <Section>
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">Diensten</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              {t('services.title')}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            number={t('services.geo.number')}
            title={t('services.geo.title')}
            description={t('services.geo.description')}
            href="/diensten/geo"
          />
          <ServiceCard
            number={t('services.website.number')}
            title={t('services.website.title')}
            description={t('services.website.description')}
            href="/diensten/website"
          />
          <ServiceCard
            number={t('services.sea.number')}
            title={t('services.sea.title')}
            description={t('services.sea.description')}
            href="/diensten/sea"
          />
        </StaggerChildren>
      </Section>

      {/* WHY GEO */}
      <Section bg="secondary">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <Badge className="mb-4">{t('whyGeo.subtitle')}</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              {t('whyGeo.title')} met <GradientText>GEO</GradientText>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {t('whyGeo.description')}
            </p>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0} direction="right">
              <div className="flex gap-5 rounded-2xl border border-border bg-background-card/80 p-6 backdrop-blur-xl hover:border-accent-primary/30 transition-colors">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-background-primary">
                  01
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{t('whyGeo.point1.title')}</h3>
                  <p className="mt-1 text-text-secondary leading-relaxed">{t('whyGeo.point1.description')}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="flex gap-5 rounded-2xl border border-border bg-background-card/80 p-6 backdrop-blur-xl hover:border-accent-primary/30 transition-colors">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-background-primary">
                  02
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{t('whyGeo.point2.title')}</h3>
                  <p className="mt-1 text-text-secondary leading-relaxed">{t('whyGeo.point2.description')}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="flex gap-5 rounded-2xl border border-border bg-background-card/80 p-6 backdrop-blur-xl hover:border-accent-primary/30 transition-colors">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-background-primary">
                  03
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{t('whyGeo.point3.title')}</h3>
                  <p className="mt-1 text-text-secondary leading-relaxed">{t('whyGeo.point3.description')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CASE STUDY */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4">{t('caseStudy.badge')}</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              {t('caseStudy.title')}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {t('caseStudy.subtitle')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto max-w-3xl">
          <CaseStudyCard
            title={t('caseStudy.title')}
            subtitle={t('caseStudy.subtitle')}
            metrics={[
              { value: t('caseStudy.stat1.value'), label: t('caseStudy.stat1.label') },
              { value: t('caseStudy.stat2.value'), label: t('caseStudy.stat2.label') },
              { value: t('caseStudy.stat3.value'), label: t('caseStudy.stat3.label') },
            ]}
            href="/case-studies/taai"
            linkText={t('caseStudy.cta')}
          />
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="secondary">
        <FadeIn>
          <CTABanner
            title={t('ctaBanner.title')}
            subtitle={t('ctaBanner.subtitle')}
            buttonText={t('ctaBanner.cta')}
            buttonHref="/geo-scan"
          />
        </FadeIn>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              {t('testimonials.title')}
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-2">
          <TestimonialCard
            quote={t('testimonials.testimonial1.quote')}
            name={t('testimonials.testimonial1.author')}
            role={t('testimonials.testimonial1.role')}
          />
          <TestimonialCard
            quote={t('testimonials.testimonial2.quote')}
            name={t('testimonials.testimonial2.author')}
            role={t('testimonials.testimonial2.role')}
          />
        </StaggerChildren>
      </Section>
    </>
  );
}
