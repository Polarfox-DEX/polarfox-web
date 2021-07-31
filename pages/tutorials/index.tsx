import { Page } from '../../components/Page'
import { TutorialsPane } from '../../components/tutorials/TutorialsPane'
import { TutorialsHeader } from '../../components/tutorials/TutorialsHeader'

export default function Tutorials() {
  return (
    <Page>
      <div className="container mt-32">
        <TutorialsHeader />
        <TutorialsPane />
      </div>
    </Page>
  )
}
