import classNames from 'classnames'
import { PrivateSaleDescription } from './PrivateSaleDescription'
import { PrivateSaleInterface } from './PrivateSaleInterface'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function PrivateSalePanel({ className }: SectionProps) {
  return (
    <WithBackgroundHeader>
      <div className={classNames('container flex justify-between', className)}>
        <PrivateSaleDescription />
        <PrivateSaleInterface />
      </div>
    </WithBackgroundHeader>
  )
}
