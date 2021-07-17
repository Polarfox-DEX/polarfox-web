import { PresaleMain } from '../components/presale/PresaleMain';
import { PresaleTutorial } from '../components/presale/PresaleTutorial';
import { PresaleStatistics } from '../components/presale/PresaleStatistics';
import { PresaleFaq } from '../components/presale/PresaleFaq';
import { Page } from '../components/Page';

export default function Presale() {
  // TODO: Eventually add partners
  return (
    <Page>
      <PresaleMain className="mt-64" />
      <PresaleTutorial className="mt-24" />
      <PresaleStatistics className="mt-44" />
      <PresaleFaq className="mt-32" />
    </Page>
  );
}
