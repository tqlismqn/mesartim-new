import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cz from './locales/cz.json';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';
import de from './locales/de.json';
import pl from './locales/pl.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            cz: { translation: cz },
            en: { translation: en },
            ru: { translation: ru },
            ua: { translation: ua },
            de: { translation: de },
            pl: { translation: pl },
        },
        lng: 'cz', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
