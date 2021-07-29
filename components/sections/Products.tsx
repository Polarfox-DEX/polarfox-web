import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import TopRightArrow from '../svg/TopRightArrow'
import { SectionHeading } from './utils/SectionHeading'
import { SectionTitle } from './utils/SectionTitle'

interface ProductsSectionProps {
  className?: string
}

export function Products({ className }: ProductsSectionProps) {
  return (
    <div className={classNames('container', className)}>
      <SectionHeading>PFX PORTFOLIO</SectionHeading>
      <SectionTitle className="mt-1">Products</SectionTitle>
      <div className="flex flex-wrap justify-between gap-y-5 mt-16 desktop:mt-28">
        <Product
          label="Decentralized Exchange"
          url="https://dex-test.polarfox.io/"
        />
        <Product label="Polarfox Token (PFX)" url="#" />
        <Product
          label="Polarfox Bridge"
          url="https://bridge-test.polarfox.io"
        />
        <Product label="Akita Community" url="https://akita.network" />
      </div>
    </div>
  )
}

interface ProductProps {
  label: string
  url: string
}

function Product({ label, url }: ProductProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="product w-full flex p-7 bg-white border border-blue"
    >
      <p
        className="flex-1 self-end text-lg font-switzer font-semibold"
        style={{
          width: calcRem(224),
          fontSize: calcRem(20),
          lineHeight: calcRem(26.4)
        }}
      >
        {label}
      </p>
      <div className="text-right">
        <TopRightArrow className="fill-current" />
      </div>
      <style jsx>{`
        .product {
          height: ${calcRem(270)};
          border-radius: ${calcRem(10)};
        }

        @media (min-width: 1200px) {
          .product {
            max-width: ${calcRem(285)};
          }
        }
      `}</style>
    </a>
  )
}
