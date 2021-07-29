import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'
import { ReactNode } from 'react'

export function PresaleStatistics({ className }: SectionProps) {
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
        STATISTICS
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Overview
      </h2>
      <DayStatistics className="mt-12 font-semibold" fontSize={14}>
        <DayStatisticsRow>Day of presale</DayStatisticsRow>
        <DayStatisticsRow>PFX supply</DayStatisticsRow>
        <DayStatisticsRow>Participants</DayStatisticsRow>
        <DayStatisticsRow>Funded</DayStatisticsRow>
        <DayStatisticsRow>Average PFX cost</DayStatisticsRow>
        <DayStatisticsRow>Your funds</DayStatisticsRow>
        <DayStatisticsRow>Receiving tokens</DayStatisticsRow>
      </DayStatistics>
      <DayStatistics className="-mt-1" hasBackground>
        <DayStatisticsRow className="font-bold">Day 1</DayStatisticsRow>
        <DayStatisticsRow>6,782,250</DayStatisticsRow>
        <DayStatisticsRow>267</DayStatisticsRow>
        <DayStatisticsRow>271,728 ETH</DayStatisticsRow>
        <DayStatisticsRow>$0.82</DayStatisticsRow>
        <DayStatisticsRow>0.97 ETH</DayStatisticsRow>
        <DayStatisticsRow>16,728</DayStatisticsRow>
      </DayStatistics>
      <DayStatistics className="mt-1">
        <DayStatisticsRow className="font-bold">Day 2</DayStatisticsRow>
        <DayStatisticsRow>6,782,250</DayStatisticsRow>
        <DayStatisticsRow>56-</DayStatisticsRow>
        <DayStatisticsRow>82.728 ETH -</DayStatisticsRow>
        <DayStatisticsRow>$0.21</DayStatisticsRow>
        <DayStatisticsRow>0.00 ETH</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
      </DayStatistics>
      <DayStatistics className="mt-1" hasBackground>
        <DayStatisticsRow className="font-bold">Day 3</DayStatisticsRow>
        <DayStatisticsRow>6,782,250</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
        <DayStatisticsRow>-</DayStatisticsRow>
      </DayStatistics>
      <DayStatistics className="mt-8 font-bold">
        <DayStatisticsRow>Total</DayStatisticsRow>
        <DayStatisticsRow>18,782,250</DayStatisticsRow>
        <DayStatisticsRow>1267</DayStatisticsRow>
        <DayStatisticsRow>871.728 ETH</DayStatisticsRow>
        <DayStatisticsRow>$0.62</DayStatisticsRow>
        <DayStatisticsRow>0.97 ETH</DayStatisticsRow>
        <DayStatisticsRow>16,728 PFX</DayStatisticsRow>
      </DayStatistics>
    </div>
  )
}

interface DayStatisticsProps {
  hasBackground?: boolean
  fontSize?: number
  className?: string
  children: ReactNode
}

function DayStatistics({
  hasBackground,
  fontSize,
  className,
  children
}: DayStatisticsProps) {
  return (
    <div
      className={classNames(
        'flex justify-between',
        { 'bg-gray-mid rounded-lg': hasBackground },
        className
      )}
      style={{ height: calcRem(64), fontSize: calcRem(fontSize || 16) }}
    >
      {children}
    </div>
  )
}

interface DayStatisticsRowProps {
  className?: string
  children: ReactNode
}

function DayStatisticsRow({ className, children }: DayStatisticsRowProps) {
  return (
    <div
      className={classNames('mt-5 ml-6', className)}
      style={{ width: calcRem(171) }}
    >
      {children}
    </div>
  )
}
