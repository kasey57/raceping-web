'use client';

import { useLang } from './LanguageProvider';
import { INVITE_URL } from './site';

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/80 px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:px-10 sm:py-10">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{t.final.title}</h2>
            <p className="mt-3 leading-relaxed text-zinc-400">{t.final.text}</p>
          </div>
          <a href={INVITE_URL} className="btn-primary shrink-0 px-8 sm:min-w-52">
            {t.final.cta}
            <span aria-hidden className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
