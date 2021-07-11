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
        <link rel="icon" href="/favicon.ico" />
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
