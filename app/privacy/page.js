import fs from 'node:fs';
import path from 'node:path';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { LegalDoc } from '../LegalDoc';

export const metadata = {
  title: 'Privacy Policy — RacePing',
};

function readLegal(name) {
  return fs.readFileSync(path.join(process.cwd(), 'content', name), 'utf8');
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <LegalDoc text={readLegal('privacy-policy.txt')} />
      </div>
      <Footer />
    </div>
  );
}
