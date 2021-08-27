import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { FaqLink } from './utils/FaqLink'
import { Question } from './utils/Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPfxToken({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is PFX?" isOpenDefault>
        PFX is the native governance token of the Polarfox DEX. It will be
        launched on the Avalanche blockchain.
      </Question>
      <Question question="What are the PFX tokenomics?">
        Total supply: 30,000,000 PFX
        <br />
        <br />
        General (86%):
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>Presale: 10,000,000 PFX (33%)</li>
          <li>Liquidity mining: 10,000,000 PFX (33%)</li>
          <li>Initial DEX liquidity: 5,100,000 PFX (17%)</li>
          <li>Governance: 900,000 PFX (3%)</li>
        </ul>
        <br />
        Team funding (7%):
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>Initial funding: 500,000 PFX (2%)</li>
          <li>Treasury vester: 1,500,000 PFX (5%)</li>
        </ul>
        <br />
        Marketing funding (7%):
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>Initial funding: 500,000 PFX (2%)</li>
          <li>Treasury vester: 1,500,000 PFX (5%)</li>
        </ul>
      </Question>
      <Question question="Does PFX have any special mechanics?">
        PFX establishes a tax of 3.5% on every transaction consisting of:
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>3% distributed to PFX liquidity providers as AVAX</li>
          <li>0.5% developer fee</li>
        </ul>
        <br />
        For more details, read our{' '}
        <FaqLink href="/Polarfox Litepaper V2.6.pdf" newTab>
          litepaper
        </FaqLink>
        .
      </Question>
      <Question question="How to get PFX?">
        You can get PFX in a number of ways:
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
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
