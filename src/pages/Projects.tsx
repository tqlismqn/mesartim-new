import { useTranslation } from 'react-i18next';
import { ServicePage } from '../components/UI/ServicePage';
import { Globe, Wifi, Camera } from 'lucide-react';

export default function Projects() {
    const { t } = useTranslation();

    const features = [
        { title: t('projects.features.web.title'), desc: t('projects.features.web.desc'), icon: <Globe /> },
        { title: t('projects.features.network.title'), desc: t('projects.features.network.desc'), icon: <Wifi /> },
        { title: t('projects.features.cameras.title'), desc: t('projects.features.cameras.desc'), icon: <Camera /> },
    ];

    return (
        <ServicePage
            title={t('projects.title')}
            subtitle={t('projects.subtitle')}
            description={t('projects.desc')}
            features={features}
            ctaText={t('cta.button')}
        />
    );
}
