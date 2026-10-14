import CommandsContent from '../../commands/commands-content';

export const metadata = {
  title: 'Komendy bota na Discordzie | RacePing',
  description: 'Poznaj komendy RacePing do kalendarzy, harmonogramów wyścigów, wyników, klasyfikacji i przypomnień.',
  alternates: { canonical: '/pl/commands/', languages: { 'en-US': '/commands/', 'pl-PL': '/pl/commands/' } },
  openGraph: { type: 'website', url: '/pl/commands/', siteName: 'RacePing', title: 'Komendy bota na Discordzie | RacePing', description: 'Poznaj komendy RacePing do kalendarzy, harmonogramów wyścigów, wyników, klasyfikacji i przypomnień.', locale: 'pl_PL', images: [{ url: '/opengraph.png', width: 1200, height: 630, alt: 'Logo RacePing' }] },
};

export default function PolishCommandsPage() { return <CommandsContent />; }
