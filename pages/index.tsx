import { FaqPreview } from '../components/faq/FaqPreview'
import { Page } from '../components/Page'
import { PfxFigures } from '../components/sections/PfxFigures'
import { PfxHighlight } from '../components/sections/PfxHighlight'
import { PfxStatements } from '../components/sections/PfxStatements'
import { PfxTokenObjectives } from '../components/sections/PfxTokenObjectives'
import { Products } from '../components/sections/Products'
import { Roadmap } from '../components/sections/Roadmap'

export default function Home() {
  return (
    <Page>
      <PfxHighlight />
      <PfxStatements className="mt-64 desktop:mt-16" />
      <PfxFigures className="mt-22 desktop:mt-44" />
      <PfxTokenObjectives className="mt-22 desktop:mt-44" />
      <Products className="mt-22 desktop:mt-44" />
      <Roadmap className="mt-22 desktop:mt-44" />
      <FaqPreview className="mt-8 desktop:mt-44" />
    </Page>
  )
}
