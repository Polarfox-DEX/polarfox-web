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
  // TODO remove Hidden when implementing responsive
  return (
    <div
      className={classNames(
        'hidden desktop:flex w-full absolute bg-blue text-white font-graphik justify-between h-28',
        className
      )}
    >
      <div
        className="self-center ml-16"
        style={{ fontSize: calcRem(18) }}
      >

        { GlobalVars.presaleStartUTCDate.isAfter(moment.utc()) && 
          'PFX presale starts on ' + GlobalVars.presaleStartUTCDate.format("MMMM Do YYYY, h:mm:ss A z")
        }

        { GlobalVars.presaleStartUTCDate.isBefore(moment.utc()) && 
          'PFX presale ends on ' + GlobalVars.presaleEndUTCDate.format("dddd, MMMM Do YYYY, h:mm:ss A z")
        }
        
      </div>
      <div className="flex">
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

interface PresaleTimerBoxProps {
  children: ReactNode
}

function PresaleTimerBox({ children }: PresaleTimerBoxProps) {
  return (
    <div
      className="border border-white rounded-lg border-opacity-25 pt-4 text-center"
      style={{ width: calcRem(92), height: calcRem(72), fontSize: calcRem(28) }}
    >
      {children}
    </div>
  )
}
