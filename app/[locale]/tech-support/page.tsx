'use client';

import { Headphones, Clock, Shield, Wrench, Server, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import { useTranslations } from 'next-intl';

export default function TechSupportPage() {
  const t = useTranslations('pages.techSupport');

  const features = [
    {
      icon: Clock,
      title: t('features.support247.title'),
      description: t('features.support247.description')
    },
    {
      icon: Headphones,
      title: t('features.fastResponse.title'),
      description: t('features.fastResponse.description')
    },
    {
      icon: Shield,
      title: t('features.monitoring.title'),
      description: t('features.monitoring.description')
    },
    {
      icon: Wrench,
      title: t('features.remoteManagement.title'),
      description: t('features.remoteManagement.description')
    },
    {
      icon: Server,
      title: t('features.maintenance.title'),
      description: t('features.maintenance.description')
    },
    {
      icon: Users,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description')
    }
  ];

  const products = [
    {
      title: t('products.itAssistant.title'),
      description: t('products.itAssistant.description'),
      href: '/it-assistant',
      icon: Headphones,
      priceFrom: t('products.itAssistant.priceFrom')
    },
    {
      title: t('products.customProjects.title'),
      description: t('products.customProjects.description'),
      href: '/custom-projects',
      icon: Server
    }
  ];

  return (
    <CategoryPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      icon={Headphones}
      iconBg="bg-primary-100"
      iconColor="text-primary-600"
      features={features}
      products={products}
    />
  );
}
