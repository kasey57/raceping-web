import fs from 'node:fs';
import path from 'node:path';
import LegalPage from '../LegalPage';

export const metadata = {
  title: 'Terms of Service — RacePing',
};

function readLegal(name) {
  return fs.readFileSync(path.join(process.cwd(), 'content', name), 'utf8');
}

export default function TermsPage() {
  return <LegalPage en={readLegal('terms-of-service.txt')} pl={readLegal('terms-of-service-pl.txt')} />;
}
