import { ServicePage } from '@/components/templates/ServicePage';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Server - Remote Desktop for Pohoda',
  description: 'High-performance remote desktop servers optimized for accounting software. Secure, fast, and accessible from anywhere.',
};

type Props = {
  params: Promise<{ locale: string }>;
};

const features = [
  {
    icon: 'Zap',
    title: 'High Performance',
    description: 'Optimized for accounting software with fast SSD storage and powerful CPUs.',
  },
  {
    icon: 'Lock',
    title: 'Secure Access',
    description: 'Bank-level encryption and secure remote desktop protocols.',
  },
  {
    icon: 'Cloud',
    title: 'Anywhere Access',
    description: 'Work from office, home, or on the go with seamless connectivity.',
  },
  {
    icon: 'Cpu',
    title: 'Scalable Resources',
    description: 'Easily upgrade CPU, RAM, and storage as your business grows.',
  },
  {
    icon: 'HardDrive',
    title: 'Automated Backups',
    description: 'Daily backups ensure your accounting data is never lost.',
  },
  {
    icon: 'Server',
    title: '99.9% Uptime',
    description: 'Reliable infrastructure with redundancy and monitoring.',
  },
];

export default async function AccountingServerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePage
      title="Accounting Server"
      subtitle="Remote Desktop Optimized for Pohoda"
      description="Run your accounting software on high-performance cloud servers. Access from anywhere with enterprise-grade security and reliability."
      features={features}
      icon="Server"
      iconBg="bg-blue-100"
      iconColor="text-primary"
    >
      {/* Optional: Add pricing or configurator section here */}
    </ServicePage>
  );
}
