import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPfxToken({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is PFX?" isOpenDefault>
        PFX is the native governance token of the Polarfox DEX. It will be
        launched on the Avalanche blockchain. It establishes deflation by
        providing on every transaction: 0.27% burned (sent to 0x0) 0.03% sent to
        a dev wallet to fund future development [changed maybe]
      </Question>
      <Question question="What are the PFX tokenomics?">
        Token supply: 30,000,000 PFX [maybe add new tokenomics here when they
        are finished]
      </Question>
      <Question question="How to get PFX?">
        Participating in the PFX presale Staking PFX or AVAX with another token
        in the Polarfox liquidity mining pools Swapping another token for PFX on
        Polarfox
      </Question>
    </div>
  )
}
