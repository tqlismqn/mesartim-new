'use client';

import { Cloud, Zap, Lock, Globe, HardDrive, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import { useTranslations } from 'next-intl';

export default function CloudSolutionsPage() {
  const t = useTranslations('pages.cloudSolutions');

  const features = [
    {
      icon: Cloud,
      title: t('features.noHardware.title'),
      description: t('features.noHardware.description')
    },
    {
      icon: Zap,
      title: t('features.performance.title'),
      description: t('features.performance.description')
    },
    {
      icon: Lock,
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: Globe,
      title: t('features.access.title'),
      description: t('features.access.description')
    },
    {
      icon: HardDrive,
      title: t('features.backup.title'),
      description: t('features.backup.description')
    },
    {
      icon: Users,
      title: t('features.scaling.title'),
      description: t('features.scaling.description')
    }
  ];

  const products = [
    {
      title: t('products.accountingServer.title'),
      description: t('products.accountingServer.description'),
      href: '/accounting-server',
      icon: Cloud,
      priceFrom: t('products.accountingServer.priceFrom')
    },
    {
      title: t('products.accountingBox.title'),
      description: t('products.accountingBox.description'),
      href: '/accounting-box',
      icon: HardDrive,
      priceFrom: t('products.accountingBox.priceFrom')
    }
  ];

  return (
    <CategoryPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      icon={Cloud}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      features={features}
      products={products}
    />
  );
}
