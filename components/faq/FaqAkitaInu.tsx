import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { Question } from './utils/Question'
import { FaqLink } from './utils/FaqLink'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAkitaInu({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is AKITA?" isOpenDefault>
        AKITA (Akita Inu) is an ERC-20 token on the Ethereum blockchain. Originally a meme token without a team nor a
        project, it now has a strong community of 50,000+ holders.
        <br />
        <br />A goal of the team is to convert this coin from a meme token to a real, useful token with various use
        cases. The first two use cases of AKITA will be:
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>Staking AKITA on Polarfox to earn gAKITA</li>
          <li>Staking AKITA with other dog tokens on the Dreamswap exchange</li>
        </ul>
        <br />
        As time goes on, AKITA will be given more and more use cases inside the Polarfox ecosystem. It will be available
        on both Avalanche and Ethereum.
      </Question>
      <Question question="What is AKITA Network?">
        AKITA Network is going to be a decentralized and anonymous social media platform governed by AKITA holders who
        will have access to vendors and organizations that have been chosen by its own members and benefactors. This
        project is determined to start in 2022. The AKITA token will be the token used to interact within the social
        platform.
        <br />
        <br />
        You can find more information on AKITA Network&apos;s{' '}
        <FaqLink href="https://akita.network" newTab>
          website
        </FaqLink>
        .
      </Question>
      <Question question="What is gAKITA?">
        gAKITA will be the governance token of the AKITA Network. It will only be minted during a 60-day period on
        Polarfox by staking AKITA with PFX or AVAX.
        <br />
        <br />
        There will also be a liquidity mining pool on the Polarfox DEX to earn PFX by staking gAKITA with AVAX in the
        future.
      </Question>
    </div>
  )
}
