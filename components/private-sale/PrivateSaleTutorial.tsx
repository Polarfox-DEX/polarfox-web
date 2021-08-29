import classNames from 'classnames'
import Binance from '../svg/Binance'
import RightArrow from '../svg/RightArrow'
import Sablier from '../svg/Sablier'
import Wallet from '../svg/Wallet'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'
import { ReactNode } from 'react'
import CheckCircle from '../svg/CheckCircle'

export function PrivateSaleTutorial({ className }: SectionProps) {
  return (
    <div className={classNames('container', className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3)
        }}
      >
        STEP-BY-STEP
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        How to participate
      </h2>
      <div className="grid tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-7 desktop:px-4">
        <PresaleTutorialBlock
          logo={<CheckCircle className="fill-current" />}
          title="1 - Get whitelisted"
        >
          This sale is only open to our partners and large investors. Contact
          our team to get whitelisted.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock logo={<Wallet />} title="2 - Connect your wallet">
          We recommend using a MetaMask wallet. Use another wallet at your own
          risk.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock logo={<Binance />} title="3 - Buy PFX with BNB">
          The private sale will keep going until $1,000,000 has been raised.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock
          logo={<Sablier />}
          title="4 - Wait for the airdrop"
        >
          A few days after the ICO, you will be able to claim a part of your
          PFX. The rest will be locked then vested.
        </PresaleTutorialBlock>
      </div>
    </div>
  )
}

interface PresaleTutorialBlockProps {
  logo: ReactNode
  title: string
  className?: string
  children: ReactNode
}

function PresaleTutorialBlock({
  logo,
  title,
  className,
  children
}: PresaleTutorialBlockProps) {
  return (
    <div
      className={classNames('container mt-12', className)}
      style={{ lineHeight: calcRem(30) }}
    >
      {logo}
      <div className="font-bold mt-7">{title}</div>
      <div className="text-gray mt-7">{children}</div>
    </div>
  )
}

export function GreyRightArrow() {
  return (
    <RightArrow
      className="fill-current opacity-30 hidden desktop:block w-full"
      style={{ marginTop: calcRem(103) }}
    />
  )
}
