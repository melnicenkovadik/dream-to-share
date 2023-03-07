import Link from 'next/link';
import useTranslation from "../../hooks/useTranslation";

type Props = {
  link?: string;
};

export default function Logo({ link }: Props) {
  const href = link || '/';
    const { t } = useTranslation();

  return (
    <Link href={href}>
      <a className="logo">
        <img src="/svg/logo.svg" alt="logo" /> &nbsp;
          <p>{t('siteName')}</p>
      </a>

    </Link>
  );
}
