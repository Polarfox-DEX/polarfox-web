import classNames from 'classnames'
import React, { ReactNode, ReactText } from 'react'
import {
  WithBackgroundImageStretch,
  WithBackgroundImageFox
} from '../components/utils/WithBackgroundImage'
import { calcRem } from '../utils/styles'
import GitHub from './svg/Github'
import Medium from './svg/Medium'
import Telegram from './svg/Telegram'
import Twitter from './svg/Twitter'
import { SiteMapLink } from './utils/SiteMapLink'
import { SocialMediaLinks } from './utils/SocialMediaLinks'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <>
      <WithBackgroundImageStretch
        className={classNames(
          'bg-contain',
          className
        )}
        imageUrl="/background/forest-3.png"
        imageWidth={1440}
        imageHeight={852}
      >
        <div className="forest3 container flex flex-col laptop:flex-row laptop:justify-between laptop:items-center laptop:pb-32">
          <h2 className="title font-switzer font-semibold">
            Meet the worldwide community.
          </h2>
          <div className="flex justify-between tablet:justify-center space-x-1 tablet:space-x-16 laptop:space-x-5 my-12 laptop:my-0">
            <TelegramButton />
            <GitHubButton />
            <MediumButton />
            <TwitterButton />
          </div>
        </div>
        {/* TODO: Remove double div */}
        <div className="container laptop:px-4">
          <div className="py-16 mt-4 laptop:py-20 border-t-2 border-blue">
            <img src="/logo/polarfox.png" alt="Polarfox logo" />
          </div>
        </div>
        <SiteMap />
      </WithBackgroundImageStretch>
      <style jsx>{`
        .forest3 {
          margin-top: 40vw;
        }

        @media (min-width: 1440px) {
          .forest3 {
            margin-top: ${calcRem(580)};
          }
        }

        .title {
          font-size: ${calcRem(30)};
          line-height: ${calcRem(39.6)};
        }

        @media (min-width: 1200px) {
          .title {
            font-size: ${calcRem(50)};
            line-height: ${calcRem(65)};
            max-width: ${calcRem(514)};
          }
        }
      `}</style>
      <WithBackgroundImageFox>
        {/* TODO: Remove double div */}
        <div
          className="container text-sm flex-1 text-gray space-y-10"
          style={{
            fontSize: calcRem(12),
            lineHeight: calcRem(22),
            minHeight: calcRem(650)
          }}
        >
          <div className="flex flex-col-reverse tablet:flex-row tablet:items-center tablet:space-x-6 border-t border-blue border-opacity-20 pt-16">
            <p
              className="text-blue flex-1 mt-8 tablet:mt-0"
              style={{ fontSize: '13px', lineHeight: '33px' }}
            >
              © 2021 Polarfox ltd.
            </p>
            <SocialMediaLinks />
          </div>

          <p className="w-72">
            <b>Disclaimer</b>
            <br />
            The Polarfox team works around the clock to make sure you get the
            best possible return on your investment.
          </p>
          <p className="w-72 mt-5">
            However, we are not responsible for any losses on your side. Do your
            own research and only invest what you can afford to lose.
          </p>
        </div>
      </WithBackgroundImageFox>
    </>
  )
}

function TelegramButton() {
  return (
    <SocialButton url="https://t.me/polarfoxdex">
      <Telegram
        width={calcRem(24.62)}
        height={calcRem(20.51)}
        className="fill-current"
      />
    </SocialButton>
  )
}

function GitHubButton() {
  return (
    <SocialButton url="https://github.com/Polarfox-DEX">
      <GitHub
        width={calcRem(21.03)}
        height={calcRem(20.51)}
        className="fill-current"
      />
    </SocialButton>
  )
}

function MediumButton() {
  return (
    <SocialButton url="https://medium.com/polarfoxdex">
      <Medium
        width={calcRem(36.12)}
        height={calcRem(20.51)}
        className="fill-current"
      />
    </SocialButton>
  )
}

function TwitterButton() {
  return (
    <SocialButton url="https://twitter.com/polarfoxdex">
      <Twitter
        width={calcRem(24.91)}
        height={calcRem(20.51)}
        className="fill-current"
      />
    </SocialButton>
  )
}

interface SocialButtonProps {
  url: string
  children: ReactNode
}

function SocialButton({ url, children }: SocialButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center rounded-full border border-blue bg-white hover:bg-blue hover:text-white"
    >
      {children}
      <style jsx>{`
        a {
          width: ${calcRem(65)};
          height: ${calcRem(65)};
        }

        @media (min-width: 355px) {
          a {
            width: ${calcRem(74)};
            height: ${calcRem(74)};
          }
        }

        @media (min-width: 640px) {
          a {
            width: ${calcRem(80)};
            height: ${calcRem(80)};
          }
        }
      `}</style>
    </a>
  )
}

function SiteMap() {
  return (
    <div
      className="container grid gap-y-16 grid-cols-2 desktop:flex desktop:justify-between desktop:px-4"
      style={{ fontSize: '13px', lineHeight: '33px' }}
    >
      <SiteMapSection>
        <SiteMapSectionTitle>About</SiteMapSectionTitle>
        <br />
        <SiteMapLink url="/about">About us</SiteMapLink>
        <SiteMapLink url="/faq">FAQ</SiteMapLink>
        <SiteMapLink url="/#roadmap">Roadmap</SiteMapLink>
        <SiteMapLink url="https://t.me/polarfoxdex">Contact</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Products</SiteMapSectionTitle>
        <br />
        <SiteMapLink url="">DEX</SiteMapLink>
        <SiteMapLink url="">Polarfox token</SiteMapLink>
        <SiteMapLink url="">Polarfox Bridge</SiteMapLink>
        <SiteMapLink url="">AKITA Network</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Legal</SiteMapSectionTitle>
        <br />
        <SiteMapLink url="">Privacy</SiteMapLink>
        <SiteMapLink url="">Terms of use</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Resources</SiteMapSectionTitle>
        <br />
        <SiteMapLink url="">Blog</SiteMapLink>
        <SiteMapLink url="">Litepaper</SiteMapLink>
        <SiteMapLink url="/tutorials">Tutorials</SiteMapLink>
      </SiteMapSection>
    </div>
  )
}

interface SiteMapSectionProps {
  children: ReactNode
}

function SiteMapSection({ children }: SiteMapSectionProps) {
  return <div className="flex flex-col">{children}</div>
}

interface SiteMapSectionTitleProps {
  children: ReactText
}

function SiteMapSectionTitle({ children }: SiteMapSectionTitleProps) {
  return <h5 className="font-bold">{children}</h5>
}
