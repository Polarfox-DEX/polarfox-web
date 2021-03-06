import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../../utils/styles'

interface SectionTitleProps {
  className?: string
  children: ReactNode
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <h2 className={classNames('section-title font-switzer font-semibold', className)}>
      {children}
      <style jsx>{`
        .section-title {
          font-size: ${calcRem(40)};
          line-height: ${calcRem(52.8)};
        }

        @media (min-width: 1280px) {
          .section-title {
            font-size: ${calcRem(50)};
            line-height: ${calcRem(65)};
            max-width: ${calcRem(357)};
          }
        }
      `}</style>
    </h2>
  )
}
