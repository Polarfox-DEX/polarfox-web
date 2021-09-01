import classNames from 'classnames'
import Link from 'next/link'
import { calcRem } from '../utils/styles'
import { RightArrow } from './svg/RightArrow'
import { Countdown } from './countdown/Countdown'
import moment from 'moment'
import { TELEGRAM_ANNOUNCEMENTS } from './const/links'
import {
  SHOW_PRESALE_START_DATE,
  SHOW_PRESALE_START_HOUR,
  SHOW_PRESALE_PAGE,
  PRESALE_START_UTC_DATE
} from './const/presale'

interface PresaleHeaderProps {
  className?: string
  isMobileMenuOpen: boolean
}

export function PresaleHeader({ className, isMobileMenuOpen }: PresaleHeaderProps) {
  return (
    // TODO: Refactor and improve
    <div className={classNames('bg-blue text-white w-full', { hidden: isMobileMenuOpen }, className)}>
      <div className="presale-header flex justify-between items-center text-white font-graphik">
        <div className="flex justify-between h-full">
          <div
            className="laptop:hidden bg-blue-light flex items-center"
            style={{
              fontSize: calcRem(10)
            }}
          >
            <p className="-rotate-90">{PRESALE_START_UTC_DATE.isBefore(moment.utc()) ? 'NOW' : 'SOON'}</p>
          </div>
          <div className="presale-date flex items-center px-4 laptop:pl-8">{getPresaleHeaderText()}</div>
        </div>
        <div className="flex pr-4 laptop:pr-8 desktop:pr-12 items-center">
          <div
            className={classNames('container flex justify-between items-center space-x-5 mx-24 hidden', {
              'laptop:flex': SHOW_PRESALE_START_DATE
            })}
            style={{ width: calcRem(312) }}
          >
            {PRESALE_START_UTC_DATE.isAfter(moment.utc()) && (
              <Countdown eventDateUTC={PRESALE_START_UTC_DATE} />
            )}
          </div>
          <a
            className={classNames(
              { 'laptop:hidden': SHOW_PRESALE_PAGE },
              'flex items-center justify-center bg-white text-blue rounded-full font-semibold'
            )}
            style={{
              height: calcRem(50),
              width: calcRem(140),
              fontSize: calcRem(14)
            }}
            href={TELEGRAM_ANNOUNCEMENTS}
            rel="noopener noreferrer"
            target="_blank"
          >
            {SHOW_PRESALE_PAGE ? 'Open' : 'MORE INFO'}
          </a>
          <Link href="/presale">
            <a
              className={classNames(
                'self-center',
                { 'hidden laptop:block': SHOW_PRESALE_PAGE },
                { hidden: !SHOW_PRESALE_PAGE }
              )}
            >
              <RightArrow className="fill-current" />
            </a>
          </Link>
        </div>
        <style jsx>{`
          .presale-header {
            height: ${calcRem(81)};
          }

          @media (min-width: 1024px) {
            .presale-header {
              height: ${calcRem(114)};
            }
          }

          .presale-date {
            font-size: ${calcRem(12)};
          }

          @media (min-width: 336px) {
            .presale-date {
              font-size: ${calcRem(14)};
            }
          }

          @media (min-width: 1024px) {
            .presale-date {
              font-size: ${calcRem(18)};
            }
          }
        `}</style>
      </div>
    </div>
  )
}

function getPresaleHeaderText() {
  if (!SHOW_PRESALE_START_DATE) return 'PFX presale starts mid-September 🦊'
  if (PRESALE_START_UTC_DATE.isAfter(moment.utc())) {
    if (SHOW_PRESALE_START_HOUR) return 'PFX presale starts on September 17th, 20:00 UTC'
    else return 'PFX presale starts on September 17th'
  }
  return 'The PFX presale is on!'
}
