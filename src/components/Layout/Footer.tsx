import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-primary dark:text-white mb-4 block">
                            Mesartim
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Menu</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.home')}</Link></li>
                            <li><Link to="/accounting-box" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.accountingBox')}</Link></li>
                            <li><Link to="/accounting-server" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.accountingServer')}</Link></li>
                            <li><Link to="/it-support" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.itSupport')}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.projects')}</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 text-sm">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin size={18} className="shrink-0 mt-0.5" />
                                <span>Praha, Czech Republic</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+420123456789" className="hover:text-primary dark:hover:text-blue-400">+420 123 456 789</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Mail size={18} className="shrink-0" />
                                <a href="mailto:info@mesartim.cz" className="hover:text-primary dark:hover:text-blue-400">info@mesartim.cz</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        &copy; {new Date().getFullYear()} Mesartim. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
