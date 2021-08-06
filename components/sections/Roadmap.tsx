import classNames from 'classnames'
import Slide from '../svg/Slide'
import { calcRem } from '../../utils/styles'
import { SectionHeading } from './utils/SectionHeading'
import { SectionProps } from './utils/SectionProps'
import { ReactNode } from 'react'
import { WithBackgroundRoadmap } from '../utils/WithBackgroundImage'

export function Roadmap({ className }: SectionProps) {
  return (
    <WithBackgroundRoadmap className={className}>
      <div id="roadmap" className="container pt-24 pb-16">
        <div className="flex flex-wrap justify-between gap-y-5">
          <SectionHeading>ROADMAP</SectionHeading>
          <p
            className="font-switzer"
            style={{
              width: calcRem(710),
              fontSize: calcRem(30),
              lineHeight: calcRem(46)
            }}
          >
            {/* TODO: This should not be on the right. See Figma */}
            The launch of Polarfox is one step in our journey towards realizing
            a fully decentralized ecosystem. More projects are underway to
            reinforce our vision.
          </p>
        </div>
        <div className="flex gap-x-10 overflow-x-scroll pb-6">
          <Year title="2021" slide>
            <Quarter title="Q1">
              <Task isDone>
                Creation of Polarfox Labs by the AKITA community
              </Task>
              <Task isDone>First ideation phase</Task>
            </Quarter>
            <Quarter title="Q2">
              <Task isDone>Development of Polarfox DEX V1</Task>
              <Task isDone>
                Development of the Polarfox Avalanche-Ethereum bridge
              </Task>
            </Quarter>
            <Quarter title="Q3">
              <Task>Development of the Polarfox website</Task>
              <Task isFuture>PFX presale</Task>
              <Task isFuture>Polarfox DEX V1 launch</Task>
              <Task isFuture>
                Development of Polarfox DEX V2 - front-end overhaul
              </Task>
            </Quarter>
            <Quarter title="Q4" isFuture>
              <Task isFuture>Second ideation phase</Task>
              <Task isFuture>
                Development of new apps on the Polarfox ecosystem
              </Task>
            </Quarter>
          </Year>
          <Year title="2022" isFuture>
            <Quarter title="Q1 Q2" isFuture>
              <Task isFuture>
                Development of Polarfox DEX V3 - Add more features
              </Task>
              <Task isFuture>Polarfox DEX V3 launch</Task>
              <Task isFuture>Development of new apps</Task>
              <Task isFuture>Development of AKITA Network starts</Task>
            </Quarter>
            <Quarter title="Q3 Q4" isFuture>
              <Task isFuture>Third ideation phase</Task>
              <Task isFuture>
                Further improvements to the DEX and ecosystem
              </Task>
            </Quarter>
          </Year>
          <Year title="2023" isFuture>
            <Quarter title="QX" isFuture>
              <Task isFuture>The sky is the limit!</Task>
            </Quarter>
          </Year>
        </div>
      </div>
    </WithBackgroundRoadmap>
  )
}

interface YearProps {
  title: string
  isFuture?: boolean
  slide?: boolean
  children: ReactNode
}

function Year({ title, isFuture, slide, children }: YearProps) {
  return (
    <div className="flex-none">
      <div
        className={classNames(
          'font-bold mt-16 flex items-center justify-between',
          {
            'text-gray-mid3 opacity-48': isFuture
          },
          {
            'w-screen laptop:w-auto': slide
          }
        )}
        style={{ fontSize: calcRem(50), lineHeight: calcRem(59) }}
      >
        {title}
        {slide && <Slide className="mr-12 laptop:hidden" />}
      </div>
      <div
        className={classNames('mt-16 -ml-10', {
          'text-gray-mid3 opacity-36': isFuture
        })}
        style={{ borderBottomWidth: 3 }}
      />
      <div className="flex gap-x-10 mt-16 desktop:mt-28">{children}</div>
    </div>
  )
}

interface QuarterProps {
  title: string
  isFuture?: boolean
  children: ReactNode
}

function Quarter({ title, isFuture, children }: QuarterProps) {
  return (
    <div
      className="flex flex-none justify-between gap-x-10"
      style={{ width: 239 }}
    >
      <div
        className={classNames('font-bold', { 'opacity-40': isFuture })}
        style={{ fontSize: calcRem(30), lineHeight: calcRem(35) }}
      >
        {title}
      </div>
      <div className="space-y-5" style={{ lineHeight: calcRem(18.8) }}>
        {children}
      </div>
    </div>
  )
}

interface TaskProps {
  isDone?: boolean
  isFuture?: boolean
  children: ReactNode
}

function Task({ isDone, isFuture, children }: TaskProps) {
  return (
    <div
      className={classNames(
        { 'line-through': isDone },
        { 'opacity-40': isFuture }
      )}
    >
      {children}
    </div>
  )
}
