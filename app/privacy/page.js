import fs from 'node:fs';
import path from 'node:path';
import LegalPage from '../LegalPage';

export const metadata = {
  title: 'Privacy Policy — RacePing',
};

function readLegal(name) {
  return fs.readFileSync(path.join(process.cwd(), 'content', name), 'utf8');
}

export default function PrivacyPage() {
  return <LegalPage en={readLegal('privacy-policy.txt')} pl={readLegal('privacy-policy-pl.txt')} />;
}
