import { Page } from '../components/Page'
import { AboutUs } from '../components/sections/AboutUs'
import { MainTeam } from '../components/sections/MainTeam'
import { OurMission } from '../components/sections/OurMission'
import { TeamMap } from '../components/sections/TeamMap'

export default function About() {
  return (
    <Page>
      <AboutUs />
      <OurMission className="mt-16" />
      <TeamMap className="mt-22 desktop:mt-44" />
      <MainTeam className="mt-22 desktop:mt-44" />
    </Page>
  )
}
