import { useRouter } from 'next/router'
import { Page } from '../../components/Page'
import { TutorialPage } from '../../components/tutorials/TutorialPage'

export default function Tutorial(){

    const router = useRouter()
    const slug: string  = router.query?.slug

    return(
        <Page>
            <TutorialPage slug={slug}/>
        </Page>
    )

}