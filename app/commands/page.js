import CommandsContent from './commands-content';

export const metadata = {
  title: 'Discord Bot Commands | RacePing',
  description: 'Browse RacePing slash commands for motorsport calendars, race schedules, results, standings and reminders.',
  alternates: { canonical: '/commands/', languages: { 'en-US': '/commands/', 'pl-PL': '/pl/commands/' } },
  openGraph: { type: 'website', url: '/commands/', siteName: 'RacePing', title: 'Discord Bot Commands | RacePing', description: 'Browse RacePing slash commands for motorsport calendars, race schedules, results, standings and reminders.', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'RacePing logo' }] },
};

export default function CommandsPage() { return <CommandsContent />; }
