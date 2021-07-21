import classNames from 'classnames';
import React, { ReactNode, ReactText } from 'react';
import { WithBackgroundImage } from '../components/utils/WithBackgroundImage';
import { calcRem } from '../utils/styles';
import GitHub from './svg/Github';
import Medium from './svg/Medium';
import Telegram from './svg/Telegram';
import Twitter from './svg/Twitter';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <>
      <WithBackgroundImage
        className={classNames(
          'bg-left-top bg-contain w-full h-screen min-h-screen',
          className
        )}
        imageUrl="/background/forest-3.jpg"
      >
        <div className="container flex flex-col justify-end desktop:flex-row desktop:justify-between desktop:items-end h-full desktop:pb-32 border-b-2 border-blue">
          <h2 className="title font-switzer font-semibold" style={{}}>
            Meet the worldwide community
            <style jsx>{`
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
          </h2>
          <div className="flex justify-between space-x-1 desktop:space-x-5 my-12 desktop:my-0">
            <TelegramButton />
            <GitHubButton />
            <MediumButton />
            <TwitterButton />
          </div>
        </div>
      </WithBackgroundImage>
      <WithBackgroundImage
        className="bg-left bg-contain desktop:bg-left-top desktop:bg-cover w-full"
        imageUrl="/background/fox.jpg"
      >
        <div className="container flex justify-start my-32">
          <img src="/logo/polarfox.png" alt="Polarfox logo" />
        </div>
        <SiteMap />
        <div
          className="container mt-32 border-t border-blue border-opacity-20 text-sm flex-1 text-gray "
          style={{
            fontSize: calcRem(12),
            lineHeight: calcRem(22),
          }}
        >
          <div className="flex justify-end items-center space-x-6">
            <p
              className="text-blue my-20 flex-1"
              style={{ fontSize: '13px', lineHeight: '33px' }}
            >
              © 2021 Polarfox ltd.
            </p>
            <Telegram width={calcRem(24.29)} height={calcRem(20)} />
            <GitHub width={calcRem(20.51)} height={calcRem(20)} />
            <Medium width={calcRem(35.22)} height={calcRem(20)} />
            <Twitter width={calcRem(24.29)} height={calcRem(20)} />
          </div>

          <p className="w-72">
            <b>Disclaimer</b>
            <br />
            The Polarfox team works hard every day to make sure you get the best
            possible return on your investment.
          </p>
          <p className="w-72 mt-5">
            However, we are not responsible for any losses on your side. Do your
            own research and only invest what you can afford to lose.
          </p>
        </div>
      </WithBackgroundImage>
    </>
  );
}

function TelegramButton() {
  return (
    <SocialButton url="">
      <Telegram width={calcRem(24.62)} height={calcRem(20.51)} className="fill-current" />
    </SocialButton>
  );
}

function GitHubButton() {
  return (
    <SocialButton url="">
      <GitHub width={calcRem(21.03)} height={calcRem(20.51)} className="fill-current" />
    </SocialButton>
  );
}

function MediumButton() {
  return (
    <SocialButton url="">
      <Medium width={calcRem(36.12)} height={calcRem(20.51)} className="fill-current" />
    </SocialButton>
  );
}

function TwitterButton() {
  return (
    <SocialButton url="">
      <Twitter width={calcRem(24.91)} height={calcRem(20.51)} className="fill-current" />
    </SocialButton>
  );
}

interface SocialButtonProps {
  url: string;
  children: ReactNode;
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
          width: ${calcRem(74)};
          height: ${calcRem(74)};
        }

        @media (min-width: 640px) {
          a {
            width: ${calcRem(80)};
            height: ${calcRem(80)};
          }
        }
      `}</style>
    </a>
  );
}

function SiteMap() {
  return (
    <div
      className="container grid gap-y-16 grid-cols-2 desktop:flex desktop:justify-between"
      style={{ fontSize: '13px', lineHeight: '33px' }}
    >
      <SiteMapSection>
        <SiteMapSectionTitle>About</SiteMapSectionTitle>
        <br />
        <SiteMapLink>About us</SiteMapLink>
        <SiteMapLink>FAQ</SiteMapLink>
        <SiteMapLink>Roadmap</SiteMapLink>
        <SiteMapLink>Contact</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Products</SiteMapSectionTitle>
        <br />
        <SiteMapLink>DEX</SiteMapLink>
        <SiteMapLink>Polarfox token</SiteMapLink>
        <SiteMapLink>Polarfox Bridge</SiteMapLink>
        <SiteMapLink>AKITA Network</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Legal</SiteMapSectionTitle>
        <br />
        <SiteMapLink>Privacy</SiteMapLink>
        <SiteMapLink>Terms of use</SiteMapLink>
      </SiteMapSection>
      <SiteMapSection>
        <SiteMapSectionTitle>Resources</SiteMapSectionTitle>
        <br />
        <SiteMapLink>Blog</SiteMapLink>
        <SiteMapLink>Litepaper</SiteMapLink>
        <SiteMapLink>Tutorials</SiteMapLink>
      </SiteMapSection>
    </div>
  );
}

interface SiteMapSectionProps {
  children: ReactNode;
}

function SiteMapSection({ children }: SiteMapSectionProps) {
  return <div className="flex flex-col">{children}</div>;
}

interface SiteMapLinkProps {
  url?: string; // TODO Make it mandatory
  children: ReactText;
}

function SiteMapLink({ url, children }: SiteMapLinkProps) {
  return (
    <a className="hover:underline text-gray" href={url}>
      {children}
    </a>
  );
}

interface SiteMapSectionTitleProps {
  children: ReactText;
}

function SiteMapSectionTitle({ children }: SiteMapSectionTitleProps) {
  return <h5 className="font-bold">{children}</h5>;
}
