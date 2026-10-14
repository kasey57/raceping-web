import ExamplesContent from './examples-content';

export const metadata = {
  title: 'Discord Motorsport Bot Overview | RacePing',
  description: 'Explore visual examples of RacePing Discord replies for calendars, schedules, standings and results across motorsport series.',
  alternates: { canonical: '/overview/' },
  openGraph: {
    type: 'website',
    url: '/overview/',
    siteName: 'RacePing',
    title: 'Discord Motorsport Bot Overview | RacePing',
    description: 'Explore visual examples of RacePing Discord replies for calendars, schedules, standings and results across motorsport series.',
    locale: 'en_US',
    images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'RacePing logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Motorsport Bot Overview | RacePing',
    description: 'Explore visual examples of RacePing Discord replies for calendars, schedules, standings and results across motorsport series.',
    images: ['/opengraph.png'],
  },
};

export default function ExamplesPage() {
  return <ExamplesContent />;
}
