import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Headphones } from 'lucide-react';
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
            icon: <Database className="w-8 h-8 text-primary dark:text-blue-400" />,
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 md:py-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="/hero-bg.png" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none text-lg px-8 py-4">
                                {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link to="/accounting-server">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                                View Services
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        {t('features.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
                            >
                                <div className="mb-6 flex justify-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl inline-block">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.desc}</p>
                                <Link to={feature.link} className="text-primary dark:text-blue-400 font-semibold hover:underline flex items-center justify-center">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-green-500 to-teal-500 py-20 md:py-28 text-white overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                {t('cta.title')}
                            </h2>
                            <Link to="/contact">
                                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none text-lg px-8 py-4">
                                    {t('cta.button')} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
