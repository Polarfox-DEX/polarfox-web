import { Page } from '../../components/Page'
import { TutorialsPane } from '../../components/tutorials/TutorialsPane'
import { TutorialsHeader } from '../../components/tutorials/TutorialsHeader'

export default function Tutorials() {
  return (
    <Page>
        <TutorialsHeader className="container mt-32"/>
        <TutorialsPane className="mt-10" />
    </Page>
  )
}
