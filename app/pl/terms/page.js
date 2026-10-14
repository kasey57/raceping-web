import fs from 'node:fs';
import path from 'node:path';
import LegalPage from '../../LegalPage';

export const metadata = {
  title: 'Warunki korzystania | RacePing',
  robots: { index: false, follow: true },
  alternates: { canonical: '/pl/terms/' },
};

export default function PolishTermsPage() {
  const en = fs.readFileSync(path.join(process.cwd(), 'content', 'terms-of-service.txt'), 'utf8');
  const pl = fs.readFileSync(path.join(process.cwd(), 'content', 'terms-of-service-pl.txt'), 'utf8');
  return <LegalPage en={en} pl={pl} />;
}
