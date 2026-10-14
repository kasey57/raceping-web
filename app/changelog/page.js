import ChangelogContent from './changelog-content';

export const metadata = {
  title: 'Changelog | RacePing',
  description: 'Updates and release notes for the RacePing motorsport Discord bot.',
  robots: { index: false, follow: true },
};

export default function ChangelogPage() {
  return <ChangelogContent />;
}
