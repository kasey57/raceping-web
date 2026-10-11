'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { useLang } from './LanguageProvider';
import { LegalDoc } from './LegalDoc';

// Legal document page that follows the site language (EN/PL texts).
export default function LegalPage({ en, pl }) {
  const { lang } = useLang();
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <LegalDoc text={lang === 'pl' ? pl : en} />
      </div>
      <Footer />
    </div>
  );
}
