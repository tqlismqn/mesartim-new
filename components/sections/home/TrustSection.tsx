'use client';

import { useTranslations } from 'next-intl';
import { Server, Clock, Award } from 'lucide-react';

export function TrustSection() {
  const t = useTranslations('homepage.trust');

  const features = [
    {
      icon: Server,
      title: t('datacenters'),
      description: t('datacentersDesc'),
    },
    {
      icon: Clock,
      title: t('support'),
      description: t('supportDesc'),
    },
    {
      icon: Award,
      title: t('expertise'),
      description: t('expertiseDesc'),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-section-title font-bold text-center mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
