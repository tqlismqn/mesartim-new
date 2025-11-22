import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/UI/Button';

export default function Contact() {
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Message sent! (Demo)');
    };

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {t('contact.title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t('contact.desc')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('contact.subtitle')}
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <MapPin className="text-primary dark:text-blue-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.address')}</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Praha, Czech Republic</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <Phone className="text-primary dark:text-blue-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.phone')}</h4>
                                        <a href="tel:+420123456789" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                            +420 123 456 789
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <Mail className="text-primary dark:text-blue-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('contact.info.email')}</h4>
                                        <a href="mailto:info@mesartim.cz" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                            info@mesartim.cz
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" className="w-full justify-center">
                                {t('contact.form.submit')} <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
