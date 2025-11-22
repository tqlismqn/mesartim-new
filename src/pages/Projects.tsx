import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Wifi, Camera } from 'lucide-react';
import { Button } from '../components/UI/Button';

// Mock data for projects
const projectsData = [
    { id: 1, title: 'E-shop AutoDíly', category: 'web', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800', desc: 'Complete e-commerce solution for auto parts.' },
    { id: 2, title: 'Office Network Setup', category: 'network', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800', desc: 'Structured cabling and Wi-Fi for 50+ employees.' },
    { id: 3, title: 'Warehouse Security', category: 'cameras', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800', desc: 'IP camera system with remote monitoring.' },
    { id: 4, title: 'Law Firm Website', category: 'web', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800', desc: 'Professional presentation for a law firm.' },
    { id: 5, title: 'Server Migration', category: 'network', image: 'https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80&w=800', desc: 'Seamless migration to cloud infrastructure.' },
    { id: 6, title: 'Smart Home Integration', category: 'cameras', image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=800', desc: 'IoT integration and security for a modern home.' },
];

export default function Projects() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: t('projects.filter.all', 'All') },
        { id: 'web', label: t('projects.filter.web', 'Web & Apps'), icon: Globe },
        { id: 'network', label: t('projects.filter.network', 'Networks'), icon: Wifi },
        { id: 'cameras', label: t('projects.filter.cameras', 'Security'), icon: Camera },
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-white dark:bg-gray-800 py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        {t('projects.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        {t('projects.desc')}
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-10 sticky top-16 z-30 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <div className="flex justify-center gap-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${filter === cat.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {cat.icon && <cat.icon className="w-4 h-4" />}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 container mx-auto px-4">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {project.desc}
                                    </p>
                                    <Button variant="outline" className="w-full justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                        View Case Study
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
}
