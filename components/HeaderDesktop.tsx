import classNames from 'classnames'
import Link from 'next/link'
import Analytics from './svg/Analytics'
import Bridge from './svg/Bridge'
import DoubleArrow from './svg/DoubleArrow'
import MenuArrow from './svg/MenuArrow'
import Mining from './svg/Mining'
import TopRightArrow from './svg/TopRightArrow'
import USFlag from './svg/flags/USFlag'
import FrenchFlag from './svg/flags/FrenchFlag'
import GermanFlag from './svg/flags/GermanFlag'
import { calcRem } from '../utils/styles'
import { SectionProps } from './sections/utils/SectionProps'
import { ReactNode } from 'react'

export function HeaderDesktop({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'hidden laptop:flex justify-between w-full px-14 py-4 absolute',
        className
      )}
    >
      <Link href="/">
        <a>
          <img src="/logo/polarfox.png" alt="Polarfox logo" />
        </a>
      </Link>
      <div
        className="flex items-center space-x-20 font-semibold"
        style={{
          fontSize: calcRem(14),
          lineHeight: calcRem(16.45)
        }}
      >
        <ProductsDropdown />
        {/* TODO: Remove the div below */}
        <div />
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/#roadmap">
          <a>Roadmap</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        {/* // TODO: The mr-5 below does not work - fix this */}
        <HoverableItem className="mr-5" width={119}>
          Resources
        </HoverableItem>
        {/* <LanguageDropdown /> */}
        {/* <div>Account</div> */}
      </div>
    </div>
  )
}

interface HoverableItemProps {
  className?: string
  width: number
  children: ReactNode
}

function HoverableItem({ className, width, children }: HoverableItemProps) {
  return (
    <div
      className={classNames(
        'rounded-3xl flex items-center justify-between px-4 group-hover:bg-gray-mid2',
        className
      )}
      style={{ width: calcRem(width), height: calcRem(44) }}
    >
      {children}
      <MenuArrow />
    </div>
  )
}

function ProductsDropdown() {
  return (
    <div className="group absolute flex items-center z-10">
      <HoverableItem width={110}>Products</HoverableItem>
      <div
        className="dropdown bg-white rounded-xl absolute justify-between px-4 py-6 hidden group-hover:flex"
        style={{
          width: calcRem(779),
          height: calcRem(219),
          marginTop: calcRem(280)
        }}
      >
        <Product
          logo={<DoubleArrow />}
          href="https://dex.polarfox.io"
          linkTitle="Open app"
        >
          Decentralized Exchange
        </Product>
        <Product
          logo={<Analytics />}
          href="https://analytics.polarfox.io"
          linkTitle="Open app"
        >
          Analytics
        </Product>
        <Product
          logo={<Mining />}
          href="https://dex.polarfox.io/#/pfx"
          linkTitle="Open app"
        >
          Mining Pools
        </Product>
        <Product
          logo={<Bridge />}
          href="https://bridge.polarfox.io"
          linkTitle="Open app"
        >
          Bridge
        </Product>
        <Product
          logo={
            <img
              src="akita.png"
              alt="akita"
              style={{ height: calcRem(24), width: calcRem(24) }}
            />
          }
          href="https://akita.network"
          linkTitle="Visit site"
        >
          AKITA Network
        </Product>
      </div>
      <style jsx>{`
        .dropdown {
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  )
}

interface ProductProps {
  logo: ReactNode
  href: string
  linkTitle: string
  children: ReactNode
}

function Product({ logo, href, linkTitle, children }: ProductProps) {
  return (
    <div style={{ width: calcRem(137) }}>
      <Link href={href}>
        <a
          className="flex rounded-xl hover:bg-gray-dark mx-3 p-3 pt-4"
          style={{
            height: calcRem(121)
          }}
        >
          {logo}
          <div
            className="absolute self-end font-semibold"
            style={{
              fontSize: calcRem(12),
              lineHeight: calcRem(14),
              width: calcRem(80)
            }}
          >
            {children}
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a
          className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between font-semibold pl-4 hover:bg-blue hover:text-white"
          style={{
            height: calcRem(40)
          }}
        >
          {linkTitle}
          <TopRightArrow
            className="fill-current mx-4"
            style={{ height: calcRem(7), width: calcRem(7) }}
          />
        </a>
      </Link>
    </div>
  )
}

function LanguageDropdown() {
  return (
    <div className="group flex items-center">
      <HoverableItem width={131}>
        <USFlag /> English
      </HoverableItem>
      <div
        className="dropdown bg-white rounded-xl absolute justify-between p-5 hidden group-hover:block"
        style={{
          width: calcRem(175),
          marginTop: calcRem(220)
        }}
      >
        <Language href="/">
          English
          <USFlag />
        </Language>
        <Language href="/">
          Français
          <FrenchFlag />
        </Language>
        <Language href="/">
          Deutsch
          <GermanFlag />
        </Language>
      </div>
      <style jsx>{`
        .dropdown {
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  )
}

interface LanguageProps {
  href: string
  children: ReactNode
}

function Language({ href, children }: LanguageProps) {
  return (
    <Link href={href}>
      <a
        className="flex items-center justify-between rounded-xl hover:bg-gray-dark p-3 pt-4 font-semibold"
        style={{
          width: calcRem(137),
          height: calcRem(40),
          fontSize: calcRem(12),
          lineHeight: calcRem(14)
        }}
      >
        {children}
      </a>
    </Link>
  )
}
