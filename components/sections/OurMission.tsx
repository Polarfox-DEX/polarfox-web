import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'
import { SectionProps } from './utils/SectionProps'

export function OurMission({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap justify-center desktop:justify-between gap-x-8 desktop:gap-x-0 gap-y-16',
        className
      )}
    >
      <Mission title="Our mission">
        Our goal is to build an independent ecosystem of fully decentralized and
        open-source applications on the Avalanche blockchain.
      </Mission>
      <Mission title="Core values">
        We believe trust, honesty and transparency are necessary to build
        anything tangible on the long term.
      </Mission>
      <Mission title="Our vision">
        We will see many more apps added to the Polarfox ecosystem allowing for
        various use cases.
      </Mission>
    </div>
  )
}

interface MissionProps {
  title: string
  children: ReactNode
}

export function Mission({ title, children }: MissionProps) {
  return (
    <div className="mission w-full">
      <h3
        className="font-switzer font-semibold"
        style={{ fontSize: calcRem(20), lineHeight: calcRem(32) }}
      >
        {title}
      </h3>
      <p
        className="text-gray"
        style={{ fontSize: calcRem(16), lineHeight: calcRem(32) }}
      >
        {children}
      </p>
      <style jsx>{`
        @media (min-width: 1280px) {
          .mission {
            width: ${calcRem(385)};
          }
        }
      `}</style>
    </div>
  )
}
