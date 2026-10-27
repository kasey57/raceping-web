'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';
import { useLang } from './LanguageProvider';
import { INVITE_URL, SUPPI_URL, localizedPath } from './site';

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-heading">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{text}</p>}
    </div>
  );
}

function formatWeekendRange(startDate, endDate, lang) {
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);
  const formatter = new Intl.DateTimeFormat(lang === 'pl' ? 'pl-PL' : 'en-US', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });

  return typeof formatter.formatRange === 'function'
    ? formatter.formatRange(start, end)
    : `${formatter.format(start)} – ${formatter.format(end)}`;
}

function getNextRaceName(race, lang) {
  if (lang === 'pl' && race.Circuit?.Location?.country === 'Mexico') {
    return 'Grand Prix Meksyku';
  }

  return race.raceName;
}

function getNextRaceDetail(race, lang, t) {
  const startDate = race.FirstPractice?.date || race.date;
  const location = race.Circuit?.Location?.locality || race.Circuit?.Location?.country;
  const circuit = race.Circuit?.circuitName;
  const parts = [formatWeekendRange(startDate, race.date, lang), location, circuit, t.hero.demo.countdown]
    .filter(Boolean);

  return parts.join(' · ');
}

export default function Home() {
  const { t, lang } = useLang();
  const href = (path) => localizedPath(path, lang);
  const [liveStats, setLiveStats] = useState(null);
  const [nextRace, setNextRace] = useState(null);

  useEffect(() => {
    let active = true;
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    async function refreshStats() {
      try {
        const response = await fetch(`${basePath}/stats.json?refresh=${Date.now()}`, { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        if (!Number.isFinite(data.guilds) || !Number.isFinite(data.users)) return;
        if (active) setLiveStats(data);
      } catch {
        // Keep the build-time values visible when the stats asset is unavailable.
      }
    }

    refreshStats();
    const interval = setInterval(refreshStats, 15 * 60 * 1000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function refreshNextRace() {
      try {
        const response = await fetch('https://api.jolpi.ca/ergast/f1/current/next.json?limit=1');
        if (!response.ok) return;

        const data = await response.json();
        const race = data?.MRData?.RaceTable?.Races?.[0];
        if (!race?.raceName || !race?.date) return;

        if (active) setNextRace(race);
      } catch {
        // Keep the latest calendar value embedded in the page when the API is unavailable.
      }
    }

    refreshNextRace();
    const interval = setInterval(refreshNextRace, 6 * 60 * 60 * 1000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  function statLabel(s) {
    if (s.label) return s.label;
    const n = Number(s.count);
    if (lang === 'pl') {
      if (n === 1) return s.one;
      const d10 = n % 10, d100 = n % 100;
      if (d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return s.few;
      return s.many;
    }
    return n === 1 ? s.one : s.other;
  }

  const numberLocale = lang === 'pl' ? 'pl-PL' : 'en-US';
  const stats = t.hero.stats.map((stat) => {
    if (!stat.key || !liveStats || !Number.isFinite(liveStats[stat.key])) return stat;
    const count = liveStats[stat.key];
    return { ...stat, count, value: count.toLocaleString(numberLocale) };
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pb-16 text-center lg:text-left">
        <div aria-hidden className="h-1 w-full bg-gradient-to-r from-brand via-red-400/70 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)' }} />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-[5%] h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
        <p className="eyebrow">
          {t.hero.badge}
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:mx-0 lg:text-7xl">
          {t.hero.title1}
          <span className="text-brand">{t.hero.title2}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href={INVITE_URL}
            className="btn-primary"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#commands"
            className="btn-secondary"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Supported series">
          {['F1', 'F2', 'F3', 'Formula E', 'MotoGP', 'Moto2', 'Moto3', 'IndyCar', 'WEC', 'ELMS', 'ALMS', 'Le Mans Cup', 'IMSA', 'NASCAR'].map((series) => (
            <span key={series} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-xs font-medium text-zinc-400">{series}</span>
          ))}
        </div>
        </div>
        <div>
        <div className="surface-card mx-auto max-w-2xl overflow-hidden text-left shadow-2xl shadow-black/50 lg:mx-0">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5 text-xs text-zinc-500">
            <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2">Discord — #race-weekend</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="rounded bg-black/60 px-2 py-1 font-sans text-sm text-red-300">/next F1</span>
            <span className="h-5 w-px animate-pulse bg-brand" />
            <span className="text-sm text-zinc-500">＋ schedule · result · standings</span>
          </div>
          <div className="mx-4 mb-4 rounded-xl border border-white/[0.07] border-l-4 border-l-brand bg-carbon/80 p-4 sm:p-5">
            <p className="mb-2 text-xs uppercase tracking-wide text-zinc-500">{t.hero.demo.label}</p>
            <p className="font-bold text-white">{nextRace ? getNextRaceName(nextRace, lang) : t.hero.demo.raceName} <span className="ml-2 rounded bg-brand/15 px-2 py-0.5 text-xs font-semibold text-red-300">F1</span></p>
            <p className="mt-1 text-sm text-zinc-400">{nextRace ? getNextRaceDetail(nextRace, lang, t) : t.hero.demo.detail}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">{t.hero.demo.qualifying}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">{t.hero.demo.race}</span>
              <span className="rounded-full bg-brand/15 px-3 py-1 font-semibold text-red-300">/remindme F1</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 lg:mx-0">
          {stats.map((s, i) => (
            <div key={i} className="surface-card rounded-xl p-4 text-center transition hover:border-white/20">
              <p className="text-3xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{statLabel(s)}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-500">{t.hero.statsNote}</p>
        </div>
        </div>
      </section>

      {/* Series */}
      <section id="series" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          kicker={t.sections.series.kicker}
          title={t.sections.series.title}
          text={t.sections.series.text}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.series.map((s) => (
            <div key={s.code} className="surface-card surface-card-hover group p-5">
              <p className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-2xl transition group-hover:border-brand/30 group-hover:bg-brand/10">{s.emoji}</p>
              <p className="mt-2 font-bold">
                {s.name} <span className="ml-1 rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-300">{s.code}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-400">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-white/[0.08] bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker={t.sections.features.kicker}
            title={t.sections.features.title}
            text={t.sections.features.text}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f) => (
              <div key={f.title} className="surface-card surface-card-hover group p-6">
                <span aria-hidden className="mb-5 block h-1 w-10 rounded-full bg-brand transition-all duration-200 group-hover:w-16" />
                <p className="font-bold text-zinc-100">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          kicker={t.sections.commands.kicker}
          title={t.sections.commands.title}
          text={t.sections.commands.text}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {t.commands.map(([cmd, desc], i) => (
            <div
              key={cmd}
              className="surface-card flex items-center justify-between gap-4 px-4 py-4 transition hover:border-white/20 sm:px-5"
            >
              <code className="shrink-0 rounded-lg border border-brand/20 bg-brand/10 px-2.5 py-1.5 font-sans text-sm text-red-200">{cmd}</code>
              <span className="text-right text-sm leading-relaxed text-zinc-400">{desc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm">
          <Link href={href('/commands')} className="text-red-400 hover:text-red-300">{t.commandsMore}</Link>
        </p>
      </section>

      {/* Setup steps */}
      <section className="border-y border-white/10 bg-panel/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle kicker={t.sections.setup.kicker} title={t.sections.setup.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.steps.map((s) => (
              <div key={s.n} className="surface-card surface-card-hover relative overflow-hidden p-6">
                <span aria-hidden className="absolute right-5 top-4 font-display text-7xl font-bold text-white/[0.035]">{s.n}</span>
                <p className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-lg font-extrabold shadow-lg shadow-brand/20">
                  {s.n}
                </p>
                <p className="mt-4 font-bold">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <SectionTitle kicker={t.sections.faq.kicker} title={t.sections.faq.title} />
        <div className="space-y-3">
          {t.faq.map((f) => (
            <details key={f.q} className="group surface-card px-5 py-4 transition open:border-white/20 open:bg-panel/90">
              <summary className="cursor-pointer list-none font-semibold marker:text-brand [&::-webkit-details-marker]:hidden"><span className="mr-3 text-brand">+</span>{f.q}</summary>
              <p className="mt-3 pl-6 text-sm leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/[0.08] bg-white/[0.018]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker={t.contact.kicker}
            title={t.contact.title}
            text={t.contact.text}
          />
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            <div className="surface-card min-w-0 p-5 text-center transition hover:border-white/20 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.discordLabel}</p>
              <p className="mt-2 font-display text-2xl font-bold">kaseyowski</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.discordNote}</p>
            </div>
            <a
              href="mailto:kaseyowski@proton.me"
              className="surface-card block min-w-0 p-5 text-center transition hover:border-brand/50 sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.emailLabel}</p>
              <p className="mt-2 break-all font-display text-xl font-bold sm:text-2xl">kaseyowski@proton.me</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.emailNote}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="discord-support" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="surface-card flex flex-col items-center p-6 text-center sm:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{t.discordSupport.kicker}</p>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t.discordSupport.title}</h2>
            <p className="mx-auto mt-3 max-w-xl flex-1 text-zinc-400">{t.discordSupport.text}</p>
            <a
              href="https://discord.gg/bDdx57YsHT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord mt-8 px-8"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M19.4 5.7A18.3 18.3 0 0 0 15 4.3l-.6 1.2a16.8 16.8 0 0 0-4.8 0L9 4.3a18.3 18.3 0 0 0-4.4 1.4C1.8 9.8 1 13.8 1.4 17.8a18.5 18.5 0 0 0 5.4 2.7l1.2-2a11.8 11.8 0 0 1-1.9-.9l.5-.4a13.2 13.2 0 0 0 10.8 0l.5.4a11.8 11.8 0 0 1-1.9.9l1.2 2a18.5 18.5 0 0 0 5.4-2.7c.5-4.6-.8-8.6-3.2-12.1ZM8.7 15.4c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
              </svg>
              {t.discordSupport.cta}
            </a>
          </div>
          <div id="support" className="surface-card flex flex-col items-center p-6 text-center sm:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{t.support.kicker}</p>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t.support.title}</h2>
            <p className="mx-auto mt-3 max-w-xl flex-1 text-zinc-400">{t.support.text}</p>
            <a
              href={SUPPI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 px-8"
            >
              {t.support.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
