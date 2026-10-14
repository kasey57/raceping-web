'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from './i18n';
import { localizedPath } from './site';

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLang = 'en' }) {
  const [lang, setLang] = useState(initialLang);
  const [ready, setReady] = useState(false);

  // Locale is encoded in the URL so each language has a stable, crawlable page.
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const pathname = window.location.pathname.slice(basePath.length) || '/';
    setLang(pathname === '/pl' || pathname.startsWith('/pl/') ? 'pl' : 'en');
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
  }, [lang, ready]);

  const toggle = useCallback(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const pathname = window.location.pathname.slice(basePath.length) || '/';
    const isPolish = pathname === '/pl' || pathname.startsWith('/pl/');
    const englishPath = isPolish ? pathname.slice(3) || '/' : pathname;
    const target = localizedPath(englishPath, isPolish ? 'en' : 'pl');
    window.location.assign(`${basePath}${target}${window.location.search}${window.location.hash}`);
  }, []);

  const value = { lang, setLang, toggle, t: translations[lang] ?? translations.en };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

