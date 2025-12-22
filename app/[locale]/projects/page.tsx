import { ServicePage } from '@/components/templates/ServicePage';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Projects - Bespoke IT Solutions',
  description: 'Custom software development, network infrastructure, and IT projects tailored to your unique business needs.',
};

type Props = {
  params: Promise<{ locale: string }>;
};

const features = [
  {
    icon: 'Code',
    title: 'Web Applications',
    description: 'Custom web apps built with modern frameworks and technologies.',
  },
  {
    icon: 'Network',
    title: 'Network Infrastructure',
    description: 'Complex network setups, VPNs, and connectivity solutions.',
  },
  {
    icon: 'Puzzle',
    title: 'System Integration',
    description: 'Connect disparate systems and automate workflows.',
  },
  {
    icon: 'Lightbulb',
    title: 'Consulting',
    description: 'Expert guidance on technology decisions and architecture.',
  },
  {
    icon: 'Rocket',
    title: 'Rapid Deployment',
    description: 'Agile development process with quick turnaround times.',
  },
  {
    icon: 'Globe',
    title: 'Full Stack',
    description: 'End-to-end solutions from database to user interface.',
  },
];

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePage
      title="Custom Projects"
      subtitle="Built Exactly How You Need It"
      description="No two businesses are alike. We design and build custom IT solutions tailored to your unique challenges and opportunities."
      features={features}
      icon="Globe"
      iconBg="bg-gray-800"
      iconColor="text-white"
    />
  );
}
