import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

export function PrivateSaleDescription({ className }: SectionProps) {
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
        PRIVATE SALE
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          width: calcRem(408),
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Private PFX sale
      </h2>
      <p
        className="mt-12 text-gray"
        style={{
          width: calcRem(503),
          fontSize: calcRem(20),
          lineHeight: calcRem(32)
        }}
      >
        I am a description.
      </p>
      <p
        className="mt-10 text-gray"
        style={{
          width: calcRem(503),
          lineHeight: calcRem(30)
        }}
      >
        I am a sub-description.
      </p>
      <div
        className="mt-10 border border-blue bg-white rounded-lg h-32"
        style={{
          width: calcRem(503)
        }}
      >
        <p
          className="text-gray italic mx-6 my-8"
          style={{
            lineHeight: calcRem(30)
          }}
        >
          I am an example.
        </p>
      </div>
    </div>
  )
}
