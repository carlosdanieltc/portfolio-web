import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es.json'
import en from './en.json'

i18n
    .use(LanguageDetector) // detecta idioma del navegador
    .use(initReactI18next) // conecta con React
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        fallbackLng: 'en', // si no encuentra el idioma, usa inglés
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;