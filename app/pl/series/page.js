import SeriesContent from '../../series/series-content';

export const metadata = {
  title: 'Obsługiwane serie wyścigowe | RacePing',
  description: 'Poznaj 16 serii wyścigowych obsługiwanych przez RacePing, w tym F1, F2, F3, WEC, ELMS, IMSA, MotoGP i NASCAR.',
  alternates: { canonical: '/pl/series/', languages: { 'en-US': '/series/', 'pl-PL': '/pl/series/' } },
  openGraph: { type: 'website', url: '/pl/series/', siteName: 'RacePing', title: 'Obsługiwane serie wyścigowe | RacePing', description: 'Poznaj 16 serii wyścigowych obsługiwanych przez RacePing, w tym F1, F2, F3, WEC, ELMS, IMSA, MotoGP i NASCAR.', locale: 'pl_PL', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'Logo RacePing' }] },
};

export default function PolishSeriesPage() { return <SeriesContent />; }
