import { Page } from '../components/Page'
import { AboutUs } from '../components/sections/AboutUs'
import { MainTeam } from '../components/sections/MainTeam'
import { OurMission } from '../components/sections/OurMission'
import { TeamMap } from '../components/sections/TeamMap'
import { WithBackgroundHeader } from '../components/utils/WithBackgroundImage'

export default function About() {
  return (
    <Page>
      <WithBackgroundHeader>
        <AboutUs className="mt-32 tablet:mt-60" />
        <OurMission className="mt-32 tablet:mt-60" />
        <TeamMap className="mt-22 tablet:mt-44" />
        <MainTeam className="mt-22 tablet:mt-44" />
      </WithBackgroundHeader>
    </Page>
  )
}
