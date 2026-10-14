'use client';

import { useLang } from './LanguageProvider';
import { INVITE_URL } from './site';

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/15 via-panel/75 to-panel px-6 py-14 text-center shadow-2xl shadow-black/20 sm:px-12">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{t.final.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">{t.final.text}</p>
        <a href={INVITE_URL} className="btn-primary mt-8 px-10">
          {t.final.cta}
        </a>
      </div>
    </section>
  );
}
