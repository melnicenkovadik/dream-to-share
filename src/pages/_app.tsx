import {AppPropsType} from 'next/dist/shared/lib/utils';
import Layout from '../components/Layout';
import {LanguageProvider} from '../contexts/LanguageContext';

import '../styles/index.scss';

export default function App({Component, pageProps, router}: AppPropsType) {
    return (
        <LanguageProvider>
            <Layout>
                {/* @ts-ignore*/}
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </LanguageProvider>
    );
}
