import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

export function ClaimSaleDescription({ className }: SectionProps) {
  return (
    <div className={classNames('container', className)}>
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
        className="description font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Private PFX sale
      </h2>
      <p
        className="description mt-12 text-gray"
        style={{
          fontSize: calcRem(20),
          lineHeight: calcRem(32)
        }}
      >
        The PFX private sale will last until <span className="font-bold text-blue">$1,000,000</span> are raised. The
        token is sold at a price of $1 per token, on a{' '}
        <span className="font-bold text-blue">first-come, first-served</span> basis.
      </p>
      <p
        className="description mt-10 text-gray"
        style={{
          lineHeight: calcRem(30)
        }}
      >
        The price of $1 is <span className="font-bold text-blue">half of the start</span> ICO price, and 1/40th of the
        potential end price — a <span className="font-bold text-blue">potential 4000% gain</span>.
      </p>
      <div className="description mt-10 border border-blue bg-white rounded-lg">
        <p
          className="text-gray italic mx-6 my-9"
          style={{
            lineHeight: calcRem(30)
          }}
        >
          We will use the funding generated from this private round for{' '}
          <span className="font-bold">marketing purposes</span>. This will help us make the public PFX ICO as successful
          as possible.
        </p>
      </div>
      <div
        className="description mt-10 text-gray"
        style={{
          lineHeight: calcRem(30)
        }}
      >
        <span className="underline">Warnings:</span>
        <ul className="list-disc list-inside pl-4" style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}>
          <li>
            The destination address <span className="font-bold text-blue underline">must</span> be a{' '}
            <span className="font-bold text-blue-light">MetaMask</span> address. This is because most other wallets do
            not support Avalanche yet.
          </li>
          <li>Due to regulatory concerns, we are unable to accept investments from US and Canadian citizens.</li>
        </ul>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .description {
            width: ${calcRem(503)};
          }
        }
      `}</style>
    </div>
  )
}
