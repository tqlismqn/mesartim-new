import { useTranslation } from 'react-i18next';
import { ServicePage } from '../components/UI/ServicePage';
import { Phone, Activity, MessageSquare } from 'lucide-react';

export default function ITSupport() {
    const { t } = useTranslation();

    const features = [
        { title: t('itSupport.features.helpdesk.title'), desc: t('itSupport.features.helpdesk.desc'), icon: <Phone /> },
        { title: t('itSupport.features.monitoring.title'), desc: t('itSupport.features.monitoring.desc'), icon: <Activity /> },
        { title: t('itSupport.features.consulting.title'), desc: t('itSupport.features.consulting.desc'), icon: <MessageSquare /> },
    ];

    const pricing = [
        {
            name: t('itSupport.pricing.basic.name'),
            price: t('itSupport.pricing.basic.price'),
            features: t('itSupport.pricing.basic.features', { returnObjects: true }) as string[]
        },
        {
            name: t('itSupport.pricing.standard.name'),
            price: t('itSupport.pricing.standard.price'),
            features: t('itSupport.pricing.standard.features', { returnObjects: true }) as string[],
            recommended: true
        },
        {
            name: t('itSupport.pricing.premium.name'),
            price: t('itSupport.pricing.premium.price'),
            features: t('itSupport.pricing.premium.features', { returnObjects: true }) as string[]
        },
    ];

    return (
        <ServicePage
            title={t('itSupport.title')}
            subtitle={t('itSupport.subtitle')}
            description={t('itSupport.desc')}
            features={features}
            pricing={pricing}
        />
    );
}
