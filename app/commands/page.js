'use client';

import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLang } from '../LanguageProvider';

export default function CommandsPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">{t.commandPage.kicker}</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{t.commandPage.title}</h1>
          <p className="mt-3 text-zinc-400">{t.commandPage.text}</p>
        </div>
        <div className="space-y-3">
          {t.fullCommands.map((c) => (
            <div key={c.cmd} className="rounded-xl border border-white/10 bg-panel px-5 py-4">
              <code className="rounded bg-black/50 px-2 py-1 font-mono text-sm text-red-300">{c.cmd}</code>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">{c.desc}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-zinc-500">{c.args}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          <Link href="/#commands" className="text-red-400 hover:text-red-300">← {t.nav.commands}</Link>
        </p>
      </section>

      <Footer />
    </div>
  );
}
