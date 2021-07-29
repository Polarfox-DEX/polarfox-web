import { calcRem } from '../utils/styles'
import { Page } from '../components/Page'
import { FaqMain } from '../components/faq/FaqMain'

export default function Faq() {
  return (
    <Page>
      <FaqMain className="mt-64" />
      <div
        style={{
          minHeight: calcRem(300)
        }}
      />
    </Page>
  )
}
