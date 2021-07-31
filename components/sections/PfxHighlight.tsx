import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'
import { WithBackgroundImage } from '../utils/WithBackgroundImage'
import { SocialMediaLinks } from '../utils/SocialMediaLinks'
import SleepingFox from '../svg/SleepingFox'

interface PfxHighlightsProps {
  className?: string
}

export function PfxHighlight({ className }: PfxHighlightsProps) {
  const isFoxSleeping = true

  return (
    <WithBackgroundImage
      className="bg-right-bottom desktop:bg-left-bottom w-full min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div
        className={classNames(
          'container flex flex-wrap flex-col items-center',
          { 'mt-56 desktop:mt-32': isFoxSleeping },
          className
        )}
      >
        {isFoxSleeping && (
          <div className="flex items-end space-x-8 desktop:space-x-60">
            <SleepingFox className="w-14 desktop:w-32 opacity-0" />
            <h1
              className="title text-center font-switzer font-semibold"
              style={{ maxWidth: calcRem(880) }}
            >
              Pssst.
            </h1>
            <SleepingFox className="w-14 desktop:w-32 pt-14 desktop:pt-0" />
          </div>
        )}
        <h1
          className="title text-center font-switzer font-semibold"
          style={{ maxWidth: calcRem(880) }}
        >
          {isFoxSleeping
            ? 'The fox is still sleeping.'
            : 'Decentralized ecosystem of applications'}
        </h1>
        <style jsx>{`
          .title {
            font-size: ${calcRem(40)};
            line-height: ${calcRem(52.8)};
          }

          @media (min-width: 1200px) {
            .title {
              font-size: ${calcRem(70)};
              line-height: ${calcRem(90)};
            }
          }
        `}</style>
        <div
          className={classNames(
            'flex w-full flex-wrap justify-center gap-x-5 gap-y-6 mt-24'
          )}
        >
          <Button
            url="/Polarfox Litepaper V2.6.pdf"
            className="border border-blue bg-white hover:bg-blue-light hover:text-white hover:opacity-80"
          >
            Litepaper
          </Button>
          {!isFoxSleeping && (
            <Button
              url="https://dex-test.polarfox.io/"
              className="text-white bg-blue hover:bg-blue-light"
            >
              Open DEX
            </Button>
          )}
        </div>
      </div>
      {isFoxSleeping && (
        <div
          className="container flex flex-col desktop:flex-row justify-between mt-48 desktop:mt-28 items-center space-y-8 desktop:space-y-0"
          style={{ fontSize: calcRem(18), lineHeight: calcRem(32) }}
        >
          <div>
            <p className="text">Come back in late summer.</p>
            <p className="text">The fox will wake to hunt!</p>
          </div>
          <SocialMediaLinks />
        </div>
      )}
    </WithBackgroundImage>
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
      className={classNames(
        'button flex justify-center items-center rounded-full font-semibold',
        className
      )}
    >
      {children}
      <style jsx>{`
        .button {
          width: 100%;
          height: ${calcRem(60)};
          font-size: ${calcRem(18)};
          line-height: ${calcRem(21.15)};
        }

        @media (min-width: 1200px) {
          .button {
            max-width: ${calcRem(209)};
            height: ${calcRem(78)};
          }
        }
      `}</style>
    </a>
  )
}
