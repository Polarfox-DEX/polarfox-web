import { PresaleMain } from '../components/sections/PresaleMain';
import { PresaleTutorial } from '../components/sections/PresaleTutorial';
import { PresaleStatistics } from '../components/sections/PresaleStatistics';
import { PresaleFaq } from '../components/sections/PresaleFaq';
import { Page } from '../components/Page';

export default function Home() {
  // TODO: Eventually add partners
  return (
    <Page>
      <PresaleMain className="mt-64" />
      <PresaleTutorial className="mt-64" />
      <PresaleStatistics className="mt-64" />
      <PresaleFaq className="mt-64" />
    </Page>
  );
}
