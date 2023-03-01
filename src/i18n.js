import
	{ initReactI18next } from "react-i18next";
import
	common_en from './translations/en.json'
import
	common_ar from './translations/ar.json'

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const
	resources = {
  en: {
    translation:common_en
  },
  ar: {
    translation:common_ar
  }
  }

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    
  });


export default i18n;