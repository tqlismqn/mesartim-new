'use client';

import { motion } from 'framer-motion';
import { Link, usePathname } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import { Home, Briefcase, Package, Users, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, labelKey: 'home' },
  { href: '/solutions', icon: Briefcase, labelKey: 'solutions' },
  { href: '/products', icon: Package, labelKey: 'products' },
  { href: '/about', icon: Users, labelKey: 'about' },
  { href: '/contact', icon: Mail, labelKey: 'contact' },
];

export function BottomTabBar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade above the bar */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 safe-area-inset-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center min-w-[60px] py-1"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    'flex flex-col items-center gap-1 transition-colors',
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  )}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                  <span className={cn(
                    'text-[10px] font-medium',
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  )}>
                    {t(item.labelKey)}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
