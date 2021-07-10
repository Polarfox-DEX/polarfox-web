import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { PfxHighlightSection } from '../components/sections/PfxHighlightSection';
import { PfxFigures } from '../components/sections/PfxFiguresSection';
import { PfxTokenObjectivesSection } from '../components/sections/PfxTokenObjectivesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { PfxStatementsSection } from '../components/sections/PfxStatementsSection';
import { FAQSection } from '../components/sections/FAQSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polarfox</title>
        <meta name="description" content="Polarfox website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container flex flex-col items-stretch text-blue"
        style={{ width: '1200px' }}
      >
        <Header className="pt-10" />
        <PfxHighlightSection className="mt-32" />
        <PfxStatementsSection className="mt-48" />
        <PfxFigures className="mt-32" />
        <PfxTokenObjectivesSection className="mt-32" />
        <ProductsSection className="mt-32" />
        <FAQSection className="mt-32" />
      </div>
    </div>
  );
}
