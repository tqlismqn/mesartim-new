import { useTranslation } from 'react-i18next';
import { ServicePage } from '../components/UI/ServicePage';
import { Shield, Cloud, Lock } from 'lucide-react';

export default function AccountingBox() {
    const { t } = useTranslation();

    const features = [
        { title: t('accountingBox.features.security.title'), desc: t('accountingBox.features.security.desc'), icon: <Lock /> },
        { title: t('accountingBox.features.backup.title'), desc: t('accountingBox.features.backup.desc'), icon: <Cloud /> },
        { title: t('accountingBox.features.access.title'), desc: t('accountingBox.features.access.desc'), icon: <Shield /> },
    ];

    const pricing = [
        {
            name: t('accountingBox.pricing.mini.name'),
            price: t('accountingBox.pricing.mini.price'),
            features: t('accountingBox.pricing.mini.features', { returnObjects: true }) as string[]
        },
        {
            name: t('accountingBox.pricing.team.name'),
            price: t('accountingBox.pricing.team.price'),
            features: t('accountingBox.pricing.team.features', { returnObjects: true }) as string[],
            recommended: true
        },
        {
            name: t('accountingBox.pricing.profi.name'),
            price: t('accountingBox.pricing.profi.price'),
            features: t('accountingBox.pricing.profi.features', { returnObjects: true }) as string[]
        },
    ];

    return (
        <ServicePage
            title={t('accountingBox.title')}
            subtitle={t('accountingBox.subtitle')}
            description={t('accountingBox.desc')}
            features={features}
            pricing={pricing}
        />
    );
}
