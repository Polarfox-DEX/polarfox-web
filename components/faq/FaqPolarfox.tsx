import classNames from 'classnames'
import Link from 'next/link'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPolarfox({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Polarfox Labs?" isOpenDefault>
        Polarfox Labs is a self-funding community-based team of crypto
        enthusiasts who urge to build a great financial ecosystem for its users.
        Now they are building the path to an entire financial ecosystem. The
        entire core team is public - you can find them{' '}
        <Link href="/about">
          <a className="hover:underline text-blue-light">here</a>
        </Link>
        .
      </Question>
      <Question question="What is the Polarfox DEX?">
        Polarfox is a decentralized exchange (DEX) running on the Avalanche
        blockchain. It uses the same type of automated market-making (AMM) as
        Uniswap featuring a native governance token called PFX which is capable
        of trading all tokens issued on Avalanche.
        <br />
        <br />
        If you need help using the Polarfox DEX, see our{' '}
        <Link href="/tutorials">
          <a className="hover:underline text-blue-light">tutorials</a>
        </Link>{' '}
        (will be added soon!).
      </Question>
      <Question question="What functions does the Polarfox DEX feature?">
        At launch, the Polarfox DEX will boast the following features:
        <ul className="list-disc list-inside">
          <li>Token swap</li>
          <li>Adding liquidity</li>
          <li>PFX liquidity mining</li>
          <li>gAKITA liquidity mining</li>
          <li>Polarfox governance</li>
          <li>AKITA governance</li>
        </ul>
        <br />
        As time goes, more features will be added to it. You can check our{' '}
        <Link href="/#roadmap">
          <a className="hover:underline text-blue-light">roadmap</a>
        </Link>{' '}
        and join us on social media for more information.
      </Question>
      <Question question="What is the Polarfox ecosystem?">TODO</Question>
      <Question question="What are the team’s financial resources?">
        TODO
      </Question>
    </div>
  )
}
