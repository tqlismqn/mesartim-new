import { CategoryPage } from '@/components/templates/CategoryPage';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CloudSolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.cloudSolutions');
  const tTemplate = await getTranslations('templates.categoryPage');

  const labels = {
    featuresTitle: tTemplate('featuresTitle'),
    productsTitle: tTemplate('productsTitle'),
    learnMore: tTemplate('learnMore'),
    ctaTitle: tTemplate('ctaTitle'),
    ctaDescription: tTemplate('ctaDescription'),
  };

  const features = [
    {
      icon: 'Cloud',
      title: t('features.noHardware.title'),
      description: t('features.noHardware.description')
    },
    {
      icon: 'Zap',
      title: t('features.performance.title'),
      description: t('features.performance.description')
    },
    {
      icon: 'Lock',
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: 'Globe',
      title: t('features.access.title'),
      description: t('features.access.description')
    },
    {
      icon: 'HardDrive',
      title: t('features.backup.title'),
      description: t('features.backup.description')
    },
    {
      icon: 'Users',
      title: t('features.scaling.title'),
      description: t('features.scaling.description')
    }
  ];

  const products = [
    {
      title: t('products.accountingServer.title'),
      description: t('products.accountingServer.description'),
      href: '/accounting-server',
      icon: 'Cloud',
      priceFrom: t('products.accountingServer.priceFrom')
    },
    {
      title: t('products.accountingBox.title'),
      description: t('products.accountingBox.description'),
      href: '/accounting-box',
      icon: 'HardDrive',
      priceFrom: t('products.accountingBox.priceFrom')
    }
  ];

  return (
    <CategoryPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      icon="Cloud"
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      features={features}
      products={products}
      labels={labels}
    />
  );
}
