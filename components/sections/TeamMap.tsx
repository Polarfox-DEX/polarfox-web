import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionTitle } from './utils/SectionTitle'
import { SectionProps } from './utils/SectionProps'

export function TeamMap({ className }: SectionProps) {
  return (
    <div className={classNames('container', className)}>
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <SectionTitle>Let&apos;s get familiar!</SectionTitle>
        <div className="grid grid-cols-3 desktop:grid-cols-6 gap-x-10 mt-10 tablet:mt-0">
          <Figure figure="06" label="marketers" />
          <Figure figure="03" label="developers" />
          <Figure figure="20+" label="moderators" />
          <Figure figure="01" label="designer" />
          <Figure figure="03" label="artists" />
          <Figure figure="15+" label="countries" />
        </div>
      </div>
      <div className="flex justify-center mt-14 tablet:mt-28">
        <img src="/team-map.png" alt="Team map" />
      </div>
    </div>
  )
}

interface FigureProps {
  figure: string
  label: string
}

function Figure({ figure, label }: FigureProps) {
  return (
    <div className="flex flex-col items-center font-semibold">
      <div style={{ fontSize: calcRem(50) }}>{figure}</div>
      <div style={{ fontSize: calcRem(16), lineHeight: calcRem(28) }}>
        {label}
      </div>
    </div>
  )
}
