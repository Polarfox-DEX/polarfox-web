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
import { ABOUT_LINK, AKITA_LINK, ANALYTICS_LINK, BRIDGE_LINK, DEX_LINK, FAQ_LINK, GITHUB_LINK, LITEPAPER_LINK, MININGPOOL_LINK, ROADMAP_LINK, TUTORIALS_LINK } from './const/links'
import { PolarfoxLogo } from './utils/PolarfoxLogo'

export function HeaderDesktop({ className }: SectionProps) {
  return (
    <div
      className={classNames('hidden w-full laptop:grid py-4 px-8', className)}
      style={{
        gridTemplateColumns: 'auto auto'
      }}
    >
      <PolarfoxLogo />
      <div
        className="grid grid-flow-col gap-x-2 items-center justify-end font-semibold gap-x-14"
        style={{
          fontSize: calcRem(14)
        }}
      >
        <ProductsDropdown />
        <Link href={ ABOUT_LINK }>
          <a>About</a>
        </Link>
        <Link href={ ROADMAP_LINK }>
          <a>Roadmap</a>
        </Link>
        <Link href={ FAQ_LINK }>
          <a>FAQ</a>
        </Link>
        <RessourceDropdown />
        <LanguageDropdown />
        {/* <div>Account</div> */}
      </div>
    </div>
  )
}

interface DropdownItemProps {
  className?: string
  logo?: any
  name: any
  children: ReactNode
  width?: string
  rightAlignment?: string
}

function Dropdown({
  className,
  logo,
  name,
  children,
  width,
  rightAlignment
}: DropdownItemProps) {

  return (
    <div className="group relative">
      <div
        className='grid items-center group-hover:bg-gray-mid2 rounded-3xl py-4 gap-x-2'
        style={{ gridTemplateColumns: '0.9fr 0.1fr' }}
      >
        <span className="flex justify-items items-center gap-x-2">{logo} {name}</span>
        <MenuArrow />
      </div>
      <div 
        className="absolute group-hover:block hidden"
        style={{
          right: rightAlignment,
        }}
      >
        <div
          className={classNames('top-0 bg-white', className)}
          style={{
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',           
            width: width
          }}
        >
          {children}
        </div>
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
        'grid mt-1 grid-flow-row p-4 gap-y-2 rounded-3xl'
      )}
      rightAlignment="-35%"
    >
      <MenuItem href={ TUTORIALS_LINK } linkTitle="Tutorials">
        Tutorials
      </MenuItem>
      <MenuItem href={ LITEPAPER_LINK } linkTitle="Litepaper">
        Litepaper
      </MenuItem>
      <MenuItem href={ GITHUB_LINK } linkTitle="Code">
        Code
      </MenuItem>
    </Dropdown>
  )
}

function ProductsDropdown() {
  return (
    <Dropdown
      name="Products"
      className="grid mt-1 grid-flow-col p-4 gap-x-4 rounded-3xl"
      rightAlignment="-350%"
    >
      <Product
        logo={<DoubleArrow />}
        href={ DEX_LINK }
        linkTitle="Open app"
      >
        Decentralized Exchange
      </Product>
      <Product
        logo={<Analytics />}
        href={ ANALYTICS_LINK }
        linkTitle="Open app"
      >
        Analytics
      </Product>
      <Product
        logo={<Mining />}
        href={ MININGPOOL_LINK }
        linkTitle="Open app"
      >
        Mining Pools
      </Product>
      <Product
        logo={<Bridge />}
        href={ BRIDGE_LINK }
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
        href={ AKITA_LINK }
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
      className="rounded-2xl py-4 hover:bg-gray-mid2 w-full pl-4 hover:cursor-pointer"
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

  const [buttonHover,setButtonHover] = useState(false)

  return (
    <div style={{ width: calcRem(137) }}>
      <Link href={href}>
        <a
          className={classNames(buttonHover ? 'bg-gray-dark' : '','flex w-full rounded-xl hover:bg-gray-dark p-3 pt-4')}
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
      <a
        className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between font-semibold pl-4 hover:bg-blue hover:text-white"
        style={{
          height: calcRem(40)
        }}
        href={href}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        {linkTitle}
        <TopRightArrow
          className="fill-current mx-4"
          style={{ height: calcRem(7), width: calcRem(7) }}
        />
      </a>

    </div>
  )
}

function LanguageDropdown() {
  return (
    <Dropdown
      name="English"
      logo={<USFlag/>}
      className="block grid mt-1 grid-flow-row p-4 gap-y-2 rounded-3xl z-1"
      rightAlignment="-10%"
    >
      <Language href="/">
        English <USFlag />
      </Language>
      <Language href="/">
        Français <FrenchFlag />
      </Language>
      <Language href="/">
        Deutsch <GermanFlag />
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
        className="grid auto-rows-fr items-center rounded-xl hover:bg-gray-dark p-3 pt-4 font-semibold w-full"
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
