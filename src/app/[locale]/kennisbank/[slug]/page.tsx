import { Link } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';
import { Badge, Button, Section, FadeIn } from '@/components/ui';

export function generateStaticParams() {
  return [
    { slug: 'wat-is-geo' },
    { slug: '5-manieren-ai-zichtbaarheid' },
    { slug: 'toekomst-van-zoeken' },
  ];
}

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale } = await params;

  return (
    <Section>
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/kennisbank"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'nl' ? 'Terug naar kennisbank' : 'Back to knowledge base'}
          </Link>

          <Badge variant="outline">
            {locale === 'nl' ? 'Binnenkort beschikbaar' : 'Coming soon'}
          </Badge>

          <h1 className="mt-6 text-3xl font-serif font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {locale === 'nl' ? 'Artikel komt eraan' : 'Article coming soon'}
          </h1>

          <p className="mt-6 text-lg text-text-secondary">
            {locale === 'nl'
              ? 'We werken hard aan nieuwe content voor onze kennisbank. Dit artikel is binnenkort beschikbaar.'
              : 'We are working hard on new content for our knowledge base. This article will be available soon.'}
          </p>

          <div className="mt-10">
            <Button href="/kennisbank" variant="primary" size="lg">
              {locale === 'nl' ? 'Bekijk andere artikelen' : 'View other articles'}
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
