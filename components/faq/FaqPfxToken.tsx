import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPfxToken({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is PFX?" isOpenDefault>
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
