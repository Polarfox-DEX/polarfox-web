import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

// TODO: US / Canadian investors
// TODO: Metamask warning

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
        The PFX private sale will last until{' '}
        <span className="font-bold">$1,000,000</span> are raised. The token is
        sold at a price of $1 per token, on a{' '}
        <span className="font-bold">first-come, first-served</span> basis.
      </p>
      <p
        className="mt-10 text-gray"
        style={{
          width: calcRem(503),
          lineHeight: calcRem(30)
        }}
      >
        The price of $1 is <span className="font-bold">half of the start</span>{' '}
        ICO price, and 1/40th of the potential end price — a{' '}
        <span className="font-bold">potential 4000% gain</span>.
      </p>
      <div
        className="mt-10 border border-blue bg-white rounded-lg h-40"
        style={{
          width: calcRem(503)
        }}
      >
        <p
          className="text-gray italic mx-6 my-9"
          style={{
            lineHeight: calcRem(30)
          }}
        >
          We will use the funding generated from this private round for{' '}
          <span className="font-bold">marketing purposes</span>. This will help
          us make the public PFX ICO as successful as possible.
        </p>
      </div>
    </div>
  )
}
