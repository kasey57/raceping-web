'use client';

import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FinalCTA from '../FinalCTA';
import { useLang } from '../LanguageProvider';
import { INVITE_URL } from '../site';

const EXAMPLES = [
  { key: 'endurance', file: 'result-endurance.png', width: 522, height: 740, command: '/result-endurance' },
  { key: 'standings', file: 'standings.png', width: 268, height: 432, command: '/standings' },
  { key: 'result', file: 'result.png', width: 504, height: 631, command: '/result' },
  { key: 'last', file: 'last.png', width: 504, height: 631, command: '/last' },
  { key: 'calendar', file: 'calendar.png', width: 507, height: 603, command: '/calendar' },
  { key: 'raceweek', file: 'raceweek.png', width: 521, height: 408, command: '/raceweek' },
  { key: 'schedule', file: 'schedule.png', width: 522, height: 319, command: '/schedule' },
];

export default function ExamplesContent() {
  const { t } = useLang();
  const page = t.examplesPage;
  const renderExample = (example, className) => {
    const copy = page.items[example.key];
    return (
      <article key={example.key} className={className}>
        <div className="border-b border-white/[0.08] p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-400">{example.command}</p>
          <h3 className="mt-2 font-display text-xl font-bold">{copy.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{copy.text}</p>
        </div>
        <div className="flex min-h-28 items-start justify-center bg-[#17181c] p-3 sm:p-4">
          <Image
            src={`/examples/${example.file}`}
            alt={`${example.command} — ${copy.title}`}
            width={example.width}
            height={example.height}
            unoptimized={example.file.endsWith('.svg')}
            className="block h-auto max-w-full object-contain object-top"
          />
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-12 text-center">
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-brand via-red-400/70 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 40% 10%, black 25%, transparent 75%)' }} />
          <div aria-hidden className="pointer-events-none absolute -top-24 left-[5%] h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="eyebrow">{page.hero.badge}</p>
            <h1 className="section-heading mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">{page.hero.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{page.hero.text}</p>
            {page.hero.note && <p className="mt-6 text-sm text-zinc-500">{page.hero.note}</p>}
            <a href={INVITE_URL} className="btn-primary mt-8">{t.nav.cta}</a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker">{page.hero.badge}</p>
            <h2 className="section-heading">{page.galleryTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{page.galleryText}</p>
          </div>
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
            {EXAMPLES.map((example) => renderExample(example, 'surface-card surface-card-hover mb-4 inline-block w-full break-inside-avoid overflow-hidden'))}
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
