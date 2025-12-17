import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mesartim.com'; // TODO: Replace with actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/components-test/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
