import { useRouter } from 'next/router'
import { Page } from '../../components/Page'
import { TutorialPage } from '../../components/tutorials/TutorialPage'

export default function Tutorial() {
  const router = useRouter()
  const slug = (router.query.slug ?? '').toString()

  return (
    <Page>
      <TutorialPage slug={slug} />
    </Page>
  )
}
