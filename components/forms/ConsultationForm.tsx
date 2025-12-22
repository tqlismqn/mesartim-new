'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConsultationFormProps {
  variant?: 'default' | 'compact';
  className?: string;
  darkMode?: boolean;
}

export function ConsultationForm({ variant = 'default', className = '', darkMode = false }: ConsultationFormProps) {
  const t = useTranslations('forms.consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Mock API call - TODO: integrate with actual backend
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success (could be changed to simulate error for testing)
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const isCompact = variant === 'compact';

  const labelClasses = cn(
    'block text-sm font-medium mb-2',
    darkMode ? 'text-white' : 'text-gray-700'
  );

  const inputClasses = cn(
    'w-full px-4 py-3 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 transition-colors',
    darkMode
      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:ring-blue-400/20'
      : 'border border-gray-300 bg-white text-gray-900 focus:border-transparent focus:ring-primary'
  );

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {!isCompact && (
        <h3 className={cn('text-2xl font-bold mb-6', darkMode ? 'text-white' : 'text-gray-900')}>
          {t('title')}
        </h3>
      )}

      {isCompact && darkMode && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{t('title')}</h2>
          <p className="text-blue-200/70 text-sm">
            Let&apos;s discuss how we can elevate your IT infrastructure
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClasses}>
          {t('name')} *
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder={darkMode ? 'John Doe' : undefined}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          {t('email')} *
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder={darkMode ? 'john@company.com' : undefined}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          placeholder={darkMode ? '+420 771 117 112' : undefined}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClasses}
          disabled={status === 'loading'}
        />
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="message" className={labelClasses}>
            {t('message')}
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(inputClasses, 'resize-none min-h-[120px]')}
            disabled={status === 'loading'}
          />
        </div>
      )}

      {status === 'success' && (
        <div className={cn(
          'flex items-center gap-2 p-4 rounded-lg',
          darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-50 text-green-800'
        )}>
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('success')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className={cn(
          'flex items-center gap-2 p-4 rounded-lg',
          darkMode ? 'bg-red-500/20 text-red-300' : 'bg-red-50 text-red-800'
        )}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('error')}</span>
        </div>
      )}

      <Button
        type="submit"
        size={isCompact ? 'md' : 'lg'}
        disabled={status === 'loading'}
        className={cn(
          'w-full',
          darkMode && 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300'
        )}
      >
        {status === 'loading' ? t('submitting') : t('submit')}
      </Button>

      {darkMode && (
        <p className="text-xs text-slate-400 text-center">
          By submitting, you agree to our Terms of Service and Privacy Policy
        </p>
      )}
    </form>
  );
}
