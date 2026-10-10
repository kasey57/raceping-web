import './globals.css';
import { LanguageProvider } from './LanguageProvider';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'RacePing — Multi-Series Motorsport Discord Bot',
  description:
    'Schedules, live results, standings and DM reminders for F1, WEC, ELMS, Asian Le Mans, Le Mans Cup and IMSA, right inside Discord.',
  icons: { icon: `${BASE_PATH}/icon.png` },
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <body className="bg-carbon text-zinc-100 antialiased">{children}</body>
    </LanguageProvider>
  );
}
