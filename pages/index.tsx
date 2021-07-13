import { PfxHighlight } from '../components/sections/PfxHighlight';
import { PfxFigures } from '../components/sections/PfxFigures';
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectives';
import { Products } from '../components/sections/Products';
import { PfxStatements } from '../components/sections/PfxStatements';
import { FAQ } from '../components/sections/FAQ';
import { Page } from '../components/Page';

export default function Home() {
  return (
    <Page>
      <PfxHighlight />
      <PfxStatements className="mt-16" />
      <PfxFigures className="mt-44" />
      <PfxTokenObjectives className="py-44" />
      <Products className="" />
      <FAQ className="my-44" />
    </Page>
  );
}
