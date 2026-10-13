'use client';

import Navbar from '../Navbar';
import Footer from '../Footer';
import { translations } from '../i18n';

// Keep changelog entries in English. Add major updates when they reach production.
const entries = [
  {
    date: '2026-10-12',
    title: 'Personal language and timezone settings',
    body: 'Each member can choose English or Polish for server commands with /lang en or /lang pl, check their choice with /lang current, and set a personal timezone with /timezone. Direct messages still follow the Discord client language. Administrators use /setup to choose the default language for shared channel posts.',
  },
  {
    date: '2026-10-12',
    title: 'NASCAR coverage, 14 series and /info',
    body: 'RacePing now supports 14 racing series and 15 top-level slash commands. NASCAR Cup Series, NASCAR O’Reilly Auto Parts Series and NASCAR Craftsman Truck Series coverage includes calendars, schedules, results, standings and reminders. The new /info command summarizes supported series and recent features; /reminders lists active personal reminders.',
  },
  {
    date: '2026-10-11',
    title: 'Formula E, motorcycle racing and IndyCar added',
    body: 'RacePing now covers Formula E, MotoGP, Moto2, Moto3 and IndyCar alongside Formula 1 (F1), FIA World Endurance Championship (FIA WEC), European Le Mans Series (ELMS), Asian Le Mans Series (ALMS), Michelin Le Mans Cup and IMSA. Series shortcuts are available from /next, with calendars, schedules, results and standings where supported.',
  },
  {
    date: '2026-10-11',
    title: 'Complete paginated results in server channels',
    body: 'Channel result posts now include the full classification with pagination instead of a short top-five list. Administrators can turn automatic result posts off in /channel add settings.',
  },
  {
    date: '2026-10-11',
    title: 'Championship standings and result embeds improved',
    body: 'Endurance standings now use championship points for teams and manufacturers where official tables are available. Result embeds put session details first and use a consistent podium layout.',
  },
  {
    date: '2026-10-11',
    title: 'Race-aware bot activity',
    body: 'The bot shows the name of a currently running race as its Watching activity. When no race is underway, it points users to /help and raceping.xyz.',
  },
];

export default function ChangelogPage() {
  const copy = translations.en.changelog;

  return (
    <div className="min-h-screen">
      <Navbar forceEnglish />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{copy.kicker}</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{copy.title}</h1>
          <p className="mt-3 text-zinc-400">{copy.intro}</p>
        </header>

        {entries.length > 0 ? (
          <ol className="space-y-4">
            {entries.map((entry) => (
              <li key={`${entry.date}-${entry.title}`} className="rounded-xl border border-white/10 bg-panel px-5 py-5">
                <time dateTime={entry.date} className="text-sm font-medium text-red-400">
                  {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
                  }).format(new Date(`${entry.date}T12:00:00Z`))}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold">{entry.title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-300">{entry.body}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="rounded-xl border border-white/10 bg-panel px-5 py-6 text-center text-zinc-400">
            {copy.empty}
          </p>
        )}
      </main>
      <Footer forceEnglish />
    </div>
  );
}
