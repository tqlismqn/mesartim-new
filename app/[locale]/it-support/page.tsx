import { Shield, Clock, Headphones, Wrench, AlertCircle, TrendingUp } from 'lucide-react';
import { ServicePage } from '@/components/templates/ServicePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Support - 24/7 Monitoring & Response',
  description: 'Expert IT support and monitoring for your business infrastructure. Fast response times and proactive maintenance.',
};

const features = [
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock system monitoring to catch issues before they impact your business.',
  },
  {
    icon: Headphones,
    title: 'Rapid Response',
    description: 'Expert support team responds within 15 minutes for critical issues.',
  },
  {
    icon: Wrench,
    title: 'Proactive Maintenance',
    description: 'Regular updates, patches, and optimization to prevent problems.',
  },
  {
    icon: AlertCircle,
    title: 'Issue Prevention',
    description: 'Advanced monitoring detects potential failures before they occur.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous tuning to ensure your systems run at peak efficiency.',
  },
  {
    icon: Shield,
    title: 'Security Hardening',
    description: 'Regular security audits and updates to protect against threats.',
  },
];

export default function ITSupportPage() {
  return (
    <ServicePage
      title="IT Support"
      subtitle="Expert Support When You Need It"
      description="Comprehensive IT support and monitoring services. From routine maintenance to emergency response, we keep your infrastructure running smoothly."
      features={features}
      icon={Shield}
      iconBg="bg-green-100"
      iconColor="text-green-600"
    />
  );
}
