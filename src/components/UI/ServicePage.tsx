import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    recommended?: boolean;
}

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; desc: string; icon?: React.ReactNode }[];
    pricing?: PricingPlan[];
    ctaText?: string;
    ctaLink?: string;
}

export function ServicePage({
    title,
    subtitle,
    description,
    features,
    pricing,
    ctaText = "Kontaktujte nás",
    ctaLink = "/contact"
}: ServicePageProps) {
    return (
        <div className="pt-32 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-primary dark:text-blue-400 font-medium mb-6">
                        {subtitle}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            {pricing && (
                <section className="bg-gray-50 dark:bg-gray-800/50 py-20 mb-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            Ceník
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricing.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative p-8 rounded-2xl border ${plan.recommended
                                        ? 'bg-white dark:bg-gray-800 border-primary dark:border-blue-500 shadow-xl scale-105 z-10'
                                        : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {plan.recommended && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Doporučujeme
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">{plan.price}</div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={ctaLink} className="block">
                                        <Button
                                            variant={plan.recommended ? 'primary' : 'outline'}
                                            className="w-full"
                                        >
                                            Vybrat
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="container mx-auto px-4 text-center">
                <Link to={ctaLink}>
                    <Button size="lg">
                        {ctaText} <ArrowRight className="ml-2 w-5 h-5 inline" />
                    </Button>
                </Link>
            </section>
        </div>
    );
}
