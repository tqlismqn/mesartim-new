import { Cloud, Zap, Lock, Globe, HardDrive, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloudová řešení',
  description: 'Servery a úložiště v cloudu. Bez investic do hardwaru, s evropskými datacentry.',
};

const features = [
  {
    icon: Cloud,
    title: 'Bez investic do hardwaru',
    description: 'Žádné náklady na servery, chlazení, elektřinu'
  },
  {
    icon: Zap,
    title: 'Vysoký výkon',
    description: 'Moderní SSD disky, výkonné procesory'
  },
  {
    icon: Lock,
    title: 'Bezpečné datacentry',
    description: 'Evropská lokace (DE, FI, CZ), GDPR compliant'
  },
  {
    icon: Globe,
    title: 'Přístup odkudkoliv',
    description: 'Práce z domova, kanceláře nebo na cestách'
  },
  {
    icon: HardDrive,
    title: 'Automatické zálohy',
    description: 'Denní zálohování dat do oddělených lokalit'
  },
  {
    icon: Users,
    title: 'Snadné škálování',
    description: 'Zvýšení výkonu během několika minut'
  }
];

const products = [
  {
    title: 'Účetní Server',
    description: 'Cloudový server pro Pohoda, Money S3, Helios. Přístup odkudkoliv, bez instalace.',
    href: '/accounting-server',
    icon: Cloud,
    priceFrom: 'Od 890 Kč/měsíc'
  },
  {
    title: 'Účetní Box',
    description: '1 TB šifrovaného úložiště pro sdílení dokumentů s klienty.',
    href: '/accounting-box',
    icon: HardDrive,
    priceFrom: 'Od 490 Kč/měsíc'
  }
];

export default function CloudSolutionsPage() {
  return (
    <CategoryPage
      title="Cloudová řešení"
      subtitle="IT infrastruktura bez investic"
      description="Přesuňte své servery a data do bezpečného cloudu. Žádné náklady na hardware, vysoká dostupnost, automatické zálohy."
      icon={Cloud}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      features={features}
      products={products}
    />
  );
}
