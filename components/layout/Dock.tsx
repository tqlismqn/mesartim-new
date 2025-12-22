'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import { Home, Briefcase, Package, Users, Mail } from 'lucide-react';

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const navItems = [
  { href: '/', icon: Home, labelKey: 'home' },
  { href: '/solutions', icon: Briefcase, labelKey: 'solutions' },
  { href: '/products', icon: Package, labelKey: 'products' },
  { href: '/about', icon: Users, labelKey: 'about' },
  { href: '/contact', icon: Mail, labelKey: 'contact' },
];

function DockItem({
  href,
  icon: Icon,
  label,
  isActive,
  mouseX,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - rect.x - rect.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-DEFAULT_DISTANCE, 0, DEFAULT_DISTANCE],
    [40, DEFAULT_MAGNIFICATION, 40]
  );

  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useTransform(width, (val) => val / 2);

  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        style={{ width }}
        className={cn(
          'aspect-square rounded-xl flex items-center justify-center transition-colors',
          isActive
            ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-cyan-400/30'
            : 'bg-slate-800/50 hover:bg-slate-700/50'
        )}
      >
        <motion.div style={{ width: iconSize, height: iconSize }}>
          <Icon className={cn(
            'w-full h-full transition-colors',
            isActive ? 'text-cyan-400' : 'text-slate-300'
          )} />
        </motion.div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap',
              'px-2 py-1 text-xs text-white rounded-md',
              'bg-slate-900/90 border border-white/20 backdrop-blur-sm'
            )}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export function Dock() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'flex items-center gap-3 rounded-2xl px-4 py-3',
          'bg-slate-900/80 backdrop-blur-xl',
          'border border-white/10',
          'shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
        )}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <DockItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={t(item.labelKey)}
              isActive={isActive}
              mouseX={mouseX}
            />
          );
        })}
      </motion.div>

      {/* Active indicator dots */}
      <div className="flex justify-center gap-3 mt-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <div
              key={`dot-${item.href}`}
              className={cn(
                'h-1 rounded-full transition-all duration-300',
                isActive ? 'bg-cyan-400 w-4' : 'bg-transparent w-1'
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
