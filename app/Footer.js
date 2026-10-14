'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { translations } from './i18n';
import { ICON_SRC, localizedPath } from './site';

export default function Footer({ forceEnglish = false }) {
  const { t: currentT, lang } = useLang();
  const t = forceEnglish ? translations.en : currentT;
  const href = (path) => path === '/changelog'
    ? path
    : localizedPath(path, forceEnglish ? 'en' : lang);
  return (
    <footer className="border-t border-white/[0.08] bg-black/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-panel">
            <Image src={ICON_SRC} alt="" width={23} height={23} className="rounded-md" />
          </span>
          {t.footer.rights}
        </p>
        <p className="max-w-xl text-center text-xs leading-relaxed sm:text-left">{t.footer.disclaimer}</p>
        <p className="flex items-center gap-4">
          <Link href={href('/commands')} className="hover:text-white">{t.footer.commands}</Link>
          <Link href={href('/changelog')} className="hover:text-white">{t.footer.changelog}</Link>
          <Link href={href('/terms')} className="hover:text-white">{t.footer.terms}</Link>
          <Link href={href('/privacy')} className="hover:text-white">{t.footer.privacy}</Link>
        </p>
      </div>
    </footer>
  );
}
