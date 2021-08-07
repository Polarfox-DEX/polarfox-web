import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { Question } from '../faq/utils/Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function PresaleFaqQuestions({ className }: SectionProps) {
  return (
    <div
      className={classNames('divide-y divide-gray-light', className)}
      style={{ width: calcRem(680) }}
    >
      <Question question="How do I buy PFX in the presale?" isOpenDefault>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="How do I claim tokens?">
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="What is the PFX token?">
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="How do I set up Avalanche in MetaMask?">
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
    </div>
  )
}
