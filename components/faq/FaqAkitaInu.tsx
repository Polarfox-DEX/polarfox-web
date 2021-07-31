import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqAkitaInu({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is AKITA?" isOpenDefault>
        AKITA (Akita Inu) is an ERC-20 token on the Ethereum blockchain.
        Originally a meme token without a team nor a project, it now has a
        strong community of 50,000+ holders. The goal of the team is to convert
        this coin from a meme token to a real, useful token with various use
        cases such as: Staking AKITA with other dog tokens on the Dreamswap
        exchange Staking AKITA on Polarfox to earn gAKITA As time goes on AKITA
        will be given more and more use cases inside the Polarfox ecosystem. It
        will be available on both blockchains Avalanche and Ethereum.
      </Question>
      <Question question="What is AKITA Network?">
        AKITA Network is going to be a decentralized and anonymous social media
        platform governed by AKITA holders who will have access to vendors and
        organizations that have been chosen by its own members and benefactors.
        This project is determined to start in 2022. For more information visit:
        https://akita.network
      </Question>
      <Question question="What is gAKITA?">
        gAKITA will be the governance token of the AKITA Network running on the
        Avalanche blockchain to incentivize leadership from within the community
        in order to leverage the power of the network in all fundraising,
        development and trajectory. It will only be minted during a 60-day
        period on Polarfox. There will also be a liquidity mining pool on the
        Polarfox DEX to earn PFX by staking gAKITA with AVAX in the future.
      </Question>
    </div>
  )
}
