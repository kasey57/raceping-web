'use client';

import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLang } from '../LanguageProvider';

// Add bilingual entries here when significant changes reach production.
const entries = [];

export default function ChangelogPage() {
  const { lang, t } = useLang();
  const copy = t.changelog;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{copy.kicker}</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{copy.title}</h1>
          <p className="mt-3 text-zinc-400">{copy.intro}</p>
        </header>

        {entries.length > 0 ? (
          <ol className="space-y-4">
            {entries.map((entry) => (
              <li key={entry.date} className="rounded-xl border border-white/10 bg-panel px-5 py-5">
                <time dateTime={entry.date} className="text-sm font-medium text-red-400">
                  {new Intl.DateTimeFormat(lang === 'pl' ? 'pl-PL' : 'en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
                  }).format(new Date(`${entry.date}T12:00:00Z`))}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold">{entry[lang].title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-300">{entry[lang].body}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="rounded-xl border border-white/10 bg-panel px-5 py-6 text-center text-zinc-400">
            {copy.empty}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
