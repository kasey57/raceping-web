import './globals.css';
import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { LanguageProvider } from './LanguageProvider';
import { translations } from './i18n';

const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const GA_MEASUREMENT_ID = 'G-BK83PH0Z8M';

export const metadata = {
  metadataBase: new URL('https://raceping.xyz'),
  title: translations.en.meta.title,
  description: translations.en.meta.description,
  icons: { icon: `${BASE_PATH}/icon.png` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.variable} bg-carbon font-sans text-zinc-100 antialiased`}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
