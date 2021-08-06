import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAkitaInu({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is AKITA?" isOpenDefault>
        AKITA (Akita Inu) is an ERC-20 token on the Ethereum blockchain.
        Originally a meme token without a team nor a project, it now has a
        strong community of 50,000+ holders.
        <br />
        <br />A goal of the team is to convert this coin from a meme token to a
        real, useful token with various use cases. The first two use cases of
        AKITA will be:
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>Staking AKITA on Polarfox to earn gAKITA</li>
          <li>Staking AKITA with other dog tokens on the Dreamswap exchange</li>
        </ul>
        <br />
        As time goes on AKITA will be given more and more use cases inside the
        Polarfox ecosystem. It will be available on both Avalanche and Ethereum.
      </Question>
      <Question question="What is AKITA Network?">
        AKITA Network is going to be a decentralized and anonymous social media
        platform governed by AKITA holders who will have access to vendors and
        organizations that have been chosen by its own members and benefactors.
        This project is determined to start in 2022.
        <br />
        <br />
        You can find more information on AKITA Network&apos;s{' '}
        <a
          href="https://akita.network"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-light"
        >
          website
        </a>
        .
      </Question>
      <Question question="What is gAKITA?">TODO</Question>
    </div>
  )
}
