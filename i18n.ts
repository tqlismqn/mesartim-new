import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/lib/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Load requested locale messages
  const messages = (await import(`./messages/${locale}.json`)).default;

  // Load English messages as fallback
  const fallbackMessages = locale !== 'en'
    ? (await import('./messages/en.json')).default
    : {};

  return {
    locale,
    // Merge with English fallback for missing keys
    messages: deepMerge(fallbackMessages, messages),
    // Configure error handling for missing messages
    onError: (error) => {
      if (error.code === 'MISSING_MESSAGE') {
        console.warn(`Missing translation: ${error.originalMessage}`);
        return;
      }
      throw error;
    },
    getMessageFallback: ({ namespace, key }) => {
      return `${namespace}.${key}`;
    },
  };
});

// Deep merge utility
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        (result[key] as Record<string, unknown>) || {},
        source[key] as Record<string, unknown>
      );
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Re-export for backwards compatibility
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
export type { Locale } from '@/lib/routing';
