import { useTranslations } from 'next-intl';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export function CTASection() {
  const t = useTranslations('homepage.cta');

  return (
    <section className="section-padding gradient-bg-subtle">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Heading, description, and bullet points */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                {t('title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('subtitle')}
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{t('benefits.freeConsultation')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{t('benefits.quickResponse')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{t('benefits.customSolution')}</span>
                </div>
              </div>
            </div>

            {/* Right side: Consultation form */}
            <div className="glass-card p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
