import { Page } from '../components/Page'
import { FaqMain } from '../components/faq/FaqMain'
import { WithBackgroundForest1 } from '../components/utils/WithBackgroundImage'

export default function Faq() {
  return (
    <Page>
      <WithBackgroundForest1>
        <FaqMain className="mt-32 laptop:mt-48 desktop:mt-64" />
      </WithBackgroundForest1>
    </Page>
  )
}
