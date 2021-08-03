import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAvalanche({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Avalanche?" isOpenDefault>
        Avalanche is a blockchain with a significantly higher transaction
        throughput than Ethereum. Its native token is AVAX having the same
        purpose as ETH on Ethereum. If you need help using Avalanche, see the
        tutorial at: [insert link]
      </Question>
      <Question question="Why is Polarfox running on Avalanche?">
        Polarfox is built on Avalanche because it uses a revolutionary consensus
        model that completes transactions with near-instantaneous finality. To
        put it simply, Avalanche has: Ridiculously low gas fees Extremely fast
        transactions A responsive developer team A dedicated community
        Sub-second consensus finality
      </Question>
    </div>
  )
}
