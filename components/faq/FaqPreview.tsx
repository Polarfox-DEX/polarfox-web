import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'
import { SectionHeading } from '../sections/utils/SectionHeading'
import { SectionTitle } from '../sections/utils/SectionTitle'
import { SectionButton } from '../sections/utils/SectionButton'

export function FaqPreview({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap laptop:flex-nowrap justify-between laptop:space-x-20 desktop:space-x-44 desktop:px-4',
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

      <div className="divide-y divide-gray-light mt-16 desktop:mt-0">
        <Question question="What is Polarfox?" isOpenDefault>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What is the Polarfox DEX?">
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What is PFX?">
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
        <Question question="What are the PFX tokenomics?">
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </Question>
      </div>
    </div>
  )
}
