import { calcRem } from '../../utils/styles'
import { ReactNode } from 'react'
import { SectionHeading } from './utils/SectionHeading'
import { SectionTitle } from './utils/SectionTitle'
import AnalyticsGradient from '../svg/AnalyticsGradient'
import BridgeGradient from '../svg/BridgeGradient'
import classNames from 'classnames'
import DoubleArrowGradient from '../svg/DoubleArrowGradient'
import TokenGradient from '../svg/TokenGradient'
import TopRightArrow from '../svg/TopRightArrow'

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
          logo={<DoubleArrowGradient />}
        />
        <Product
          label="Polarfox Analytics"
          url="https://analytics-test.polarfox.io"
          logo={<AnalyticsGradient />}
        />
        <Product
          label="Polarfox Token (PFX)"
          url="#"
          logo={<TokenGradient />}
        />
        <Product
          label="Polarfox Bridge"
          url="https://bridge-test.polarfox.io"
          logo={<BridgeGradient />}
        />
        <Product
          label="Akita Community"
          url="https://akita.network"
          logo={
            <div className="-mt-1 hidden group-hover:block">
              <img
                src="/akita-gradient.png"
                alt="akita"
                width="60"
                height="60"
              />
            </div>
          }
        />
      </div>
    </div>
  )
}

interface ProductProps {
  label: string
  url: string
  logo: ReactNode
}

function Product({ label, url, logo }: ProductProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="product w-full flex justify-between p-7 bg-white border border-blue hover:bg-blue-light hover:border-blue-light hover:text-white group"
    >
      <div className="flex flex-col justify-between">
        {/* TODO: Remove div without breaking AKITA logo */}
        <div>{logo}</div>
        <p
          className="self-end font-switzer font-semibold"
          style={{
            fontSize: calcRem(20),
            lineHeight: calcRem(26.4)
          }}
        >
          {label}
        </p>
      </div>
      <div className="a">
        <TopRightArrow className="fill-current" />
      </div>
      <style jsx>{`
        .product {
          height: ${calcRem(195)};
          border-radius: ${calcRem(10)};
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        }

        @media (min-width: 1200px) {
          .product {
            height: ${calcRem(270)};
            max-width: ${calcRem(285)};
          }
        }
      `}</style>
    </a>
  )
}
