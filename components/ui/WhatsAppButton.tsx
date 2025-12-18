'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+420771117112';

export function WhatsAppButton() {
  const t = useTranslations('common');

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      aria-label={t('whatsapp')}
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t('whatsapp')}
      </span>
    </button>
  );
}
