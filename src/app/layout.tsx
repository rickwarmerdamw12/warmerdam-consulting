import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '[AGENCY_NAME] - De eerste GEO-agency van Nederland',
  description:
    'ChatGPT, Gemini en Perplexity bepalen wie er aanbevolen wordt. [AGENCY_NAME] zorgt dat jouw bedrijf daar zichtbaar is.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
