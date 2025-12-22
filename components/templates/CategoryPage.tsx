import { ReactNode } from 'react';
import {
  LucideIcon,
  Target,
  Lightbulb,
  TrendingDown,
  Rocket,
  Workflow,
  Users,
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  Server,
  Cloud,
  HardDrive,
  Database,
  Network,
  Settings,
  Headphones,
  Clock,
  Wrench,
  FileText,
  Zap,
  BarChart3,
  Key,
  Globe
} from 'lucide-react';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Icon mapping for string-based icon references
const iconMap: Record<string, LucideIcon> = {
  Target,
  Lightbulb,
  TrendingDown,
  Rocket,
  Workflow,
  Users,
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  Server,
  Cloud,
  HardDrive,
  Database,
  Network,
  Settings,
  Headphones,
  Clock,
  Wrench,
  FileText,
  Zap,
  BarChart3,
  Key,
  Globe
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Product {
  title: string;
  description: string;
  href: string;
  icon: string;
  priceFrom?: string;
}

// Labels passed from server component
interface Labels {
  featuresTitle: string;
  productsTitle: string;
  learnMore: string;
  ctaTitle: string;
  ctaDescription: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  features: Feature[];
  products: Product[];
  labels: Labels;
  children?: ReactNode;
}

export function CategoryPage({
  title,
  subtitle,
  description,
  icon,
  iconBg,
  iconColor,
  features,
  products,
  labels,
  children
}: CategoryPageProps) {
  const Icon = iconMap[icon] || Lightbulb;

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              iconBg,
              iconColor
            )}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance">{subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{labels.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const FeatureIcon = iconMap[feature.icon] || Lightbulb;
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

      {/* Optional children slot */}
      {children}

      {/* Products Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{labels.productsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, idx) => {
              const ProductIcon = iconMap[product.icon] || Lightbulb;
              return (
                <div key={idx} className="glass-card p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <ProductIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  {product.priceFrom && (
                    <p className="text-sm font-medium text-primary">{product.priceFrom}</p>
                  )}
                  <Link href={product.href}>
                    <Button variant="outline" className="w-full">{labels.learnMore}</Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{labels.ctaTitle}</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {labels.ctaDescription}
            </p>
            <div className="glass-card p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
