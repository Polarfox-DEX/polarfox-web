import Head from 'next/head';
import { Header } from '../components/Header';
import { PfxHighlight } from '../components/sections/PfxHighlight';
import { PfxFigures } from '../components/sections/PfxFigures';
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectives';
import { Products } from '../components/sections/Products';
import { PfxStatements } from '../components/sections/PfxStatements';
import { FAQ } from '../components/sections/FAQSection';
import { WithBackgroundImage } from '../components/utils/WithBackgroundImage';
import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import classNames from 'classnames';
import { Page } from '../components/Page';

export default function Home() {
  return (
    <Page>
      <SectionWrapper backgroundImageUrl="/background/forest-1.jpg">
        <PfxHighlight />
      </SectionWrapper>

      <SectionWrapper>
        <PfxStatements className="mt-16" />
        <PfxFigures className="mt-44" />
        <PfxTokenObjectives className="mt-44" />
        <Products className="mt-44" />
        <FAQ className="my-44" />
      </SectionWrapper>
    </Page>
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
