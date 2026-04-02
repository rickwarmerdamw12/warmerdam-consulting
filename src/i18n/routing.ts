import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/diensten': {
      nl: '/diensten',
      en: '/services',
    },
    '/diensten/geo': {
      nl: '/diensten/geo',
      en: '/services/geo',
    },
    '/diensten/website': {
      nl: '/diensten/website',
      en: '/services/website',
    },
    '/diensten/sea': {
      nl: '/diensten/sea',
      en: '/services/sea',
    },
    '/case-studies': '/case-studies',
    '/case-studies/taai': '/case-studies/taai',
    '/kennisbank': {
      nl: '/kennisbank',
      en: '/knowledge-base',
    },
    '/kennisbank/[slug]': {
      nl: '/kennisbank/[slug]',
      en: '/knowledge-base/[slug]',
    },
    '/over-ons': {
      nl: '/over-ons',
      en: '/about',
    },
    '/contact': '/contact',
    '/geo-scan': '/geo-scan',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
