import React from 'react';
import Layout from "../../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllIds} from "../../../lib/files";
import useTranslation from "../../../hooks/useTranslation";
import Link from "next/link";

type AboutProps = {
    locale: string;
};

export default function About({locale}: AboutProps) {
    const {t} = useTranslation();
    return (

            <section className="hero">
                <div className="message">
                    <h1>{t('about')} {locale}</h1>
                    <Link href="/">
                        <a className="button">{t('goBack')}</a>
                    </Link>
                </div>
            </section>
    );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    return {
        props: {
            locale: params?.lang || 'en',
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllIds();

    return {
        paths,
        fallback: false,
    };
};
