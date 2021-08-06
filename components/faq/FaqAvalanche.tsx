import classNames from 'classnames'
import Link from 'next/link'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAvalanche({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Avalanche?" isOpenDefault>
        Avalanche is a blockchain with a significantly higher transaction
        throughput than Ethereum. Its native token is AVAX having the same
        purpose as ETH on Ethereum.
        <br />
        <br />
        If you need help using Avalanche, see this{' '}
        <Link href="/tutorials/avalanche">
          <a className="hover:underline text-blue-light">tutorial</a>
        </Link>{' '}
        (will be added soon!).
      </Question>
      <Question question="Why is Polarfox running on Avalanche?">
        Polarfox is built on Avalanche for a number of reasons, notably:
        <ul className="list-disc list-inside">
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
