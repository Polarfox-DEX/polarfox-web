import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPfxToken({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is PFX?" isOpenDefault>
        TODO
      </Question>
      <Question question="What are the PFX tokenomics?">TODO</Question>
      <Question question="How to get PFX?">
        You can get PFX in a number of ways:
        <ul className="list-disc list-inside">
          <li>Participating in the PFX presale</li>
          <li>
            Staking PFX or AVAX with another token in the Polarfox liquidity
            mining pools
          </li>
          <li>Swapping another token for PFX on Polarfox</li>
        </ul>
      </Question>
    </div>
  )
}
