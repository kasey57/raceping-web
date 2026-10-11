'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { ICON_SRC } from './site';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row">
        <p className="flex items-center gap-2">
          <Image src={ICON_SRC} alt="" width={20} height={20} className="rounded-full" />
          {t.footer.rights}
        </p>
        <p>{t.footer.disclaimer}</p>
        <p className="flex items-center gap-4">
          <Link href="/commands" className="hover:text-white">{t.footer.commands}</Link>
          <Link href="/changelog" className="hover:text-white">{t.footer.changelog}</Link>
          <Link href="/terms" className="hover:text-white">{t.footer.terms}</Link>
          <Link href="/privacy" className="hover:text-white">{t.footer.privacy}</Link>
        </p>
      </div>
    </footer>
  );
}
