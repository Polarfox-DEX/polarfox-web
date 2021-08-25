import classNames from 'classnames'
import Link from 'next/link'
import { calcRem } from '../utils/styles'
import { ReactNode } from 'react'
import { RightArrow } from './svg/RightArrow'
import { SectionProps } from './sections/utils/SectionProps'
import GlobalVars from './GlobalVars'
import { Countdown } from './countdown/Countdown'
import moment from 'moment'

export function PresaleHeader({ className }: SectionProps) {

  return (
      <div
      className={classNames(
        'grid grid-cols-3 items-center justify-items-start bg-blue text-white gap-x-2 font-graphik laptop:h-28 ',
        'grid-cols-teasingPresaleHeader laptop:grid-cols-presaleHeader w-full',
        className
      )} 
      style={{
        height: calcRem(80)
      }}
      >
        <div 
          className={classNames("laptop:hidden bg-blue-light grid items-center h-full w-full")}
          style={{
            fontSize: calcRem(10)
          }}
        >
          <div className="-rotate-90 text-center">
            { GlobalVars.showPresaleStartDate ? "NOW" : "SOON" }
          </div>
        </div>
        <div
          className={classNames(GlobalVars.showPresaleStartDate ? "laptop:self-center laptop:ml-16 pl-2" : 'hidden')}
          style={{ fontSize: calcRem(18) }}
        >
          { GlobalVars.presaleStartUTCDate.isAfter(moment.utc()) && 
            'PFX presale starts on ' + GlobalVars.presaleStartUTCDate.format("MMMM Do YYYY, h:mm:ss A z")
          }
          { GlobalVars.presaleStartUTCDate.isBefore(moment.utc()) && 
            'PFX presale ends on ' + GlobalVars.presaleEndUTCDate.format("dddd, MMMM Do YYYY, h:mm:ss A z")
          }
        </div>
        <div className={classNames(GlobalVars.showPresaleStartDate ? 'hidden' : 'ml-1 laptop:justify-center laptop:ml-8')}>
          PFX presale starts mid-September
        </div>
        <a 
          className={classNames(GlobalVars.showPresaleStartDate ? "laptop:hidden" : "", 
            "mr-4 bg-white text-blue grid items-center justify-self-end text-center rounded-full px-2 font-semibold ")
          } 
          style={{
            height: calcRem(50),
            width: calcRem(140),
            fontSize: calcRem(14)
          }}
          href={GlobalVars.showPresaleStartDate ? "/presale" : "https://t.me/pfxannouncements"}
        >
          { GlobalVars.showPresaleStartDate ? "OPEN" : "MORE INFO" }
        </a>
        <div className={classNames(GlobalVars.showPresaleStartDate ? "hidden laptop:flex": 'hidden')}>
          <div
            className="container flex justify-between items-center space-x-5 mx-24"
            style={{ width: calcRem(312) }}
          >
          { GlobalVars.presaleStartUTCDate.isAfter(moment.utc()) && 
            <Countdown eventDateUTC={ GlobalVars.presaleStartUTCDate }/>
          }
          { GlobalVars.presaleStartUTCDate.isBefore(moment.utc()) && 
            <Countdown eventDateUTC={ GlobalVars.presaleEndUTCDate }/>
          }
          </div>
          <div className="mx-12 self-center">
            <Link href="/presale">
              <a>
                <RightArrow className="fill-current" />
              </a>
            </Link>
          </div>
        </div>
      </div>
  )
}