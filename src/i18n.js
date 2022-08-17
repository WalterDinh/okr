import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en';
import vilang from './locales/vi';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'label',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: enLang,
      vi: vilang,
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    detection: {
      order: ['path', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
