import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '../../public/locales/cs/common.json';

const resources = {
  cs: {
    common: commonEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cs',
  fallbackLng: 'cs',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
