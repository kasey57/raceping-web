import './globals.css';
import { DM_Sans } from 'next/font/google';
import { LanguageProvider } from './LanguageProvider';

const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'RacePing — Multi-Series Motorsport Discord Bot',
  description:
    'Schedules, live results, standings and DM reminders for F1, WEC, ELMS, Asian Le Mans, Le Mans Cup and IMSA, right inside Discord.',
  icons: { icon: `${BASE_PATH}/icon.png` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.variable} bg-carbon font-sans text-zinc-100 antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
