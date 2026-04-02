import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: '[AGENCY_NAME] - De eerste GEO-agency van Nederland',
  description:
    'ChatGPT, Gemini en Perplexity bepalen wie er aanbevolen wordt. [AGENCY_NAME] zorgt dat jouw bedrijf daar zichtbaar is.',
  keywords: [
    'GEO',
    'Generative Engine Optimization',
    'AI-zichtbaarheid',
    'ChatGPT marketing',
    'AI SEO',
    'Nederland',
  ],
  authors: [{ name: '[AGENCY_NAME]' }],
  creator: '[AGENCY_NAME]',
  metadataBase: new URL('https://warmerdamconsulting.nl'),
  openGraph: {
    title: '[AGENCY_NAME] - De eerste GEO-agency van Nederland',
    description:
      'ChatGPT, Gemini en Perplexity bepalen wie er aanbevolen wordt. [AGENCY_NAME] zorgt dat jouw bedrijf daar zichtbaar is.',
    url: 'https://warmerdamconsulting.nl',
    siteName: '[AGENCY_NAME]',
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[AGENCY_NAME] - De eerste GEO-agency van Nederland',
    description:
      'ChatGPT, Gemini en Perplexity bepalen wie er aanbevolen wordt. [AGENCY_NAME] zorgt dat jouw bedrijf daar zichtbaar is.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'nl' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body className="bg-background-primary text-text-primary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
