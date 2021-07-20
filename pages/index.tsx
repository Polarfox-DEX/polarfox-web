import { PfxHighlight } from '../components/sections/PfxHighlight';
import { PfxFigures } from '../components/sections/PfxFigures';
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectives';
import { Products } from '../components/sections/Products';
import { PfxStatements } from '../components/sections/PfxStatements';
import { FaqPreview } from '../components/faq/FaqPreview';
import { Page } from '../components/Page';

export default function Home() {
  return (
    <Page>
      <PfxHighlight />
      <PfxStatements className="desktop:mt-16" />
      <PfxFigures className="mt-22 desktop:mt-44" />
      <PfxTokenObjectives className="mt-22 desktop:mt-44" />
      <Products className="mt-22 desktop:mt-44" />
      <FaqPreview className="mt-22 desktop:mt-44" />
    </Page>
  );
}
