import { calcRem } from '../../utils/styles'
import { ReactNode } from 'react'
import { SectionHeading } from './utils/SectionHeading'
import { SectionTitle } from './utils/SectionTitle'
import AnalyticsGradient from '../svg/AnalyticsGradient'
// import BridgeGradient from '../svg/BridgeGradient'
import classNames from 'classnames'
import DoubleArrowGradient from '../svg/DoubleArrowGradient'
import TokenGradient from '../svg/TokenGradient'
import TopRightArrow from '../svg/TopRightArrow'
import {DEX_LINK, ANALYTICS_LINK, AKITA_LINK } from '../const/links'

interface ProductsSectionProps {
  className?: string
}

export function Products({ className }: ProductsSectionProps) {
  return (
    <div className={classNames('container desktop:px-4', className)}>
      <SectionHeading>PFX PORTFOLIO</SectionHeading>
      <SectionTitle className="mt-1">Products</SectionTitle>
      <div className="flex flex-wrap laptop:flex-nowrap justify-between laptop:justify-start gap-x-5 gap-y-5 mt-16 laptop:mt-20 desktop:mt-28 laptop:pb-10 laptop:overflow-x-scroll">
        <Product
          label="Decentralized Exchange"
          url={DEX_LINK}
          logo={<DoubleArrowGradient />}
        />
        <Product
          label="Polarfox Analytics"
          url={ANALYTICS_LINK}
          logo={<AnalyticsGradient />}
        />
        <Product
          label="Polarfox Token (PFX)"
          url="#"
          logo={<TokenGradient />}
        />
        {/* <Product
          label="Polarfox Bridge"
          url="https://bridge-test.polarfox.io"
          logo={<BridgeGradient />}
        /> */}
        <Product
          label="Akita Community"
          url={AKITA_LINK}
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
      className="product w-full flex laptop:flex-none justify-between p-7 bg-white border border-blue hover:bg-blue-light hover:border-blue-light hover:text-white group"
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

        .product:hover {
          box-shadow: 0px 7px 31px rgba(28, 103, 254, 0.28);
        }

        @media (min-width: 1024px) {
          .product {
            height: ${calcRem(240)};
            width: ${calcRem(253)};
          }
        }

        @media (min-width: 1280px) {
          .product {
            height: ${calcRem(270)};
            width: ${calcRem(285)};
          }
        }
      `}</style>
    </a>
  )
}
