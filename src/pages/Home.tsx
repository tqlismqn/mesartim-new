import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Server, Database, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
                {/* Abstract Background */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100/50 blur-[100px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="hero-text text-gray-900 mb-6">
                        Reliable IT Infrastructure.
                        <br />
                        <span className="text-gray-500">Simplified.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Enterprise-grade servers, secure backups, and expert support.
                        Tailored for your business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-gray-900 hover:bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                Get Started
                            </Button>
                        </Link>
                        <Link to="/accounting-server" className="text-primary font-medium text-lg flex items-center hover:underline">
                            Learn more <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Elements Parallax */}
                <motion.div style={{ y: y1 }} className="absolute top-1/4 left-[5%] hidden lg:block opacity-60">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-500">
                        <Server className="w-8 h-8" />
                    </div>
                </motion.div>
                <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-[5%] hidden lg:block opacity-60">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-purple-500">
                        <Database className="w-10 h-10" />
                    </div>
                </motion.div>
            </section>

            {/* Services Grid (Bento Style) */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything you need.</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Comprehensive IT solutions designed to work together seamlessly.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Large Card - Accounting Server */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="lg:col-span-2 glass-card p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <Server className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Accounting Server</h3>
                                <p className="text-gray-600 text-lg max-w-md mb-8">
                                    High-performance remote desktop servers optimized for accounting software like Pohoda. Secure, fast, and accessible from anywhere.
                                </p>
                                <Link to="/accounting-server">
                                    <Button variant="outline" className="rounded-full border-gray-300 hover:border-gray-900">
                                        Configure Server
                                    </Button>
                                </Link>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80&w=800"
                                alt="Server"
                                className="absolute right-[-50px] bottom-[-50px] w-64 h-64 object-cover rounded-3xl shadow-2xl opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        {/* Tall Card - IT Support */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 flex flex-col justify-between min-h-[400px] bg-gray-50"
                        >
                            <div>
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">IT Support</h3>
                                <p className="text-gray-600 mb-6">
                                    24/7 monitoring and rapid response for your critical infrastructure.
                                </p>
                            </div>
                            <Link to="/it-support" className="text-gray-900 font-medium flex items-center hover:gap-2 transition-all">
                                View Plans <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>

                        {/* Card - Cloud Backup */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 flex flex-col justify-between min-h-[300px]"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Cloud Backup</h3>
                            <p className="text-gray-600 mb-6">
                                Automated, encrypted backups to ensure your data is never lost.
                            </p>
                            <Link to="/accounting-box" className="text-gray-900 font-medium flex items-center hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>

                        {/* Card - Custom Projects */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="lg:col-span-2 glass-card p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900 text-white overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
                            <div className="relative z-10 flex-1">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Custom Projects</h3>
                                <p className="text-gray-300 text-lg mb-8">
                                    From complex network setups to bespoke web applications. We build what you need.
                                </p>
                                <Link to="/projects">
                                    <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full border-none">
                                        View Portfolio
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative z-10 w-full md:w-1/3">
                                <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="text-6xl font-bold opacity-20">50+</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                            Ready to upgrade?
                        </h2>
                        <p className="text-xl text-gray-500 mb-10">
                            Join hundreds of satisfied businesses running on our infrastructure.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-primary hover:bg-blue-700 shadow-xl shadow-blue-200">
                                Contact Sales
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
