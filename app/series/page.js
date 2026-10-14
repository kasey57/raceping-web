import SeriesContent from './series-content';

export const metadata = {
  title: 'Supported Motorsport Series | RacePing',
  description: 'Explore 16 motorsport series supported by RacePing, including F1, F2, F3, WEC, ELMS, IMSA, MotoGP and NASCAR.',
  alternates: { canonical: '/series/', languages: { 'en-US': '/series/', 'pl-PL': '/pl/series/' } },
  openGraph: {
    type: 'website',
    url: '/series/',
    siteName: 'RacePing',
    title: 'Supported Motorsport Series | RacePing',
    description: 'Explore 16 motorsport series supported by RacePing, including F1, F2, F3, WEC, ELMS, IMSA, MotoGP and NASCAR.',
    locale: 'en_US',
    images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'RacePing logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supported Motorsport Series | RacePing',
    description: 'Explore 16 motorsport series supported by RacePing, including F1, F2, F3, WEC, ELMS, IMSA, MotoGP and NASCAR.',
    images: ['/opengraph.png'],
  },
};

export default function SeriesPage() {
  return <SeriesContent />;
}
