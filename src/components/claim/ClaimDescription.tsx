import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

export function ClaimDescription({ className }: SectionProps) {
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
        GET PFX
      </div>
      <h2
        className="description font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Claim your tokens
      </h2>
      <p
        className="description mt-12 text-gray"
        style={{
          fontSize: calcRem(20),
          lineHeight: calcRem(32)
        }}
      >
        <span className="font-bold text-blue">The PFX presale is over.</span> Congratulations! You can now claim your PFX tokens by entering the address of your wallet on the Avalanche C-Chain.
      
      </p>
     
      <div
        className="description mt-10 text-gray"
        style={{
          lineHeight: calcRem(30)
        }}
      >
        The amount of PFX you receive has been determined automatically based on your share in the buyers' pool.
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
