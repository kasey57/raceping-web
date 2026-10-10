import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { LegalDoc } from '../LegalDoc';

export const metadata = {
  title: 'Privacy Policy — RacePing',
};

function readLegal(name) {
  return fs.readFileSync(path.join(process.cwd(), 'content', name), 'utf8');
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/" className="text-sm text-zinc-400 hover:text-white">
        ← RacePing
      </Link>
      <div className="mt-6">
        <LegalDoc text={readLegal('privacy-policy.txt')} />
      </div>
    </div>
  );
}
