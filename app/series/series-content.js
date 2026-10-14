'use client';

import Navbar from '../Navbar';
import Footer from '../Footer';
import FinalCTA from '../FinalCTA';
import { useLang } from '../LanguageProvider';
import { INVITE_URL } from '../site';

const GROUPS = [
  { key: 'formula', codes: ['F1', 'F2', 'F3', 'FE', 'INDYCAR'] },
  { key: 'endurance', codes: ['FIA WEC', 'ELMS', 'ALMS', 'LMC', 'IMSA'] },
  { key: 'motorcycles', codes: ['MOTOGP', 'MOTO2', 'MOTO3'] },
  { key: 'nascar', codes: ['NASCAR', 'O’REILLY', 'TRUCK'] },
];

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-heading">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-zinc-400">{text}</p>}
    </div>
  );
}

export default function SeriesContent() {
  const { t } = useLang();
  const page = t.seriesPage;
  const seriesByCode = new Map(t.series.map((series) => [series.code, series]));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="top" className="relative overflow-hidden pb-16 text-center lg:text-left">
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-brand via-red-400/70 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)' }} />
          <div aria-hidden className="pointer-events-none absolute -top-24 left-[5%] h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="eyebrow">{page.hero.badge}</p>
              <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:mx-0 lg:text-7xl">
                {page.hero.title1}<span className="text-brand">{page.hero.title2}</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0">{page.hero.subtitle}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a href={INVITE_URL} className="btn-primary">{page.hero.ctaPrimary}</a>
                <a href="#series-list" className="btn-secondary">{page.hero.ctaSecondary}</a>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Formula 1 · Formula 2 · Formula 3 · Formula E · MotoGP · FIA WEC · ELMS · IMSA · NASCAR</p>
            </div>

            <div className="surface-card mx-auto w-full max-w-2xl overflow-hidden text-left shadow-2xl shadow-black/50 lg:mx-0">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3 text-xs text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2">RacePing — {page.hero.panelLabel}</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">{page.hero.panelLabel}</p>
                    <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">{page.hero.panelTitle}</h2>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-3xl font-extrabold text-brand">16</p>
                    <p className="text-xs text-zinc-500">{page.hero.stat}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {page.hero.categories.map((category) => (
                    <div key={category.name} className="rounded-xl border border-white/10 bg-carbon/70 px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-zinc-100">{category.name}</p>
                        <span className="shrink-0 rounded-full bg-brand/15 px-2.5 py-1 text-xs font-semibold text-red-300">{category.count}</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm">{category.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="series-list" className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle kicker={page.list.kicker} title={page.list.title} text={page.list.text} />
          <div className="space-y-12">
            {GROUPS.map((group) => (
              <section key={group.key} aria-labelledby={`series-${group.key}`}>
                <h3 id={`series-${group.key}`} className="mb-4 border-l-2 border-brand pl-3 font-display text-xl font-bold">{page.groupNames[group.key]}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.codes.map((code) => {
                    const series = seriesByCode.get(code);
                    if (!series) return null;
                    return (
                      <article key={series.code} className="surface-card surface-card-hover group p-5">
                        <p aria-hidden className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-2xl transition group-hover:border-brand/30 group-hover:bg-brand/10">{series.emoji}</p>
                        <h4 className="mt-2 font-bold text-white">
                          {series.name} <span className="ml-1 rounded bg-white/10 px-2 py-0.5 text-xs font-medium text-zinc-300">{series.code}</span>
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{series.note}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
