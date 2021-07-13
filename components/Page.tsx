import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from '../styles/Page.module.css';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className={classNames(styles.container, 'text-blue')}>
      <Head>
        <title>Polarfox</title>
        <meta name="description" content="Polarfox | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
}
