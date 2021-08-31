import { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import moment from 'moment'

interface PresaleCountdownInterface {
  eventDateUTC: moment.Moment
}

export function Countdown({ eventDateUTC }: PresaleCountdownInterface) {
  var now = moment.utc()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  if (now.isBefore(eventDateUTC)) {
    useEffect(() => {
      const timer = setInterval(() => {
        var timeLeft = moment.duration(eventDateUTC.diff(now))

        setTimeLeft({
          days: timeLeft.get('days'),
          hours: timeLeft.get('hours'),
          minutes: timeLeft.get('minutes'),
          seconds: timeLeft.get('seconds')
        })
      }, 1000)
      return () => clearTimeout(timer)
    })
  } else {
    {
      /* Presale is finished */
    }
    return (
      <div className="flex space-x-5 ml-7" style={{ width: calcRem(312) }}>
        <div
          className="border border-white rounded-lg border-opacity-25 h-10 pt-4 text-center w-full"
          style={{ height: calcRem(72), fontSize: calcRem(28) }}
        >
          Presale Finished
        </div>
      </div>
    )
  }

  if (timeLeft.days !== 0) {
    return (
      <div className="flex space-x-5 ml-7" style={{ width: calcRem(312) }}>
        <PresaleTimerWindow suffix="d" value={timeLeft.days} />
        <PresaleTimerWindow suffix="h" value={timeLeft.hours} />
        <PresaleTimerWindow suffix="m" value={timeLeft.days} />
      </div>
    )
  } else {
    return (
      <div className="flex space-x-5 ml-7" style={{ width: calcRem(312) }}>
        <PresaleTimerWindow suffix="h" value={timeLeft.hours} />
        <PresaleTimerWindow suffix="m" value={timeLeft.minutes} />
        <PresaleTimerWindow suffix="s" value={timeLeft.seconds} />
      </div>
    )
  }
}

interface PresaleTimerWindowProps {
  className?: string
  value: number
  suffix: string
}

function PresaleTimerWindow({ className, value, suffix }: PresaleTimerWindowProps) {
  const display = value < 9 ? '0' + value : value

  return (
    <div
      className={classNames('border border-white rounded-lg border-opacity-25 h-10 pt-4 text-center', className)}
      style={{ width: calcRem(92), height: calcRem(72), fontSize: calcRem(28) }}
    >
      {display + suffix}
    </div>
  )
}
