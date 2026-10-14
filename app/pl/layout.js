import { LanguageProvider } from '../LanguageProvider';

export default function PolishLayout({ children }) {
  return <LanguageProvider initialLang="pl">{children}</LanguageProvider>;
}
