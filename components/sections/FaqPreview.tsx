import classNames from 'classnames';
import { calcRem } from '../../utils/styles';
import { Question } from '../utils/Question';
import Link from 'next/link';
import { SectionHeading } from './utils/SectionHeading';
import { SectionTitle } from './utils/SectionTitle';
import { SectionButton } from './utils/SectionButton';

interface PropsSectionProps {
  className?: string;
}

export function FaqPreview({ className }: PropsSectionProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap justify-between',
        className
      )}
    >
      <div>
        <SectionHeading>FAQ</SectionHeading>
        <SectionTitle className="mt-1 mb-12">
          Frequently Asked Questions
        </SectionTitle>
        <SectionButton href="/faq">More questions</SectionButton>
      </div>

      <div
        className="divide-y divide-gray-light mt-16 desktop:mt-0"
        style={{ width: calcRem(680) }}
      >
        <Question question="What is Polarfox?" isOpen={true}>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What is the Polarfox DEX?" isOpen={false}>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What is PFX?" isOpen={false}>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What are the PFX tokenomics?" isOpen={false}>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
      </div>
    </div>
  );
}
