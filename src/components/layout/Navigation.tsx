'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { key: 'services', href: '/diensten' },
  { key: 'caseStudies', href: '/case-studies' },
  { key: 'knowledgeBase', href: '/kennisbank' },
  { key: 'about', href: '/over-ons' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Navigation() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<'nl' | 'en'>('nl');

  useEffect(() => {
    const isEnglish = window.location.pathname.startsWith('/en');
    setCurrentLocale(isEnglish ? 'en' : 'nl');
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const switchLocale = (newLocale: 'nl' | 'en') => {
    const currentPath = window.location.pathname;
    let newPath: string;

    if (newLocale === 'en') {
      if (currentPath === '/') {
        newPath = '/en';
      } else if (!currentPath.startsWith('/en')) {
        newPath = '/en' + currentPath;
      } else {
        newPath = currentPath;
      }
    } else {
      if (currentPath === '/en' || currentPath === '/en/') {
        newPath = '/';
      } else if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en', '');
      } else {
        newPath = currentPath;
      }
    }

    window.location.href = newPath;
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background-primary/80 transition-shadow ${
          scrolled ? 'shadow-lg shadow-black/30' : ''
        }`}
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-text-primary tracking-tight">
              {tCommon('agencyName')}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {t(item.key)}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-accent-primary transition-transform origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/geo-scan"
              className="hidden rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-2 text-sm font-semibold text-background-primary transition-all hover:shadow-lg hover:shadow-accent-primary/20 lg:inline-block"
            >
              {tCommon('cta.geoScan')}
            </Link>

            <div className="flex items-center gap-1 text-sm">
              <Globe size={14} className="text-text-secondary mr-1" />
              <button
                onClick={() => switchLocale('nl')}
                className={`px-1.5 py-1 font-medium transition-colors ${
                  currentLocale === 'nl'
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                NL
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`px-1.5 py-1 font-medium transition-colors ${
                  currentLocale === 'en'
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-primary transition-colors hover:bg-background-secondary lg:hidden"
              aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col bg-background-primary pt-16"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-2xl font-medium transition-colors ${
                        active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
              >
                <Link
                  href="/geo-scan"
                  className="mt-4 inline-block rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-3 text-lg font-semibold text-background-primary"
                >
                  {tCommon('cta.geoScan')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
}
