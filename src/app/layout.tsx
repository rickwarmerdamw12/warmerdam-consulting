import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Warmerdam Consulting - De eerste GEO-agency van Nederland',
  description:
    'ChatGPT, Gemini en Perplexity bepalen wie er aanbevolen wordt. Warmerdam Consulting zorgt dat jouw bedrijf daar zichtbaar is.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
