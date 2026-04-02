'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dienstenLinks = [
    { label: t('geo'), href: '/diensten/geo' as const },
    { label: t('website'), href: '/diensten/website' as const },
    { label: t('sea'), href: '/diensten/sea' as const },
  ];

  const bedrijfLinks = [
    { label: t('about'), href: '/over-ons' as const },
    { label: t('caseStudies'), href: '/case-studies' as const },
    { label: t('knowledgeBase'), href: '/kennisbank' as const },
    { label: t('contact'), href: '/contact' as const },
  ];

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="border-t border-border bg-background-primary">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl font-serif font-bold text-text-primary tracking-tight">
                {tCommon('agencyName')}
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary max-w-xs">
              De eerste GEO-agency van Nederland. Wij helpen bedrijven zichtbaar worden in het AI-tijdperk.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('services')}
            </h3>
            <ul className="mt-4 space-y-3">
              {dienstenLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('company')}
            </h3>
            <ul className="mt-4 space-y-3">
              {bedrijfLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('newsletter')}
            </h3>
            <p className="mt-4 text-sm text-text-secondary">
              {t('newsletterText')}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    required
                    className="w-full rounded-lg border border-border bg-background-secondary py-2.5 pl-10 pr-3 text-sm text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-2.5 text-background-primary transition-all hover:shadow-lg hover:shadow-accent-primary/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-background-primary border-t-transparent" />
                  ) : isSubmitted ? (
                    <span className="text-sm font-medium">✓</span>
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </motion.button>
              </div>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-accent-primary"
                >
                  Bedankt voor je aanmelding!
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {tCommon('agencyName')}. {t('copyright')}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-muted">
              Meteren, NL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
