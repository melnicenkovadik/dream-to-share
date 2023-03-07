import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import useTranslation from "../../hooks/useTranslation";

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title?: string;
  thumb?: string;
};

export default function Layout({
  className,
  children,
  title,
  desc,
  thumb,
}: Props) {
  const { t, } = useTranslation();
  const description = desc || '';
  const thumbnail = thumb || t('siteName');

  return (
    <main className={className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={thumbnail} />
      </Head>
      <Header />
      {children}
      <Footer>
        <p>{t('siteName')} - {new Date().getFullYear()}</p>
      </Footer>
    </main>
  );
}
