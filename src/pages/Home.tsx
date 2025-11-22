import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Server, Shield, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';

export default function Home() {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Server className="w-8 h-8 text-primary dark:text-blue-400" />,
            title: t('features.server.title'),
            desc: t('features.server.desc'),
            link: '/accounting-server'
        },
        {
            icon: <Shield className="w-8 h-8 text-primary dark:text-blue-400" />,
            title: t('features.backup.title'),
            desc: t('features.backup.desc'),
            link: '/accounting-box'
        },
        {
            icon: <Headphones className="w-8 h-8 text-primary dark:text-blue-400" />,
            title: t('features.support.title'),
            desc: t('features.support.desc'),
            link: '/it-support'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20"></div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto">
                                    {t('cta.button')} <ArrowRight className="ml-2 w-5 h-5 inline" />
                                </Button>
                            </Link>
                            <Link to="/accounting-server">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    {t('hero.cta')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('features.title')}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl inline-block">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {feature.desc}
                                </p>
                                <Link
                                    to={feature.link}
                                    className="text-primary dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                                >
                                    {t('hero.cta')} <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-primary dark:bg-blue-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                {t('cta.title')}
                            </h2>
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-primary hover:bg-gray-100 border-none"
                                >
                                    {t('cta.button')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
