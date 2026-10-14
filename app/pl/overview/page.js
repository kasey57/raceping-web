import OverviewContent from '../../examples/examples-content';

export const metadata = {
  title: 'Bot motorsportowy na Discordzie — przegląd | RacePing',
  description: 'Zobacz prawdziwe odpowiedzi RacePing na Discordzie: kalendarze wyścigów, harmonogramy weekendów, klasyfikacje kierowców i pełne wyniki.',
  alternates: { canonical: '/pl/overview/', languages: { 'en-US': '/overview/', 'pl-PL': '/pl/overview/' } },
  openGraph: { type: 'website', url: '/pl/overview/', siteName: 'RacePing', title: 'Bot motorsportowy na Discordzie — przegląd | RacePing', description: 'Zobacz prawdziwe odpowiedzi RacePing na Discordzie: kalendarze wyścigów, harmonogramy weekendów, klasyfikacje kierowców i pełne wyniki.', locale: 'pl_PL', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'Logo RacePing' }] },
};

export default function PolishOverviewPage() { return <OverviewContent />; }
