'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gradients?: string[];
  animationDuration?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

const defaultGradients = [
  'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
  'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #f8fafc 100%)',
  'linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 50%, #e0f2fe 100%)',
  'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 50%, #e0e7ff 100%)',
  'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
];

export function GradientBackground({
  children,
  className = '',
  gradients = defaultGradients,
  animationDuration = 12,
  overlay = false,
  overlayOpacity = 0.1,
}: GradientBackgroundProps) {
  return (
    <div className={cn('relative w-full min-h-screen overflow-hidden', className)}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 -z-10 bg-white"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      {children}
    </div>
  );
}
