'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from './i18n';
import { LANGUAGES } from './i18n';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'raceping-lang';

function initialLang() {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;
  return navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  // Resolve after mount so SSR and the first client render stay in sync.
  useEffect(() => {
    setLang(initialLang());
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'pl' : 'en'));
  }, []);

  const value = { lang, setLang, toggle, t: translations[lang] ?? translations.en };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

export { LANGUAGES };
