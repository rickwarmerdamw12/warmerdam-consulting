'use client';

import { useTranslations } from 'next-intl';
import {
  Badge,
  BlogCard,
  FadeIn,
  StaggerChildren,
  Section,
} from '@/components/ui';

export default function KennisbankPage() {
  const t = useTranslations('knowledgeBase');

  const articles = [
    {
      title: t('articles.article1.title'),
      excerpt: t('articles.article1.excerpt'),
      category: t('articles.article1.category'),
      readTime: t('articles.article1.readTime'),
      slug: 'wat-is-geo',
    },
    {
      title: t('articles.article2.title'),
      excerpt: t('articles.article2.excerpt'),
      category: t('articles.article2.category'),
      readTime: t('articles.article2.readTime'),
      slug: '5-manieren-ai-zichtbaarheid',
    },
    {
      title: t('articles.article3.title'),
      excerpt: t('articles.article3.excerpt'),
      category: t('articles.article3.category'),
      readTime: t('articles.article3.readTime'),
      slug: 'toekomst-van-zoeken',
    },
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
        <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              date=""
              readTime={article.readTime}
              href={`/kennisbank/${article.slug}`}
            />
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
