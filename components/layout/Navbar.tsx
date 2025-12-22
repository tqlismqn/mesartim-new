'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  href: string;
  label: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

export function Navbar() {
  const t = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: t('solutions'),
      items: [
        { href: '/tech-support', label: t('techSupport'), description: t('techSupportDesc') },
        { href: '/cloud-solutions', label: t('cloudSolutions'), description: t('cloudSolutionsDesc') },
        { href: '/security', label: t('security'), description: t('securityDesc') },
        { href: '/consulting', label: t('consulting'), description: t('consultingDesc') },
      ],
    },
    {
      label: t('products'),
      items: [
        { href: '/accounting-server', label: t('accountingServer'), description: t('accountingServerDesc') },
        { href: '/accounting-box', label: t('cloudBackup'), description: t('cloudBackupDesc') },
        { href: '/it-support', label: t('itSupport'), description: t('itSupportDesc') },
        { href: '/projects', label: t('projects'), description: t('projectsDesc') },
      ],
    },
    {
      label: t('about'),
      href: '/about',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
          >
            {tCommon('company')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                    {item.items && (
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.items && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[280px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-gray-900 group-hover:text-primary">
                            {subItem.label}
                          </span>
                          {subItem.description && (
                            <span className="text-xs text-gray-500">
                              {subItem.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button size="sm">{tCommon('contactUs')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {item.label}
                      </div>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-lg px-6 py-2 text-base text-gray-700 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              ))}

              <div className="mt-4 flex items-center justify-between border-t border-gray-200 px-4 pt-4">
                <LanguageSwitcher />
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm">{tCommon('contactUs')}</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
