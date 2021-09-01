import classNames from 'classnames'
import SleepingFox from '../svg/SleepingFox'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'
import { SocialMediaLinks } from '../utils/SocialMediaLinks'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { LITEPAPER_LINK } from '../const/links'

interface PfxHighlightsProps {
  className?: string
}

export function PfxHighlight({ className }: PfxHighlightsProps) {
  const isFoxSleeping = true

  return (
    <WithBackgroundHeader>
      <div
        className={classNames(
          'container flex flex-wrap flex-col items-center',
          { 'mt-40 tablet:mt-56 mb-72 tablet:mb-96': !isFoxSleeping },
          { 'mt-20 tablet:mt-32 mb-32 tablet:mb-44': isFoxSleeping },
          className
        )}
      >
        {isFoxSleeping && (
          <div className="flex items-end space-x-8 desktop:space-x-60">
            <SleepingFox className="w-14 desktop:w-32 opacity-0" />
            <h1 className="title text-center font-switzer font-semibold" style={{ maxWidth: calcRem(880) }}>
              Pssst.
            </h1>
            <SleepingFox className="w-14 desktop:w-32 pt-14 desktop:pt-0" />
          </div>
        )}
        <h1 className="title text-center font-switzer font-semibold" style={{ maxWidth: calcRem(880) }}>
          {isFoxSleeping ? 'The fox is still sleeping.' : 'Decentralized ecosystem of applications'}
        </h1>
        <style jsx>{`
          .title {
            font-size: ${calcRem(40)};
            line-height: ${calcRem(52.8)};
          }

          @media (min-width: 640px) {
            .title {
              font-size: ${calcRem(50)};
              line-height: ${calcRem(65)};
            }
          }

          @media (min-width: 1024px) {
            .title {
              font-size: ${calcRem(60)};
              line-height: ${calcRem(80)};
            }
          }

          @media (min-width: 1280px) {
            .title {
              font-size: ${calcRem(70)};
              line-height: ${calcRem(90)};
            }
          }
        `}</style>
        <div className={classNames('flex w-full flex-wrap justify-center gap-x-5 gap-y-6 mt-24')}>
          <Button
            url={LITEPAPER_LINK}
            className={classNames(
              'large-shadow border border-blue bg-white hover:border-blue hover:bg-blue hover:text-white',
              { 'hover:opacity-80': !isFoxSleeping }
            )}
          >
            Litepaper
          </Button>
          {!isFoxSleeping && (
            <Button url="https://dex-test.polarfox.io/" className="small-shadow text-white bg-blue hover:bg-blue-light">
              Open DEX
            </Button>
          )}
        </div>
        {isFoxSleeping && (
          <div
            className="container flex flex-col desktop:flex-row justify-between mt-24 tablet:mt-28 items-center space-y-8 desktop:space-y-0"
            style={{ fontSize: calcRem(18), lineHeight: calcRem(32) }}
          >
            <div>
              <p className="text">Come back in late summer.</p>
              <p className="text">The fox will wake to hunt!</p>
            </div>
            <SocialMediaLinks />
          </div>
        )}
      </div>
    </WithBackgroundHeader>
  )
}

interface ButtonProps {
  url: string
  children: ReactNode
  className?: string
}

function Button({ url, className, children }: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('button flex justify-center items-center rounded-full font-semibold', className)}
    >
      {children}
      <style jsx>{`
        .button {
          width: 100%;
          height: ${calcRem(60)};
          font-size: ${calcRem(18)};
          line-height: ${calcRem(21.15)};
        }

        .small-shadow {
          box-shadow: 0px 2px 4px rgba(0, 25, 55, 0.27);
        }

        .large-shadow {
          box-shadow: 0px 2px 4px rgba(0, 25, 55, 0.29748);
        }

        @media (min-width: 640px) {
          .button {
            max-width: ${calcRem(209)};
          }
        }

        @media (min-width: 1280px) {
          .button {
            height: ${calcRem(78)};
          }
        }
      `}</style>
    </a>
  )
}
