import { Page, SectionWrapper } from '../components/Page';
import { FaqMain } from '../components/sections/FaqMain';
import { Leadership } from '../components/sections/Leadership';
import { OurMission } from '../components/sections/OurMission';
import { TeamMap } from '../components/sections/TeamMap';

export default function Faq() {
  return (
    <Page>
      <SectionWrapper backgroundImageUrl="/background/forest-1.jpg">
        <FaqMain className="mt-96" />
      </SectionWrapper>
      <SectionWrapper>
        <OurMission className="mt-16" />
        <TeamMap className="mt-32" />
        <Leadership className="mt-32" />
      </SectionWrapper>
    </Page>
  );
}
