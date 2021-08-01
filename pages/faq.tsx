import { Page } from '../components/Page'
import { FaqMain } from '../components/faq/FaqMain'
import { WithBackgroundImageNew } from '../components/utils/WithBackgroundImage'

export default function Faq() {
  return (
    <Page>
      <WithBackgroundImageNew
        className="bg-hidden"
        imageUrl="/background/forest-1.jpg"
        imageWidth={1440}
        imageHeight={821}
        minWidth={1024}
      >
        <FaqMain className="mt-32 laptop:mt-48 desktop:mt-64" />
      </WithBackgroundImageNew>
    </Page>
  )
}
