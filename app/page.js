'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLang } from './LanguageProvider';
import { INVITE_URL, SUPPI_URL } from './site';

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{kicker}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-zinc-400">{text}</p>}
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();

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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pb-16 text-center lg:text-left">
        <div aria-hidden className="h-3 w-full" style={{ backgroundImage: 'repeating-conic-gradient(#e10600 0% 25%, #05070d 0% 50%)', backgroundSize: '18px 18px' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)' }} />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-[5%] h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 sm:pt-20 lg:grid-cols-2">
        <div>
        <p className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
          {t.hero.badge}
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl lg:mx-0 lg:text-7xl">
          {t.hero.title1}
          <span className="text-brand">{t.hero.title2}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400 lg:mx-0">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href={INVITE_URL}
            className="rounded-xl bg-brand px-8 py-3 font-semibold text-white hover:brightness-110"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#commands"
            className="rounded-xl border border-white/15 px-8 py-3 font-semibold text-zinc-200 hover:border-white/30"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          F1 · FE · MotoGP · Moto2 · Moto3 · IndyCar · NASCAR Cup · Xfinity · Truck · WEC · ELMS · ALMS · Le Mans Cup · IMSA
        </p>
        </div>
        <div>
        {/* Klu-style: command bar + product preview in a window frame */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-panel text-left shadow-2xl shadow-black/50 lg:mx-0">
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
          <div className="mx-4 mb-4 rounded-xl border-l-4 border-brand bg-carbon p-4">
            <p className="mb-2 text-xs uppercase tracking-wide text-zinc-500">{t.hero.demo.label}</p>
            <p className="font-bold text-white">United States Grand Prix <span className="ml-2 rounded bg-brand/15 px-2 py-0.5 text-xs font-semibold text-red-300">F1</span></p>
            <p className="mt-1 text-sm text-zinc-400">{t.hero.demo.detail}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">{t.hero.demo.qualifying}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">{t.hero.demo.race}</span>
              <span className="rounded-full bg-brand/15 px-3 py-1 font-semibold text-red-300">/remindme F1</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 lg:mx-0">
          {t.hero.stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-panel p-4 text-center">
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
      <section id="series" className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          kicker={t.sections.series.kicker}
          title={t.sections.series.title}
          text={t.sections.series.text}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.series.map((s) => (
            <div key={s.code} className="rounded-xl border border-white/10 bg-panel p-5">
              <p className="text-3xl">{s.emoji}</p>
              <p className="mt-2 font-bold">
                {s.name} <span className="ml-1 rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-300">{s.code}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-400">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-white/10 bg-panel/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle
            kicker={t.sections.features.kicker}
            title={t.sections.features.title}
            text={t.sections.features.text}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-panel p-5">
                <p className="font-bold text-red-400">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="mx-auto max-w-4xl px-4 py-16">
        <SectionTitle
          kicker={t.sections.commands.kicker}
          title={t.sections.commands.title}
          text={t.sections.commands.text}
        />
        <div className="overflow-hidden rounded-xl border border-white/10">
          {t.commands.map(([cmd, desc], i) => (
            <div
              key={cmd}
              className={`flex items-center justify-between gap-4 px-5 py-3 text-sm ${
                i % 2 === 0 ? 'bg-panel' : 'bg-carbon'
              }`}
            >
              <code className="rounded bg-black/50 px-2 py-1 font-sans text-red-300">{cmd}</code>
              <span className="text-right text-zinc-400">{desc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm">
          <Link href="/commands" className="text-red-400 hover:text-red-300">{t.commandsMore}</Link>
        </p>
      </section>

      {/* Setup steps */}
      <section className="border-y border-white/10 bg-panel/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle kicker={t.sections.setup.kicker} title={t.sections.setup.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-white/10 bg-panel p-6">
                <p className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-extrabold">
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
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
        <SectionTitle kicker={t.sections.faq.kicker} title={t.sections.faq.title} />
        <div className="space-y-3">
          {t.faq.map((f) => (
            <details key={f.q} className="group rounded-xl border border-white/10 bg-panel px-5 py-4">
              <summary className="cursor-pointer font-semibold marker:text-brand">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-panel/40">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <SectionTitle
            kicker={t.contact.kicker}
            title={t.contact.title}
            text={t.contact.text}
          />
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            <div className="min-w-0 rounded-xl border border-white/10 bg-panel p-4 text-center sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.discordLabel}</p>
              <p className="mt-2 font-display text-2xl font-bold">kaseyowski</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.discordNote}</p>
            </div>
            <a
              href="mailto:kaseyowski@proton.me"
              className="block min-w-0 rounded-xl border border-white/10 bg-panel p-4 text-center hover:border-brand/50 sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.emailLabel}</p>
              <p className="mt-2 break-all font-display text-xl font-bold sm:text-2xl">kaseyowski@proton.me</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.emailNote}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-panel px-6 py-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{t.support.kicker}</p>
          <h2 className="font-display text-3xl font-extrabold">{t.support.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">{t.support.text}</p>
          <a
            href={SUPPI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-brand px-10 py-3 font-semibold text-white hover:brightness-110"
          >
            {t.support.cta}
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-brand/30 bg-gradient-to-b from-brand/15 to-transparent px-6 py-14 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{t.final.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">{t.final.text}</p>
          <a
            href={INVITE_URL}
            className="mt-8 inline-block rounded-xl bg-brand px-10 py-3 font-semibold text-white hover:brightness-110"
          >
            {t.final.cta}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
