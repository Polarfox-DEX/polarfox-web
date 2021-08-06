import Link from 'next/link'
import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

export function PolarfoxLogo({ className }: SectionProps) {
  return (
    <Link href="/">
      <a className={classNames('flex items-center space-x-4', className)}>
        <img
          src="/logo/polarfox-tmp.png"
          alt="Polarfox logo"
          className="polarfox-logo"
        />
        <span
          className="font-poppins font-bold polarfox-text"
          style={{ lineHeight: calcRem(20) }}
        >
          polarfox
        </span>
        <style jsx>{`
          .polarfox-logo {
            width: ${calcRem(34)};
            height: ${calcRem(34)};
          }

          .polarfox-text {
            font-size: ${calcRem(20)};
          }

          @media (min-width: 1280px) {
            .polarfox-logo {
              width: ${calcRem(44)};
              height: ${calcRem(44)};
            }

            .polarfox-text {
              font-size: ${calcRem(25)};
            }
          }
        `}</style>
      </a>
    </Link>
  )
}
