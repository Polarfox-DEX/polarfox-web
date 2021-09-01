import classNames from 'classnames'
import { SectionProps } from '../sections/utils/SectionProps'
import { calcRem } from '../../utils/styles'

export function TutorialsHeader({ className }: SectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3)
        }}
      >
        RESOURCES
      </div>

      <div
        className="font-switzer font-semibold mt-1"
        style={{
          width: calcRem(408),
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Tutorials
      </div>
    </div>
  )
}
