export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mesartim',
    url: 'https://mesartim.com',
    logo: 'https://mesartim.com/logo.png',
    description: 'Enterprise-grade IT infrastructure solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'Customer Service',
      email: 'info@mesartim.com',
    },
    sameAs: [
      // Add social media URLs here
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
