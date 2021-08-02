import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionHeading } from './utils/SectionHeading'
import { SectionProps } from './utils/SectionProps'

export function AboutUs({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap tablet:flex-nowrap tablet:flex-auto tablet:justify-center tablet:items-baseline tablet:gap-x-12 laptop:gap-x-16',
        className
      )}
    >
      <SectionHeading>ABOUT US</SectionHeading>
      <div className="text font-switzer mt-2 desktop:mt-0">
        <p>
          Polarfox is a self-funding, community-based team of crypto enthusiasts
          who urge to build a great financial ecosystem, based on a highly
          efficient blockchain technology allowing for infinite use cases.
        </p>
        <br />
        <p>
          We are convinced that cryptocurrency will shape the future of the
          world&apos;s financial system and feel drifted to contribute to its
          new form.
        </p>
        <style jsx>{`
          .text {
            font-size: ${calcRem(22)};
            line-height: ${calcRem(32)};
          }

          @media (min-width: 640px) {
            .text {
              max-width: ${calcRem(500)};
            }
          }

          @media (min-width: 1024px) {
            .text {
              max-width: ${calcRem(645)};
              font-size: ${calcRem(26)};
              line-height: ${calcRem(46)};
            }
          }

          @media (min-width: 1200px) {
            .text {
              max-width: ${calcRem(745)};
              font-size: ${calcRem(30)};
              line-height: ${calcRem(46)};
            }
          }
        `}</style>
      </div>
    </div>
  )
}
