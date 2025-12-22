import { CategoryPage } from '@/components/templates/CategoryPage';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SecurityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.security');
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
      icon: 'Lock',
      title: t('features.encryption.title'),
      description: t('features.encryption.description')
    },
    {
      icon: 'AlertTriangle',
      title: t('features.ransomwareProtection.title'),
      description: t('features.ransomwareProtection.description')
    },
    {
      icon: 'Key',
      title: t('features.accessManagement.title'),
      description: t('features.accessManagement.description')
    },
    {
      icon: 'FileCheck',
      title: t('features.securityAudit.title'),
      description: t('features.securityAudit.description')
    },
    {
      icon: 'Eye',
      title: t('features.threatMonitoring.title'),
      description: t('features.threatMonitoring.description')
    },
    {
      icon: 'ShieldCheck',
      title: t('features.gdprCompliance.title'),
      description: t('features.gdprCompliance.description')
    }
  ];

  const products = [
    {
      title: t('products.accountingBox.title'),
      description: t('products.accountingBox.description'),
      href: '/accounting-box',
      icon: 'Lock',
      priceFrom: t('products.accountingBox.priceFrom')
    },
    {
      title: t('products.itAssistant.title'),
      description: t('products.itAssistant.description'),
      href: '/it-assistant',
      icon: 'ShieldCheck',
      priceFrom: t('products.itAssistant.priceFrom')
    }
  ];

  return (
    <CategoryPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      icon="ShieldCheck"
      iconBg="bg-green-100"
      iconColor="text-green-600"
      features={features}
      products={products}
      labels={labels}
    />
  );
}
