import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../UI/Button';

export function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/accounting-box', label: t('nav.accountingBox') },
        { path: '/accounting-server', label: t('nav.accountingServer') },
        { path: '/it-support', label: t('nav.itSupport') },
        { path: '/projects', label: t('nav.projects') },
        { path: '/contact', label: t('nav.contact') },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-primary dark:text-white">
                    Mesartim
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary dark:hover:text-blue-400',
                                    location.pathname === link.path
                                        ? 'text-primary dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-300'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pl-6 border-l border-gray-200 dark:border-gray-700">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        'text-base font-medium py-2',
                                        location.pathname === link.path
                                            ? 'text-primary dark:text-blue-400'
                                            : 'text-gray-600 dark:text-gray-300'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
