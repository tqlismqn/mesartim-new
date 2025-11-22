import { useTranslation } from 'react-i18next';
import { ServicePage } from '../components/UI/ServicePage';
import { Server, Monitor, RefreshCw } from 'lucide-react';

export default function AccountingServer() {
    const { t } = useTranslation();

    const features = [
        { title: t('accountingServer.features.performance.title'), desc: t('accountingServer.features.performance.desc'), icon: <Server /> },
        { title: t('accountingServer.features.remote.title'), desc: t('accountingServer.features.remote.desc'), icon: <Monitor /> },
        { title: t('accountingServer.features.updates.title'), desc: t('accountingServer.features.updates.desc'), icon: <RefreshCw /> },
    ];

    const pricing = [
        {
            name: t('accountingServer.pricing.solo.name'),
            price: t('accountingServer.pricing.solo.price'),
            features: t('accountingServer.pricing.solo.features', { returnObjects: true }) as string[]
        },
        {
            name: t('accountingServer.pricing.team3.name'),
            price: t('accountingServer.pricing.team3.price'),
            features: t('accountingServer.pricing.team3.features', { returnObjects: true }) as string[],
            recommended: true
        },
        {
            name: t('accountingServer.pricing.office5.name'),
            price: t('accountingServer.pricing.office5.price'),
            features: t('accountingServer.pricing.office5.features', { returnObjects: true }) as string[]
        },
    ];

    return (
        <ServicePage
            title={t('accountingServer.title')}
            subtitle={t('accountingServer.subtitle')}
            description={t('accountingServer.desc')}
            features={features}
            pricing={pricing}
        />
    );
}
