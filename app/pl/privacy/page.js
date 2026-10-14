import fs from 'node:fs';
import path from 'node:path';
import LegalPage from '../../LegalPage';

export const metadata = {
  title: 'Polityka prywatności | RacePing',
  robots: { index: false, follow: true },
  alternates: { canonical: '/pl/privacy/' },
};

export default function PolishPrivacyPage() {
  const en = fs.readFileSync(path.join(process.cwd(), 'content', 'privacy-policy.txt'), 'utf8');
  const pl = fs.readFileSync(path.join(process.cwd(), 'content', 'privacy-policy-pl.txt'), 'utf8');
  return <LegalPage en={en} pl={pl} />;
}
