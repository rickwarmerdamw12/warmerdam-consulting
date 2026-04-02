'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Send } from 'lucide-react';
import {
  Badge,
  FadeIn,
  Section,
  Button,
} from '@/components/ui';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section bg="secondary">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            {isSubmitted ? (
              <div className="rounded-2xl border border-accent-primary/30 bg-background-card/80 backdrop-blur-xl p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mx-auto mb-6">
                  <Send className="h-8 w-8 text-background-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary">{t('form.success')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.company')}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border bg-background-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-xl border border-border bg-background-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition-colors focus:border-accent-primary resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Versturen...' : t('form.submit')}
                </Button>
              </form>
            )}
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Direct contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                      <Mail className="h-6 w-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">E-mail</p>
                      <p className="text-text-primary font-medium">{t('info.email')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                      <MapPin className="h-6 w-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">Locatie</p>
                      <p className="text-text-primary font-medium">{t('info.location')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
