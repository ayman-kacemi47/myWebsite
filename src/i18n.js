import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationAR from '../src/locale/ar.json';
import translationFR from '../src/locale/fr.json';
import translationEN from '../src/locale/en.json';

const resources = {
  en: {
    translation: translationEN,
    dir: 'ltr', //i'm not sure but it works without it
  },
  fr: {
    translation: translationFR,
    dir: 'ltr', //i'm not sure but it works without it
  },
  ar: {
    translation: translationAR,
    dir: 'rtl', //i'm not sure but it works without it
  },
};

i18n
  .use(LanguageDetector) //use tthe detector for browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
