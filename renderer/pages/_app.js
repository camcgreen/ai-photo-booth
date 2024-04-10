import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>BOILERPLATE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
