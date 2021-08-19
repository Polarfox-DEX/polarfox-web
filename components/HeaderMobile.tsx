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
import { ReactNode, useState } from 'react'
import Cross from './svg/Cross'
import MenuMobile from './svg/MenuMobile'
import { SocialMediaLinks } from './utils/SocialMediaLinks'
import { HeaderProps } from './Header'

// TODO: Define the behavior we want when the user clicks on a link to the current page

export function HeaderMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen
}: HeaderProps) {
  return (
    <div
      className={classNames('laptop:hidden absolute w-full px-5 py-7', {
        'z-10 bg-gray-dark opacity-98 flex flex-col justify-between h-screen':
          isMobileMenuOpen
      })}
    >
      <div>
        <div className="items-center flex justify-between">
          <Link href="/">
            <a>
              {/* TODO: The "polarfox" in the logo should not be an image */}
              <img
                src="/logo/polarfox.png"
                alt="Polarfox logo"
                style={{ width: calcRem(175) }}
              />
            </a>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Cross /> : <MenuMobile />}
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            className="flex flex-col justify-between z-5 font-semibold mt-4 overflow-hidden"
            style={{ fontSize: calcRem(24), lineHeight: calcRem(58) }}
          >

            <ProductsAccordionMenu/>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/#roadmap">
              <a>Roadmap</a>
            </Link>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
            <ResourcesAccordionMenu/>
            
          </div>
        ) : (
          <div />
        )}
      </div>
      {isMobileMenuOpen ? (
        <SocialMediaLinks className="justify-end" />
      ) : (
        <div />
      )}
    </div>
  )
}

function ProductsAccordionMenu(){

  return(
    <AccordionMenu name="Products">

      <AccordionMenuItem
        href="https://dex.polarfox.io"
        linkTitle="Open app"
        name="Decentralized Exchange"
      />

      <AccordionMenuItem
        href="https://analytics.polarfox.io"
        linkTitle="Open app"
        name="Analytics"
      />
        
      <AccordionMenuItem
        href="https://dex.polarfox.io/#/pfx"
        linkTitle="Open app"
        name="Mining Pools"
      />            

      <AccordionMenuItem
        href="https://bridge.polarfox.io"
        linkTitle="Open app"
        name="Bridge"
      />

      <AccordionMenuItem
        href="https://akita.network"
        linkTitle="Visit site"
        name="AKITA Network"
      />

    </AccordionMenu>
  )

}

function ResourcesAccordionMenu(){
  return(
    <AccordionMenu name="Resources">

      <AccordionMenuItem
        href="/tutorials"
        linkTitle="Visit site"
        name="Tutorials"
      />

      <AccordionMenuItem
        href="/Polarfox Litepaper V2.6.pdf"
        linkTitle="Read"
        name="Litepaper"
      />

      <AccordionMenuItem
        href="https://github.com/Polarfox-DEX"
        linkTitle="Examine"
        name="Code"
      />

    </AccordionMenu>
  )
}

interface AccordionMenuProps {
  name: string
  children: ReactNode,
  className?: string
}

function AccordionMenu({ children, className, name }: AccordionMenuProps){

  var [menuOpened,setMenuOpened] = useState(false)

  return(
    <div>
      <div 
        className={classNames("flex justify-between items-center")}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        {name}
        <MenuArrow style={{ width: calcRem(12), height: calcRem(8) }} />
      </div>
      
      <div className={classNames(menuOpened ? '': 'hidden')}>
        {children}
      </div>
      
    </div>
    
  )

}

interface AccordionMenuItemProps{
  href: string
  linkTitle: string
  name: string
}

function AccordionMenuItem( { href, linkTitle, name }: AccordionMenuItemProps ){

  return(
    <div className="flex justify-between items-center" style={{ fontSize: calcRem(16) }}>
        {name}
        <Link href={href}>
        <a
          className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between font-semibold pl-4 hover:bg-blue hover:text-white"
          style={{
            height: calcRem(40),
            width: calcRem(130)
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
