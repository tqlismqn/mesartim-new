'use client';

import { useTranslations } from 'next-intl';
import {
  TrendingUp,
  AlertTriangle,
  Gauge,
  Cloud,
  UserX,
  Share2,
  Shield,
  Maximize,
  HeadphoneOff
} from 'lucide-react';

const problemIcons = [
  TrendingUp,      // High costs
  AlertTriangle,   // Data loss risk
  Gauge,           // Slow software
  Cloud,           // No remote access
  UserX,           // No IT specialist
  Share2,          // Document sharing
  Shield,          // Outdated PCs
  Maximize,        // No scaling
  HeadphoneOff    // No 24/7 support
];

export function ProblemsSection() {
  const t = useTranslations('homepage.problems');

  const problems = [
    'highCosts',
    'dataLoss',
    'slowSoftware',
    'noRemoteAccess',
    'slowSupport',
    'documentSharing',
    'outdatedPC',
    'noScaling',
    'noSupport24'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problemIcons[index];
            return (
              <div
                key={problem}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`list.${problem}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`list.${problem}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
