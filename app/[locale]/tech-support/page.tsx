import { Headphones, Clock, Shield, Wrench, Server, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technická podpora 24/7',
  description: 'Profesionální IT podpora pro váš byznys. Řešení problémů v reálném čase, monitoring, údržba.',
};

const features = [
  {
    icon: Clock,
    title: 'Podpora 24/7',
    description: 'Dostupní kdykoliv, i o víkendech a svátcích'
  },
  {
    icon: Headphones,
    title: 'Rychlá reakce',
    description: 'Řešení kritických problémů do 1 hodiny'
  },
  {
    icon: Shield,
    title: 'Proaktivní monitoring',
    description: 'Detekce problémů ještě před jejich vznikem'
  },
  {
    icon: Wrench,
    title: 'Vzdálená správa',
    description: 'Většinu problémů vyřešíme na dálku'
  },
  {
    icon: Server,
    title: 'Údržba infrastruktury',
    description: 'Pravidelné aktualizace a optimalizace'
  },
  {
    icon: Users,
    title: 'Vícejazyčná podpora',
    description: 'Čeština, ruština, angličtina'
  }
];

const products = [
  {
    title: 'IT Pomocník',
    description: 'Osobní IT specialista pro váš byznys. Pomoc s PC, tiskárnami, Wi-Fi, zálohami.',
    href: '/it-assistant',
    icon: Headphones,
    priceFrom: 'Od 690 Kč/měsíc'
  },
  {
    title: 'Projekty na míru',
    description: 'Komplexní IT řešení šité na míru vašim potřebám.',
    href: '/custom-projects',
    icon: Server
  }
];

export default function TechSupportPage() {
  return (
    <CategoryPage
      title="Technická podpora"
      subtitle="IT pomoc kdykoli ji potřebujete"
      description="Profesionální podpora vašeho IT prostředí 24 hodin denně, 7 dní v týdnu. Rychlé řešení problémů, proaktivní monitoring a údržba infrastruktury."
      icon={Headphones}
      iconBg="bg-primary-100"
      iconColor="text-primary-600"
      features={features}
      products={products}
    />
  );
}
