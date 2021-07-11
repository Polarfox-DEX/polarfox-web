import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { PfxHighlight } from '../components/sections/PfxHighlightSection';
import { PfxFigures } from '../components/sections/PfxFiguresSection';
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectivesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { PfxStatements } from '../components/sections/PfxStatementsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { WithBackgroundImage } from '../components/utils/WithBackgroundImage';
import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import classNames from 'classnames';

export default function Home() {
  return (
    <div className={classNames(styles.container, 'text-blue')}>
      <Head>
        <title>Polarfox</title>
        <meta name="description" content="Polarfox | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SectionWrapper backgroundImageUrl="/background/forest-1.jpg">
        <PfxHighlight />
      </SectionWrapper>

      <SectionWrapper>
        <PfxStatements className="mt-16" />
        <PfxFigures className="mt-44" />
        <PfxTokenObjectives className="mt-44" />
        <ProductsSection className="mt-44" />
        <FAQSection className="my-44" />
      </SectionWrapper>

      <Footer />
    </div>
  );
}

interface SectionWrapperProps {
  backgroundImageUrl?: string;
  children: ReactNode;
}

function SectionWrapper({ backgroundImageUrl, children }: SectionWrapperProps) {
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
