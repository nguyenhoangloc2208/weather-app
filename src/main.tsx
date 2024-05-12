import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router/router';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';
import translationCN from './locales/zh/translation.json';
import translationFR from './locales/fr/translation.json';
import translationJA from './locales/ja/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
  zh: {
    translation: translationCN,
  },  
  fr: {
    translation: translationFR,
  },  
  ja: {
    translation: translationJA,
  },
};

const lang = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: lang,
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
