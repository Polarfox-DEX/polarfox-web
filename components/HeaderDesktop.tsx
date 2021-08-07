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
import React, { ReactNode, useState } from 'react'

export function HeaderDesktop({ className }: SectionProps) {
  return (
    <div
      className={classNames('hidden w-full laptop:grid py-4 pl-8', className)}
      style={{
        gridTemplateColumns: 'auto auto'
      }}
    >
      <Link href="/">
        <a>
          <img src="/logo/polarfox.png" alt="Polarfox logo" />
        </a>
      </Link>
      <div
        className="grid grid-flow-col items-center justify-end text-center font-semibold"
        style={{
          fontSize: calcRem(14),
          lineHeight: calcRem(16.45)
        }}
      >
        <ProductsDropdown />
        <Link href="/about">
          <a className="px-6">About</a>
        </Link>
        <Link href="/#roadmap">
          <a className="px-6">Roadmap</a>
        </Link>
        <Link href="/faq">
          <a className="px-6">FAQ</a>
        </Link>
        <RessourceDropdown />
        <LanguageDropdown />
        {/* <div>Account</div> */}
      </div>
    </div>
  )
}

interface HoverableItemProps {
  className?: string
  name: string
  children: ReactNode
  width?: string
  rightAlignment?: string
}

function Dropdown({
  className,
  name,
  children,
  width,
  rightAlignment
}: HoverableItemProps) {
  const [menuOpened, setMenuOpened] = useState(false)
  const [locked, setLocked] = useState(false)

  const hideMenu = () => {
    setTimeout(function () {
      setMenuOpened(false)
    }, 200)
  }

  return (
    <div>
      <div
        className={classNames(
          'grid items-center hover:bg-gray-mid2 rounded-3xl px-6 py-4 gap-x-2'
        )}
        style={{ gridTemplateColumns: '0.9fr 0.1fr' }}
        onMouseEnter={() => setMenuOpened(true)}
        onMouseLeave={() => hideMenu()}
      >
        {name}
        <MenuArrow />
      </div>
      <div
        className={classNames(menuOpened || locked ? '' : 'hidden', className)}
        style={{
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
          backgroundColor: 'white',
          right: rightAlignment,
          width: width
        }}
        onMouseEnter={() => setLocked(true)}
        onMouseLeave={() => setLocked(false)}
      >
        {children}
      </div>
    </div>
  )
}

function RessourceDropdown() {
  return (
    <Dropdown
      name="Resources"
      width={calcRem(220)}
      className={classNames(
        'absolute grid mt-1 grid-flow-row p-4 gap-y-2 rounded-3xl'
      )}
      rightAlignment="8%"
    >
      <MenuItem href="/tutorials" linkTitle="Tutorials">
        Tutorials
      </MenuItem>
      <MenuItem href="/Polarfox Litepaper V2.6.pdf" linkTitle="Litepaper">
        Litepaper
      </MenuItem>
      <MenuItem href="https://github.com/Polarfox-DEX" linkTitle="Code">
        Code
      </MenuItem>
    </Dropdown>
  )
}

function ProductsDropdown() {
  return (
    <Dropdown
      name="Products"
      className="absolute grid mt-1 grid-flow-col p-4 gap-x-4 rounded-3xl"
      rightAlignment="10%"
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
    </Dropdown>
  )
}

interface MenuItemProps {
  href: string
  linkTitle: string
  children: ReactNode
}

function MenuItem({ href, linkTitle, children }: MenuItemProps) {
  return (
    <a
      href={href}
      className="rounded-2xl py-4 hover:bg-gray-mid2 w-full text-left pl-4 hover:cursor-pointer"
    >
      {children}
    </a>
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
            className="absolute self-end text-left font-semibold"
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
    <Dropdown
      name="Language"
      className="absolute block grid mt-1 grid-flow-row p-4 gap-y-2 rounded-3xl z-1"
      rightAlignment="0.5%"
    >
      <Language href="/">
        {' '}
        English <USFlag />{' '}
      </Language>
      <Language href="/">
        {' '}
        Français <FrenchFlag />{' '}
      </Language>
      <Language href="/">
        {' '}
        Deutsch <GermanFlag />{' '}
      </Language>
    </Dropdown>
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
        className="grid auto-rows-fr items-center text-left rounded-xl hover:bg-gray-dark p-3 pt-4 font-semibold w-full"
        style={{
          width: calcRem(137),
          height: calcRem(40),
          fontSize: calcRem(12),
          lineHeight: calcRem(14),
          gridTemplateColumns: '0.8fr 0.2fr'
        }}
      >
        {children}
      </a>
    </Link>
  )
}
