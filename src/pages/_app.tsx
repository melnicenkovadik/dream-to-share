import { AppPropsType } from 'next/dist/shared/lib/utils';
import { LanguageProvider } from '../contexts/LanguageContext';

import '../styles/layout.css';

export default function App({ Component, pageProps, router }: AppPropsType) {
    return (
    <LanguageProvider>
        {/* @ts-ignore*/}
      <Component {...pageProps} key={router.route} />
    </LanguageProvider>
  );
}
