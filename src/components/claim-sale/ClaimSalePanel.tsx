import classNames from 'classnames'
import { ClaimSaleDescription } from './ClaimSaleDescription'
import { ClaimSaleInterface } from './ClaimSaleInterface'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function ClaimSalePanel({ className }: SectionProps) {
  return (
    <WithBackgroundHeader>
      <div className={classNames('laptop:container flex flex-wrap laptop:flex-nowrap justify-center', className)}>
        <ClaimSaleDescription />
        <ClaimSaleInterface className="mt-12 tablet:mt-20 laptop:mt-0" />
      </div>
    </WithBackgroundHeader>
  )
}
