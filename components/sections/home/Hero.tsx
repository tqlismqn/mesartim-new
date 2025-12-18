'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('homepage.hero');
  const tCommon = useTranslations('common');

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-bg-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-hero font-bold tracking-tight text-balance">
              {t('headline')}
              <br />
              <span className="text-gray-500">{t('headlineAccent')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance max-w-2xl">
              {t('subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#consultation-form" className="inline-block">
                <Button size="lg">{tCommon('contactSales')}</Button>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors min-h-[56px] px-6"
              >
                {tCommon('learnMore')}
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right: Consultation form */}
          <div
            id="consultation-form"
            className="glass-card p-8 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <ConsultationForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
