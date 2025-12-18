import { Link } from '@/lib/navigation';
import { Server, Shield, Database, Globe } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Server,
    title: 'Accounting Server',
    description: 'High-performance remote desktop servers optimized for accounting software like Pohoda. Secure, fast, and accessible from anywhere.',
    href: '/accounting-server',
    featured: true,
    iconBg: 'bg-blue-100',
    iconColor: 'text-primary',
  },
  {
    icon: Shield,
    title: 'IT Support',
    description: '24/7 monitoring and rapid response for your critical infrastructure.',
    href: '/it-support',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Database,
    title: 'Cloud Backup',
    description: 'Automated, encrypted backups to ensure your data is never lost.',
    href: '/accounting-box',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Globe,
    title: 'Custom Projects',
    description: 'From complex network setups to bespoke web applications. We build what you need.',
    href: '/projects',
    featured: true,
    iconBg: 'bg-gray-800',
    iconColor: 'text-white',
    dark: true,
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-section-title font-bold mb-6">
            Everything you need.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to work together seamlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            const cardClass = service.dark
              ? 'bg-gray-900 text-white border-gray-800'
              : '';
            const descClass = service.dark ? 'text-gray-300' : 'text-gray-600';

            return (
              <Link
                key={service.href}
                href={service.href}
                className={service.featured ? 'lg:col-span-2' : ''}
              >
                <Card hover className={`h-full ${cardClass}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center ${service.iconColor} mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className={service.dark ? 'text-white' : ''}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className={descClass}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant={service.dark ? 'outline' : 'ghost'}
                      size="sm"
                      className={service.dark ? 'border-white/20 text-white hover:bg-white/10' : ''}
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
