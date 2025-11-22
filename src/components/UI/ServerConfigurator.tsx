import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, HardDrive, Shield, Server } from 'lucide-react';
import { Button } from './Button';

export const ServerConfigurator = () => {
    const { t } = useTranslation();
    const [cpu, setCpu] = useState(2);
    const [ram, setRam] = useState(4);
    const [storage, setStorage] = useState(50);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // Simple pricing logic: Base 200 + CPU*100 + RAM*50 + Storage*2
        const calculatedPrice = 200 + (cpu * 100) + (ram * 50) + (storage * 2);
        setPrice(calculatedPrice);
    }, [cpu, ram, storage]);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('accountingServer.configurator.title', 'Configure Your Server')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {t('accountingServer.configurator.desc', 'Customize resources to match your needs.')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    {/* CPU Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
                                <Cpu className="w-5 h-5 text-primary" /> CPU Cores
                            </label>
                            <span className="text-xl font-bold text-primary">{cpu} vCore</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="16"
                            step="1"
                            value={cpu}
                            onChange={(e) => setCpu(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>1 vCore</span>
                            <span>16 vCore</span>
                        </div>
                    </div>

                    {/* RAM Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
                                <Server className="w-5 h-5 text-primary" /> RAM
                            </label>
                            <span className="text-xl font-bold text-primary">{ram} GB</span>
                        </div>
                        <input
                            type="range"
                            min="2"
                            max="64"
                            step="2"
                            value={ram}
                            onChange={(e) => setRam(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>2 GB</span>
                            <span>64 GB</span>
                        </div>
                    </div>

                    {/* Storage Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
                                <HardDrive className="w-5 h-5 text-primary" /> SSD Storage
                            </label>
                            <span className="text-xl font-bold text-primary">{storage} GB</span>
                        </div>
                        <input
                            type="range"
                            min="20"
                            max="1000"
                            step="10"
                            value={storage}
                            onChange={(e) => setStorage(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>20 GB</span>
                            <span>1000 GB</span>
                        </div>
                    </div>
                </div>

                {/* Summary Card */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl" />
                    <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Estimated Monthly Cost</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold text-primary">{price}</span>
                                <span className="text-xl text-gray-500">Kč / mo</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                                Includes daily backups, 24/7 monitoring, and basic support.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <Shield className="w-4 h-4 text-green-500" /> DDoS Protection
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <Shield className="w-4 h-4 text-green-500" /> 99.9% Uptime SLA
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <Shield className="w-4 h-4 text-green-500" /> Free SSL Certificate
                                </li>
                            </ul>
                        </div>

                        <Button className="w-full justify-center text-lg py-4">
                            Order Configuration
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
