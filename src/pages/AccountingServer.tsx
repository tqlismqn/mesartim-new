import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ServerConfigurator } from '../components/UI/ServerConfigurator';
import { Button } from '../components/UI/Button';
import { Server, Shield, Zap } from 'lucide-react';

export default function AccountingServer() {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
                    <img src="/hero-bg.png" alt="Background" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {t('accountingServer.title')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {t('accountingServer.desc')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">{t('cta.button')}</Button>
                            <Button variant="outline" size="lg">Documentation</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <img src="/server-icon.png" alt="Server Icon" className="w-full max-w-md mx-auto drop-shadow-2xl animate-float" />
                    </motion.div>
                </div>
            </section>

            {/* Configurator Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <ServerConfigurator />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, key: 'performance' },
                            { icon: Server, key: 'remote' },
                            { icon: Shield, key: 'updates' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {t(`accountingServer.features.${feature.key}.title`)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {t(`accountingServer.features.${feature.key}.desc`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
