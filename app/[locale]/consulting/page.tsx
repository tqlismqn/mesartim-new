'use client';

import { Lightbulb, TrendingDown, Rocket, Workflow, Target, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import { useTranslations } from 'next-intl';

export default function ConsultingPage() {
  const t = useTranslations('pages.consulting');

  const features = [
    {
      icon: Target,
      title: t('features.analysis.title'),
      description: t('features.analysis.description')
    },
    {
      icon: Lightbulb,
      title: t('features.solution.title'),
      description: t('features.solution.description')
    },
    {
      icon: TrendingDown,
      title: t('features.costReduction.title'),
      description: t('features.costReduction.description')
    },
    {
      icon: Rocket,
      title: t('features.migration.title'),
      description: t('features.migration.description')
    },
    {
      icon: Workflow,
      title: t('features.automation.title'),
      description: t('features.automation.description')
    },
    {
      icon: Users,
      title: t('features.training.title'),
      description: t('features.training.description')
    }
  ];

  const products = [
    {
      title: t('products.customProjects.title'),
      description: t('products.customProjects.description'),
      href: '/custom-projects',
      icon: Lightbulb
    }
  ];

  return (
    <CategoryPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      icon={Lightbulb}
      iconBg="bg-amber-100"
      iconColor="text-amber-600"
      features={features}
      products={products}
    />
  );
}
