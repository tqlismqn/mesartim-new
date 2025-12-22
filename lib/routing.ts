import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['cs', 'en', 'ru', 'uk', 'de', 'pl'],
  defaultLocale: 'cs',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
