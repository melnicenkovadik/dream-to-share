import Link from 'next/link';

import Layout from '../components/Layout';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
    const {t, locale} = useTranslation();

    return (
        <section className="hero">
            <div className="message">
                <h1>{t('siteName')}</h1>
                <Link href={`/${locale}/about`}>
                    <a className="button">{t('about')}</a>
                </Link>
            </div>
        </section>
    );
}
