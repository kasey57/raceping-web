'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { ICON_SRC, INVITE_URL } from './site';

function LangToggle() {
  const { lang, toggle, t } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.langLabel}
      className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-zinc-200 hover:border-white/30"
    >
      <span className={lang === 'en' ? 'text-white' : 'text-zinc-500'}>EN</span>
      <span className="text-zinc-600">/</span>
      <span className={lang === 'pl' ? 'text-white' : 'text-zinc-500'}>PL</span>
    </button>
  );
}

export default function Navbar() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-carbon/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src={ICON_SRC} alt="RacePing" width={32} height={32} className="rounded-full" />
          RacePing
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <Link href="/#series" className="hover:text-white">{t.nav.series}</Link>
          <Link href="/#features" className="hover:text-white">{t.nav.features}</Link>
          <Link href="/#commands" className="hover:text-white">{t.nav.commands}</Link>
          <Link href="/#faq" className="hover:text-white">{t.nav.faq}</Link>
          <Link href="/#contact" className="hover:text-white">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <a
            href={INVITE_URL}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
