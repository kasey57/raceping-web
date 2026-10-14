import HomeContent from './home-content';

export const metadata = {
  title: 'Motorsport Discord Bot for Schedules & Results | RacePing',
  description: 'Follow 16 motorsport series on Discord, including F1, F2, F3, WEC, ELMS and IMSA. Get race calendars, session schedules, results, standings and reminders.',
  alternates: { canonical: '/', languages: { 'en-US': '/', 'pl-PL': '/pl/' } },
  openGraph: { type: 'website', url: '/', siteName: 'RacePing', title: 'Motorsport Discord Bot for Schedules & Results | RacePing', description: 'Follow 16 motorsport series on Discord, including F1, F2, F3, WEC, ELMS and IMSA. Get race calendars, session schedules, results, standings and reminders.', locale: 'en_US', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'RacePing logo' }] },
  twitter: { card: 'summary_large_image', images: ['/opengraph.png'] },
};

export default function HomePage() { return <HomeContent />; }
