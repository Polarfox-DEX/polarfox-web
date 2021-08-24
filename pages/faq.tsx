import { Page } from '../components/Page'
import { FaqMain } from '../components/faq/FaqMain'
import { WithBackgroundHeader } from '../components/utils/WithBackgroundImage'

export default function Faq() {
  return (
    <Page>
      <WithBackgroundHeader>
        <FaqMain className="mt-32 laptop:mt-48 desktop:mt-64" />
      </WithBackgroundHeader>
    </Page>
  )
}
