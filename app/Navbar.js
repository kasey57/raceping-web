'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { translations } from './i18n';
import { ICON_SRC, INVITE_URL, localizedPath } from './site';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function LangToggle({ forceEnglish = false }) {
  const { lang, t } = useLang();
  const routerPath = usePathname() || '/';
  if (forceEnglish) return null;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pathname = basePath && routerPath.startsWith(basePath)
    ? routerPath.slice(basePath.length) || '/'
    : routerPath;
  const isPolish = pathname === '/pl' || pathname.startsWith('/pl/');
  const englishPath = isPolish ? pathname.slice(3) || '/' : pathname;
  const targetPath = localizedPath(englishPath, isPolish ? 'en' : 'pl');
  return (
    <Link
      href={targetPath}
      aria-label={(forceEnglish ? translations.en : t).nav.langLabel}
      className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-zinc-200 hover:border-white/30"
    >
      <span className={lang === 'en' ? 'text-white' : 'text-zinc-500'}>EN</span>
      <span className="text-zinc-600">/</span>
      <span className={lang === 'pl' ? 'text-white' : 'text-zinc-500'}>PL</span>
    </Link>
  );
}

export default function Navbar({ forceEnglish = false }) {
  const { t: currentT } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = forceEnglish ? translations.en : currentT;
  const href = (path) => localizedPath(path, forceEnglish ? 'en' : lang);
  const links = [
    ['/series', t.nav.series],
    ['/overview', t.nav.examples],
    ['/#features', t.nav.features],
    ['/#commands', t.nav.commands],
    ['/#faq', t.nav.faq],
    ['/#contact', t.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-carbon/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={href('/')} className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-panel shadow-lg shadow-black/20">
            <Image src={ICON_SRC} alt="RacePing" width={29} height={29} className="rounded-lg" />
          </span>
          RacePing
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 text-sm text-zinc-300 lg:flex" aria-label="Main navigation">
          {links.map(([path, label]) => <Link key={path} href={href(path)} className="rounded-full px-3 py-2 transition hover:bg-white/[0.07] hover:text-white">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LangToggle forceEnglish={forceEnglish} />
            <a href={INVITE_URL} className="btn-primary rounded-lg px-4 py-2 text-sm">{t.nav.cta}</a>
          </div>
          <button
            type="button"
            className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? t.nav.closeMenu : t.nav.menu}
          </button>
        </div>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="border-t border-white/10 bg-carbon/95 px-4 py-3 lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm text-zinc-300">
          {links.map(([path, label]) => <Link key={path} href={href(path)} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 transition hover:bg-white/[0.06] hover:text-white">{label}</Link>)}
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 px-3 pt-3 md:hidden">
            <LangToggle forceEnglish={forceEnglish} />
            <a href={INVITE_URL} className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:brightness-110">{t.nav.cta}</a>
          </div>
        </div>
      </nav>}
    </header>
  );
}
