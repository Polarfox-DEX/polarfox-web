import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { FaqLink } from './utils/FaqLink'
import { Question } from './utils/Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPolarfox({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="What is Polarfox Labs?" isOpenDefault>
        Polarfox Labs is a self-funding, community-based team of crypto enthusiasts who chose to build a great financial{' '}
        <span className="font-bold">ecosystem</span> for its users. Currently we are building the path to a robust
        financial ecosystem.
        <br />
        <br />
        The core team is entirely public — you can find them <FaqLink href="/about">here</FaqLink>.
      </Question>
      <Question question="What is the Polarfox DEX?">
        Polarfox is a decentralized exchange (DEX) running on the Avalanche blockchain. It uses the same type of
        automated market-making (AMM) as Uniswap featuring a native governance token called PFX which is capable of
        trading all tokens issued on Avalanche.
        <br />
        <br />
        If you need help using the Polarfox DEX, see our <FaqLink href="/tutorials">tutorials</FaqLink> (will be added
        soon!).
      </Question>
      <Question question="What are the Polarfox DEX's features?">
        At launch, the Polarfox DEX will boast the following features:
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>Token swap</li>
          <li>Adding liquidity</li>
          <li>PFX liquidity mining</li>
          <li>gAKITA liquidity mining</li>
          <li>Polarfox governance</li>
          <li>AKITA governance</li>
        </ul>
        <br />
        As time goes on, more features will be added to it. You can check our{' '}
        <FaqLink href="/#roadmap">roadmap</FaqLink> and join us on <FaqLink href="/#footer">social media</FaqLink> for
        more information.
      </Question>
      <Question question="What is the Polarfox ecosystem?">
        Polarfox will start as a decentralized exchange, but as time goes on, it has the vocation of becoming much more,
        thus forming a decentralized <span className="font-bold">ecosystem of applications</span> whose goals are to:
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>Make crypto a common thing for everyone</li>
          <li>Make decentralized finance (DeFi) accessible and easy to use</li>
          <ul className="list-disc list-inside pl-4" style={{ listStyleType: 'circle' }}>
            <li>Easy to access and leave</li>
            <li>Low gas fees</li>
            <li>Fully decentralized</li>
          </ul>
          <li>Improve the user experience on the Avalanche blockchain</li>
          <li>Bring new features to it</li>
        </ul>
      </Question>
      <Question question="What apps will be in the Polarfox ecosystem?">
        The AKITA Network is going to be one of the main applications of that ecosystem and receive funding from
        Polarfox. Some of the applications that could be added to the ecosystem include multi-signature wallets, payment
        processors, bridges to other blockchains, websites that will actively advertise Avalanche, among others.
        <br />
        <br />
        Another goal of the ecosystem is to help potential partners to create and develop technology on Avalanche and
        provide support and resources to their projects.
      </Question>
      <Question question="What blockchain(s) will the Polarfox ecosystem support?">
        The core of Polarfox is and will stay on <span className="font-bold">Avalanche</span>, while cross-chain
        features and applications on other blockchains are incorporated into it — the Dreamswap exchange on Polygon is
        one example of that.
      </Question>
      <Question question="What are the team’s financial resources?">
        The team has not had any funding since February. Through the launch of the Polarfox DEX, we will introduce our
        own funding with:
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>The PFX presale</li>
          <li>Keeping a small percentage of the PFX token supply</li>
          <li>The 0.5% dev fee on every transaction involving PFX</li>
        </ul>
      </Question>
    </div>
  )
}
