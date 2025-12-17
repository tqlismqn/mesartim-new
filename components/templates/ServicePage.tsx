import { ReactNode } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  children?: ReactNode;
}

export function ServicePage({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  iconBg,
  iconColor,
  children,
}: ServicePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              iconBg,
              iconColor
            )}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
            <Link href="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto">
                    <FeatureIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600">
            Contact us today to discuss your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Sales</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
