import { Page, SectionWrapper } from '../components/Page';
import { AboutUs } from '../components/sections/AboutUs';
import { Leadership } from '../components/sections/Leadership';
import { OurMission } from '../components/sections/OurMission';
import { TeamMap } from '../components/sections/TeamMap';

export default function About() {
  return (
    <Page>
      <SectionWrapper backgroundImageUrl="/background/forest-1.jpg">
        <AboutUs />
      </SectionWrapper>
      <SectionWrapper>
        <OurMission className="mt-16" />
        <TeamMap className="mt-32" />
        <Leadership className="mt-32" />
      </SectionWrapper>
    </Page>
  );
}
