'use client';

import { motion } from 'framer-motion';
import { Server, Cloud, Database, Shield, Zap, Network } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

function FloatingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-blue-500/[0.15]',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-white/[0.15]',
            'shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]',
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function IsometricServer({ delay = 0, className = '' }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm shadow-lg shadow-blue-500/20">
          <div className="absolute inset-0 flex flex-col justify-around p-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 bg-blue-400/40 rounded-full"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GeometricPattern({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={cn('absolute', className)}
    >
      <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 50}
            x2="400"
            y2={i * 50}
            stroke="url(#grid-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 50}
            y1="0"
            x2={i * 50}
            y2="400"
            stroke="url(#grid-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

function FloatingIcon({
  Icon,
  delay = 0,
  className = '',
}: {
  Icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: 'backOut',
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm shadow-lg shadow-blue-500/10"
      >
        <Icon className="w-8 h-8 text-blue-400" />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function Hero() {
  const t = useTranslations('homepage.hero');

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <FloatingShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-cyan-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <FloatingShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-blue-400/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        {/* Isometric server illustrations */}
        <IsometricServer delay={0.6} className="right-[10%] top-[25%] hidden lg:block" />
        <IsometricServer delay={0.8} className="left-[15%] bottom-[20%] hidden lg:block" />

        {/* SVG Grid pattern */}
        <GeometricPattern className="right-[5%] top-[10%] hidden xl:block" />

        {/* Floating icons */}
        <FloatingIcon Icon={Server} delay={0.7} className="left-[8%] top-[30%] hidden md:block" />
        <FloatingIcon Icon={Cloud} delay={0.9} className="right-[15%] top-[15%] hidden md:block" />
        <FloatingIcon Icon={Database} delay={1.1} className="left-[20%] bottom-[25%] hidden lg:block" />
        <FloatingIcon Icon={Shield} delay={1.3} className="right-[8%] bottom-[30%] hidden lg:block" />
        <FloatingIcon Icon={Network} delay={1.5} className="left-[45%] top-[10%] hidden xl:block" />
        <FloatingIcon Icon={Zap} delay={1.7} className="right-[40%] bottom-[15%] hidden xl:block" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <div className="text-left space-y-8">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300 tracking-wide">
                {t('badge')}
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  {t('headline')}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  {t('headlineAccent')}
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed font-light max-w-xl">
                {t('subheadline')}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-blue-400">{t('stats.uptime')}</div>
                <div className="text-sm text-blue-200/60">{t('stats.uptimeLabel')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">{t('stats.support')}</div>
                <div className="text-sm text-blue-200/60">{t('stats.supportLabel')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">{t('stats.clients')}</div>
                <div className="text-sm text-blue-200/60">{t('stats.clientsLabel')}</div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Consultation form */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative"
            id="consultation-form"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <ConsultationForm variant="compact" darkMode />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />
    </div>
  );
}
