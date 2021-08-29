import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { Question } from './utils/Question'
import { FaqLink } from './utils/FaqLink'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAvalanche({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Avalanche?" isOpenDefault>
        Avalanche is a blockchain with a significantly higher transaction throughput than Ethereum. Its native token is
        AVAX, which has the same purpose as ETH on Ethereum.
        <br />
        <br />
        If you need help using Avalanche, see this <FaqLink href="/tutorials/avalanchet">tutorial</FaqLink> (will be
        added soon!).
      </Question>
      <Question question="Why is Polarfox running on Avalanche?">
        Polarfox is built on Avalanche for a number of reasons, notably:
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>Ridiculously low gas fees</li>
          <li>Extremely fast transactions</li>
          <li>Responsive developer team</li>
          <li>Dedicated community</li>
          <li>Sub-second consensus finality</li>
        </ul>
      </Question>
    </div>
  )
}
