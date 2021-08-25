import { TutorialsTile } from './TutorialsTile'
import { TutorialTypes } from './utils/TutorialTypesEnum'
import { tutorials } from './utils/TutorialExample'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'
import classNames from 'classnames'

export function TutorialsPane({ className }: SectionProps) {
  return (
    <div className="container grid grid-cols-2 gap-x-6">
      <div className="col-span-2">
        <div
          className={classNames(
            'border-b-4 border-tutorials_tile pb-8 font-bold',
            className
          )}
          style={{
            fontSize: calcRem(12)
          }}
        >
          BASICS
        </div>
        <div className="grid grid-cols-2 mb-4 gap-x-4 tablet:grid-cols-3 laptop:grid-cols-4">
          {tutorials.map((tuto) => {
            if (tuto.type == TutorialTypes.BASICS)
              return <TutorialsTile tutorial={tuto} key={tuto.slug} />
          })}
        </div>
      </div>
      <div className="col-span-2 tablet:col-span-2 laptop:col-span-1">
        <div
          className="mt-10 border-b-4 pb-8"
          style={{
            fontSize: 12,
            fontWeight: 'bold'
          }}
        >
          AKITA NETWORK
        </div>
        <div className=" grid grid-cols-2 gap-x-4 mb-4 tablet:grid-cols-3 laptop:grid-cols-2">
          {tutorials.map((tuto) => {
            if (tuto.type == TutorialTypes.AKITA_NETWORK)
              return <TutorialsTile tutorial={tuto} key={tuto.slug} />
          })}
        </div>
      </div>
      <div className="col-span-2 tablet:col-span-2 laptop:col-span-1">
        <div
          className="mt-10 border-b-4 border-tutorials_tile pb-8 font-bold"
          style={{
            fontSize: calcRem(12)
          }}
        >
          PFX DEV
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-4 tablet:grid-cols-3 laptop:grid-cols-2">
          {tutorials.map((tuto) => {
            if (tuto.type == TutorialTypes.PFX_DEV)
              return <TutorialsTile tutorial={tuto} key={tuto.slug} />
          })}
        </div>
      </div>
    </div>
  )
}
