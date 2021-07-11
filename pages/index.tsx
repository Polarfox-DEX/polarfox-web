import { PfxHighlight } from '../components/sections/PfxHighlight';
import { PfxFigures } from '../components/sections/PfxFigures';
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectives';
import { Products } from '../components/sections/Products';
import { PfxStatements } from '../components/sections/PfxStatements';
import { FAQ } from '../components/sections/FAQ';
import { Page, SectionWrapper } from '../components/Page';

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
