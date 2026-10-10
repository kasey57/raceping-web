'use client';

import Image from 'next/image';
import { useLang } from './LanguageProvider';

// OAuth2 invite: bot + slash commands with minimal permissions
// (View Channel, Send Messages, Embed Links, Mention Everyone, Read History, Use Commands).
// Same value as basePath in next.config.js; prefixes image URLs that Next.js
// does not rewrite automatically in a static export.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const ICON_SRC = `${BASE_PATH}/icon.png`;
const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1558550077948043345&permissions=2147699712&scope=bot+applications.commands';

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{kicker}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-zinc-400">{text}</p>}
    </div>
  );
}

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

export default function Home() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-carbon/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-bold">
            <Image src={ICON_SRC} alt="RacePing" width={32} height={32} className="rounded-full" />
            RacePing
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#series" className="hover:text-white">{t.nav.series}</a>
            <a href="#features" className="hover:text-white">{t.nav.features}</a>
            <a href="#commands" className="hover:text-white">{t.nav.commands}</a>
            <a href="#faq" className="hover:text-white">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
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

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:pt-28">
        <Image
          src={ICON_SRC}
          alt="RacePing bot avatar"
          width={112}
          height={112}
          className="mx-auto rounded-3xl shadow-2xl shadow-brand/20"
          priority
        />
        <p className="mt-6 inline-block rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
          {t.hero.badge}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          {t.hero.title1}
          <span className="text-brand">{t.hero.title2}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-panel p-4">
              <p className="text-3xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Series */}
      <section id="series" className="mx-auto max-w-6xl px-4 py-16">
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
        <div className="mx-auto max-w-6xl px-4 py-16">
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
              <code className="rounded bg-black/50 px-2 py-1 font-mono text-red-300">{cmd}</code>
              <span className="text-right text-zinc-400">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Setup steps */}
      <section className="border-y border-white/10 bg-panel/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-panel p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.discordLabel}</p>
              <p className="mt-2 font-display text-2xl font-bold">kasey56</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.discordNote}</p>
            </div>
            <a
              href="mailto:doxdel27@aol.com"
              className="block rounded-xl border border-white/10 bg-panel p-6 text-center hover:border-brand/50"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.contact.emailLabel}</p>
              <p className="mt-2 font-display text-2xl font-bold">doxdel27@aol.com</p>
              <p className="mt-1 text-sm text-zinc-400">{t.contact.emailNote}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
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
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row">
          <p className="flex items-center gap-2">
            <Image src={ICON_SRC} alt="" width={20} height={20} className="rounded-full" />
            {t.footer.rights}
          </p>
          <p>{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
