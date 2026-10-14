import ExamplesContent from './examples-content';

export const metadata = {
  title: 'Discord Motorsport Bot Overview | RacePing',
  description: 'See real RacePing Discord replies for race calendars, weekend schedules, driver standings and full results across 16 motorsport series.',
  alternates: { canonical: '/overview/' },
  openGraph: {
    type: 'website',
    url: '/overview/',
    siteName: 'RacePing',
    title: 'Discord Motorsport Bot Overview | RacePing',
    description: 'See real RacePing Discord replies for race calendars, weekend schedules, driver standings and full results across 16 motorsport series.',
    locale: 'en_US',
    images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'RacePing logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Motorsport Bot Overview | RacePing',
    description: 'See real RacePing Discord replies for race calendars, weekend schedules, driver standings and full results across 16 motorsport series.',
    images: ['/opengraph.png'],
  },
};

export default function ExamplesPage() {
  return <ExamplesContent />;
}
