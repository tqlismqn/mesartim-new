import { ui, defaultLang, languages, type Lang } from './ui';

/**
 * Get the language from a URL pathname
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Get a translation function for the given language
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key] || key;
  };
}

/**
 * Get a translated path for navigation
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Remove language prefix if present
  const pathWithoutLang = cleanPath.replace(/^(cs|en|ru|uk|de|pl)\//, '');
  return `/${lang}/${pathWithoutLang}`;
}

/**
 * Get all localized paths for a given page (for hreflang tags)
 */
export function getAlternateLinks(currentPath: string): Array<{ lang: Lang; href: string }> {
  const pathWithoutLang = currentPath.replace(/^\/(cs|en|ru|uk|de|pl)/, '');

  return Object.keys(languages).map((lang) => ({
    lang: lang as Lang,
    href: `/${lang}${pathWithoutLang}`,
  }));
}

/**
 * Check if the current language is RTL (for future Arabic support etc.)
 */
export function isRTL(lang: Lang): boolean {
  const rtlLanguages: string[] = []; // Add 'ar', 'he' etc. if needed
  return rtlLanguages.includes(lang);
}

/**
 * Get language name in its native form
 */
export function getLanguageName(lang: Lang): string {
  return languages[lang];
}

/**
 * Get all available languages
 */
export function getAvailableLanguages(): Array<{ code: Lang; name: string }> {
  return Object.entries(languages).map(([code, name]) => ({
    code: code as Lang,
    name,
  }));
}

/**
 * Format price for display (Czech locale by default)
 */
export function formatPrice(amount: number, currency: string = 'CZK', lang: Lang = 'cs'): string {
  const localeMap: Record<Lang, string> = {
    cs: 'cs-CZ',
    en: 'en-GB',
    ru: 'ru-RU',
    uk: 'uk-UA',
    de: 'de-DE',
    pl: 'pl-PL',
  };

  return new Intl.NumberFormat(localeMap[lang], {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
