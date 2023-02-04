import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: process.env.NODE_ENV === 'production' ? false : true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    'learn': 'Learn React',
                    'description': 'Edit <1>src/App.js</1> and save to reload.'
                }
            },
            hu: {
                translation: {
                    'learn': 'Tanulj Reactozni',
                    'description': 'Szerkezd az <1>src/App.js</1> file-t, ments, hogy újratöltsön.'
                }
            }
        }
    });
