import HomeContent from '../home-content';

export const metadata = {
  title: 'Bot motorsportowy na Discorda | RacePing',
  description: 'Śledź 16 serii wyścigowych na Discordzie: F1, F2, F3, WEC, ELMS i IMSA. Sprawdzaj kalendarze, harmonogramy, wyniki, klasyfikacje i przypomnienia.',
  alternates: { canonical: '/pl/', languages: { 'en-US': '/', 'pl-PL': '/pl/' } },
  openGraph: { type: 'website', url: '/pl/', siteName: 'RacePing', title: 'Bot motorsportowy na Discorda | RacePing', description: 'Śledź 16 serii wyścigowych na Discordzie: F1, F2, F3, WEC, ELMS i IMSA. Sprawdzaj kalendarze, harmonogramy, wyniki, klasyfikacje i przypomnienia.', locale: 'pl_PL', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'Logo RacePing' }] },
  twitter: { card: 'summary_large_image', images: ['/opengraph.png'] },
};

export default function PolishHomePage() { return <HomeContent />; }
