import classNames from 'classnames'
import { PrivateSaleDescription } from './PrivateSaleDescription'
import { PrivateSaleInterface } from './PrivateSaleInterface'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function PrivateSalePanel({ className }: SectionProps) {
  return (
    <WithBackgroundHeader>
      <div className={classNames('laptop:container flex flex-wrap laptop:flex-nowrap justify-center', className)}>
        <PrivateSaleDescription />
        <PrivateSaleInterface className="mt-12 tablet:mt-20 laptop:mt-0" />
      </div>
    </WithBackgroundHeader>
  )
}
