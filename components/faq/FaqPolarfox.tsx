import classNames from 'classnames'
import { Question } from './Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPolarfox({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Polarfox Labs?" isOpenDefault>
        Polarfox Labs is a self-funding community-based team of crypto
        enthusiasts who urged to give purpose to the AKITA token. Now they are
        building the path to an entire financial ecosystem. The entire core team
        is public and you can find them here: [insert link to about-page]
      </Question>
      <Question question="What is the Polarfox DEX?">
        Polarfox is a decentralized exchange (DEX) running on the Avalanche
        blockchain. It uses the same type of automated market-making (AMM) as
        Uniswap featuring a native governance token called PFX which is capable
        of trading all tokens issued on Avalanche. If you need help using the
        Polarfox DEX, see the tutorials at: [insert link]
      </Question>
      <Question question="What functions does the Polarfox DEX feature?">
        Token swap Liquidity providing Liquidity mining (PFX, gAKITA) Polarfox
        governance AKITA governance
      </Question>
      <Question question="What is the Polarfox ecosystem?">
        The Polarfox ecosystem is an economic framework which circulates
        financial goods based on cryptocurrency to support itself and its
        community. Its central element is the Polarfox DEX channeling tokens
        like AKITA between blockchains as well as novel networks that will come
        up over the years (stay tuned!).
      </Question>
      <Question question="What are the team’s financial resources?">
        The team has been working since February without funding. Most of its
        members still work part-time and on weekends. However, we figure on
        introducing our own funding by: Keeping a small percentage of the PFX
        token supply 0.03% fees on every transaction involving PFX [maybe
        changed, no?]
      </Question>
    </div>
  )
}
