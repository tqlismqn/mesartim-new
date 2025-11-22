import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'cz', label: 'CZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'ua', label: 'UA' },
    { code: 'de', label: 'DE' },
    { code: 'pl', label: 'PL' },
];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                <Globe size={18} className="text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-800 dark:text-white uppercase">{i18n.language}</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-32 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                  ${i18n.language === lang.code ? 'text-primary font-bold dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
                `}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
