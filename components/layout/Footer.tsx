'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const currentYear = new Date().getFullYear();

  const solutions = [
    { href: '/tech-support', label: tNav('techSupport') },
    { href: '/cloud-solutions', label: tNav('cloudSolutions') },
    { href: '/security', label: tNav('security') },
    { href: '/consulting', label: tNav('consulting') },
  ];

  const products = [
    { href: '/accounting-server', label: tNav('accountingServer') },
    { href: '/accounting-box', label: tNav('cloudBackup') },
    { href: '/it-assistant', label: tNav('itSupport') },
    { href: '/custom-projects', label: tNav('customProjects') },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('company.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.locations')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('solutions.title')}</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('products.title')}</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('contacts.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+420771117112" className="text-gray-600 hover:text-gray-900 transition-colors">
                    +420 771 117 112
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:info@mesartim.cz" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    info@mesartim.cz
                  </a>
                  <a href="mailto:support@mesartim.cz" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    support@mesartim.cz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <div className="font-medium text-gray-900">{t('contacts.office')}</div>
                  <div className="text-xs mt-1">{t('contacts.datacenters')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
