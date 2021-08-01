import { Page } from '../components/Page'
import { AboutUs } from '../components/sections/AboutUs'
import { MainTeam } from '../components/sections/MainTeam'
import { OurMission } from '../components/sections/OurMission'
import { TeamMap } from '../components/sections/TeamMap'
import { WithBackgroundImageNew } from '../components/utils/WithBackgroundImage'

export default function About() {
  return (
    <Page>
      <WithBackgroundImageNew imageUrl="/background/forest-1.jpg">
        <AboutUs className="mt-32 tablet:mt-60" />
        <OurMission className="mt-44 tablet:mt-72" />
        <TeamMap className="mt-22 tablet:mt-44" />
        <MainTeam className="mt-22 tablet:mt-44" />
      </WithBackgroundImageNew>
    </Page>
  )
}
