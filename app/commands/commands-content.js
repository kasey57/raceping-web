'use client';

import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLang } from '../LanguageProvider';
import { localizedPath } from '../site';

export default function CommandsPage() {
  const { t, lang } = useLang();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="surface-card relative mb-10 overflow-hidden px-6 py-10 text-center sm:px-12 sm:py-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,0,0.13),transparent_65%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker">{t.commandPage.kicker}</p>
            <h1 className="section-heading text-4xl sm:text-5xl">{t.commandPage.title}</h1>
            <p className="mt-4 leading-relaxed text-zinc-400">{t.commandPage.text}</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.fullCommands.map((c) => (
            <div key={c.cmd} className="surface-card surface-card-hover flex min-h-36 flex-col px-5 py-4">
              <code className="w-fit max-w-full break-words rounded-lg border border-brand/20 bg-brand/10 px-2.5 py-1.5 font-sans text-sm text-red-200">{c.cmd}</code>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">{c.desc}</p>
              <p className="mt-auto pt-3 font-sans text-xs leading-relaxed text-zinc-500">{c.args}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          <Link href={localizedPath('/#commands', lang)} className="text-red-400 hover:text-red-300">← {t.nav.commands}</Link>
        </p>
      </section>

      <Footer />
    </div>
  );
}
