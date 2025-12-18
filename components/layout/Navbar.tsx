'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const t = useTranslations('navigation');
  const tCommon = useTranslations('common');

  const navLinks = [
    { href: '/accounting-server', label: t('accountingServer') },
    { href: '/accounting-box', label: t('cloudBackup') },
    { href: '/it-support', label: t('itSupport') },
    { href: '/projects', label: t('projects') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
            {tCommon('company')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href="/contact">
              <Button size="sm">{tCommon('contactUs')}</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
