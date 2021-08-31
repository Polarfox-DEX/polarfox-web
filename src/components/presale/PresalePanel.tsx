import classNames from 'classnames'
import { PresaleDescription } from './PresaleDescription'
import { PresaleAkitaBalance } from './PresaleAkitaBalance'
import { PresaleInterface } from './PresaleInterface'
import { WithBackgroundHeader } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function PresalePanel({ className }: SectionProps) {
  return (
    <WithBackgroundHeader>
      <div className={classNames('container flex justify-between', className)}>
        <PresaleDescription />
        <div>
          <PresaleAkitaBalance />
          <PresaleInterface className="mt-2" />
        </div>
      </div>
    </WithBackgroundHeader>
  )
}
