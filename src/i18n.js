import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import zh from './assets/i18n/zh.json';
import en from './assets/i18n/en.json';

const resources = {
  zh: { translation: zh },
  en: { translation: en }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    lng: localStorage.getItem('lng') || 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
