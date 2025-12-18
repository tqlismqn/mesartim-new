'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ConsultationFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function ConsultationForm({ variant = 'default', className = '' }: ConsultationFormProps) {
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

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {!isCompact && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h3>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t('name')} *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t('email')} *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            disabled={status === 'loading'}
          />
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('success')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('error')}</span>
        </div>
      )}

      <Button
        type="submit"
        size={isCompact ? 'md' : 'lg'}
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
}
