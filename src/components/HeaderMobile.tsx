import classNames from 'classnames'
import Link from 'next/link'
import MenuArrow from './svg/MenuArrow'
import TopRightArrow from './svg/TopRightArrow'
import { calcRem } from '../utils/styles'
import { ReactNode, useState } from 'react'
import Cross from './svg/Cross'
import MenuMobile from './svg/MenuMobile'
import { SocialMediaLinks } from './utils/SocialMediaLinks'
import { HeaderProps } from './Header'
import {
  ABOUT_LINK,
  AKITA_LINK,
  ANALYTICS_LINK,
  DEX_LINK,
  FAQ_LINK,
  GITHUB_LINK,
  HOME_LINK,
  LITEPAPER_LINK,
  MININGPOOL_LINK,
  ROADMAP_LINK,
  TUTORIALS_LINK
} from '../components/const/links'
import { PolarfoxLogo } from './utils/PolarfoxLogo'

export function HeaderMobile({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  // TODO: Move to utils
  function SmartLink({ href, name }: SmartLinkProp) {
    var verifyLink = (event: React.MouseEvent) => {
      event.preventDefault

      var nextLocation = document.location.origin + href

      // We are on the page we are trying to reach
      if (window.location.href === nextLocation) {
        // Close menu
        setIsMobileMenuOpen(false)
      } else {
        window.location.href = href
      }
    }

    return <a onClick={(event) => verifyLink(event)}>{name}</a>
  }

  return (
    <div
      className={classNames('laptop:hidden w-full px-5 py-4', {
        'absolute z-10 bg-gray-dark opacity-98 flex flex-col justify-between h-screen': isMobileMenuOpen
      })}
    >
      <div>
        <div className="items-center flex justify-between">
          <PolarfoxLogo />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Cross /> : <MenuMobile />}
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            className="flex flex-col justify-between z-5 font-semibold mt-4 overflow-hidden"
            style={{ fontSize: calcRem(24), lineHeight: calcRem(58) }}
          >
            <SmartLink href={HOME_LINK} name="Home" />
            {/* <ProductsAccordionMenu /> */}
            <SmartLink href={ABOUT_LINK} name="About" />
            <SmartLink href={ROADMAP_LINK} name="Roadmap" />
            <SmartLink href={FAQ_LINK} name="FAQ" />
            <ResourcesAccordionMenu />
          </div>
        ) : (
          <div />
        )}
      </div>
      <SocialMediaLinks
        className={classNames('absolute justify-end ', {
          hidden: !isMobileMenuOpen
        })}
        style={{ bottom: '1rem', right: '1rem' }}
      />
    </div>
  )
}

function ProductsAccordionMenu() {
  return (
    <AccordionMenu name="Products">
      <AccordionMenuItem href={DEX_LINK} linkTitle="Open app" name="Decentralized Exchange" />
      <AccordionMenuItem href={ANALYTICS_LINK} linkTitle="Open app" name="Analytics" />
      <AccordionMenuItem href={MININGPOOL_LINK} linkTitle="Open app" name="Mining Pools" />
      <AccordionMenuItem href={AKITA_LINK} linkTitle="Visit site" name="AKITA Network" />
    </AccordionMenu>
  )
}

function ResourcesAccordionMenu() {
  return (
    <AccordionMenu name="Resources">
      {/* <AccordionMenuItem href={TUTORIALS_LINK} linkTitle="Visit site" name="Tutorials" /> */}
      <AccordionMenuItem href={LITEPAPER_LINK} linkTitle="Read" name="Litepaper" />
      <AccordionMenuItem href={GITHUB_LINK} linkTitle="View" name="Code" />
    </AccordionMenu>
  )
}

interface AccordionMenuProps {
  name: string
  children: ReactNode
  className?: string
}

function AccordionMenu({ children, className, name }: AccordionMenuProps) {
  var [menuOpened, setMenuOpened] = useState(false)

  return (
    <div>
      <div className={classNames('flex justify-between items-center')} onClick={() => setMenuOpened(!menuOpened)}>
        {name}
        <MenuArrow style={{ width: calcRem(12), height: calcRem(8) }} />
      </div>
      <div className={classNames({ hidden: !menuOpened })}>{children}</div>
    </div>
  )
}

interface AccordionMenuItemProps {
  href: string
  linkTitle: string
  name: string
}

function AccordionMenuItem({ href, linkTitle, name }: AccordionMenuItemProps) {
  return (
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
          <TopRightArrow className="fill-current mx-4" style={{ height: calcRem(7), width: calcRem(7) }} />
        </a>
      </Link>
    </div>
  )
}

interface SmartLinkProp {
  href: string
  name: string
}
