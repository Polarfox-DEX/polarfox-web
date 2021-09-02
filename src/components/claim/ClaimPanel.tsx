import classNames from 'classnames'
import { ClaimDescription } from './ClaimDescription'
import { ClaimInterface } from './ClaimInterface'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function ClaimPanel({ className }: SectionProps) {
  return (
    <WithBackgroundHeader>
      <div className={classNames('laptop:container flex flex-wrap laptop:flex-nowrap justify-center', className)}>
        <ClaimDescription />
        <ClaimInterface className="mt-12 tablet:mt-20 laptop:mt-0" />
      </div>
    </WithBackgroundHeader>
  )
}
