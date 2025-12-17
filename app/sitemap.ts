import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mesartim.com'; // TODO: Replace with actual domain

  const routes = ['', '/accounting-server', '/accounting-box', '/it-support', '/projects', '/contact'];
  const priorities = [1, 0.9, 0.8, 0.8, 0.7, 0.9];

  return routes.flatMap((route, index) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === defaultLocale ? '' : `/${locale}`}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priorities[index],
    }))
  );
}
