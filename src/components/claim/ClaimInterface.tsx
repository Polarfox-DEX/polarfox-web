import classNames from 'classnames'
import Clock from '../svg/Clock'
import DownArrow from '../svg/DownArrow'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'
import { ReactNode } from 'react'
import { Countdown } from '../countdown/Countdown'
import GlobalVars from './../GlobalVars'

export function ClaimInterface({ className }: SectionProps) {
  return (
    <div
      className={classNames('border bg-blue rounded-3xl text-white', className)}
      style={{
        width: calcRem(439),
        height: calcRem(400)
      }}
    >
      <div
        className="border-blue bg-blue-light rounded-t-3xl flex items-center space-x-5 justify-between px-8"
        style={{
          height: calcRem(128)
        }}
      >
        <div className="flex text-white h-full items-center space-x-7">
          <HeadText>Claim Your Tokens</HeadText>
        </div>
      </div>
      
      <div className="mt-7 divide-y divide-white divide-opacity-12">
        <div className="pl-8">
          <div className="flex space-x-28">
            <MainText>
              <span className="opacity-30 font-light">Your balance: </span>
            </MainText>
            <div>
              <MainText>62.82 PFX</MainText>
              <SideText>(0.34 ETH)</SideText>
            </div>
          </div>
         
         
        </div>
        <div className="mt-4 pt-2 px-8">
          <div className="mt-2 flex">
            <ActionButton isActive>Claim</ActionButton>
            <ActionButton isActive>Connect Wallet</ActionButton>
          </div>
          <div className="flex mt-8 justify-between" style={{ lineHeight: calcRem(20) }}>
            <div className="mt-0 opacity-40 text-center" style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}>
              <span className="font-bold">NOTE: </span>
              Here is some text. This text is a placeholder and doesn't make any sense
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}



interface MainTextProps {
  className?: string
  children: ReactNode
}

function MainText({ className, children }: MainTextProps) {
  return (
    <div
      className={classNames('font-semibold', className)}
      style={{
        fontSize: calcRem(20),
        lineHeight: calcRem(23)
      }}
    >
      {children}
    </div>
  )
}

interface HeadTextProps {
  className?: string
  children: ReactNode
}

function HeadText({ className, children }: HeadTextProps) {
  return (
    <div
      className={classNames('font-semibold', className)}
      style={{
        fontSize: calcRem(25),
        lineHeight: calcRem(29)
      }}
    >
      {children}
    </div>
  )
}

interface SideTextProps {
  className?: string
  children: ReactNode
}

function SideText({ className, children }: SideTextProps) {
  return (
    <div
      className={classNames('opacity-40', className)}
      style={{
        fontSize: calcRem(12),
        lineHeight: calcRem(14)
      }}
    >
      {children}
    </div>
  )
}

interface DayButtonProps {
  className?: string
  isActive?: boolean
  hasStarted?: boolean
  children: ReactNode
}

function DayButton({ className, isActive, hasStarted, children }: DayButtonProps) {
  return (
    <div
      className={classNames(
        'rounded-3xl -mt-2 font-semibold text-center pt-3',
        { 'bg-blue-gray': hasStarted && !isActive },
        { 'bg-white': isActive },
        { 'text-blue': isActive },
        { 'opacity-30': !hasStarted },

        className
      )}
      style={{
        width: calcRem(52),
        height: calcRem(41),
        fontSize: calcRem(14),
        lineHeight: calcRem(16)
      }}
    >
      {children}
    </div>
  )
}

interface ActionButtonProps {
  isActive?: boolean
  children: ReactNode
}

function ActionButton({ isActive, children }: ActionButtonProps) {
  return (
    <div
      className={classNames('bg-blue-light rounded-3xl mx-1 pt-3 font-semibold text-center', {
        'opacity-30': !isActive
      })}
      style={{
        width: calcRem(178),
        height: calcRem(44),
        marginTop: calcRem(23),
        fontSize: calcRem(14),
        lineHeight: calcRem(16)
      }}
    >
      {children}
    </div>
  )
}
