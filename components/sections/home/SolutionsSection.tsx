import { useTranslations } from 'next-intl';
import {
  Headphones,
  Users,
  ShieldCheck,
  Lightbulb,
  Cloud,
  HardDrive,
  ArrowRightLeft,
  Zap
} from 'lucide-react';

const solutionIcons = [
  Headphones,      // Tech support
  Users,           // Outsourcing
  ShieldCheck,     // Security
  Lightbulb,       // Consulting
  Cloud,           // Cloud services
  HardDrive,       // Backup
  ArrowRightLeft,  // Migration
  Zap              // Automation
];

export function SolutionsSection() {
  const t = useTranslations('homepage.solutions');

  const solutions = [
    'techSupport',
    'outsourcing',
    'security',
    'consulting',
    'cloudServices',
    'backup',
    'migration',
    'automation'
  ];

  return (
    <section id="solutions" className="section-padding gradient-bg-subtle">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[index];
            return (
              <div
                key={solution}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 group-hover:bg-primary-200 transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`list.${solution}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`list.${solution}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
