import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from '../styles/Page.module.css';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';
import { WithBackgroundImage } from './utils/WithBackgroundImage';

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className={classNames(styles.container, 'text-blue')}>
      <Head>
        <title>Polarfox</title>
        <meta name="description" content="Polarfox | Home" />
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

interface SectionWrapperProps {
  backgroundImageUrl?: string;
  children: ReactNode;
}

export function SectionWrapper({
  backgroundImageUrl,
  children,
}: SectionWrapperProps) {
  const section = (
    <div className="mx-auto" style={{ width: '1200px' }}>
      {children}
    </div>
  );

  if (!backgroundImageUrl) return section;

  return (
    <WithBackgroundImage imageUrl={backgroundImageUrl}>
      {section}
    </WithBackgroundImage>
  );
}
