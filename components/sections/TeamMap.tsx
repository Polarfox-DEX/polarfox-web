import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionTitle } from './utils/SectionTitle'
import { SectionProps } from './utils/SectionProps'
import React from 'react'
import TeamInteractiveMap from '../map/Map'

export function TeamMap({ className }: SectionProps) {
  return (
    <div className={classNames('container', className)}>
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <SectionTitle>Let&apos;s get familiar!</SectionTitle>
        <div className="flex flex-wrap justify-center tablet:justify-end gap-x-10 mt-10 tablet:mt-0">
          <Figure figure="30" label="members" />
          <Figure figure="12" label="countries" />
          <Figure figure="14" label="personalities" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <TeamInteractiveMap/>
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
