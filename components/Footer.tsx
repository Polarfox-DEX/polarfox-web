import React, { ReactNode, ReactText } from 'react';
import { WithBackgroundImage } from '../components/utils/WithBackgroundImage';
import { calcRem } from '../utils/styles';
import GitHub from './svg/Github';
import Medium from './svg/Medium';
import Telegram from './svg/Telegram';
import Twitter from './svg/Twitter';

export function Footer() {
  return (
    <>
      <WithBackgroundImage imageUrl="/background/forest-3.png">
        <div
          className="flex flex-col items-stretch justify-end h-full divide-y-2 divide-blue mx-auto"
          style={{ width: '1200px' }}
        >
          <div className="flex justify-between pb-32">
            <h2
              className="font-switzer"
              style={{
                fontSize: calcRem(50),
                lineHeight: calcRem(65),
                width: calcRem(514),
              }}
            >
              Meet the worldwide community
            </h2>
            <div className="flex space-x-5">
              <TelegramButton />
              <GitHubButton />
              <MediumButton />
              <TwitterButton />
            </div>
          </div>
          <div className="py-32">
            <img src="/logo/polarfox.png" alt="Polarfox logo" />
          </div>
        </div>
      </WithBackgroundImage>
      <WithBackgroundImage imageUrl="/background/fox.png">
        <SiteMap />
        <div
          className="self-start border-t mx-auto text-sm flex-1 text-gray"
          style={{
            width: '1200px',
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
            <Telegram width="24.29" height="20" />
            <GitHub width="20.51" height="20" />
            <Medium width="35.22" height="20" />
            <Twitter width="24.29" height="20" />
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
      <Telegram width="24.62" height="20.51" />
    </SocialButton>
  );
}

function GitHubButton() {
  return (
    <SocialButton url="">
      <GitHub width="21.03" height="20.51" />
    </SocialButton>
  );
}

function MediumButton() {
  return (
    <SocialButton url="">
      <Medium width="36.12" height="20.51" />
    </SocialButton>
  );
}

function TwitterButton() {
  return (
    <SocialButton url="">
      <Twitter width="24.91" height="20.51" />
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
      className="flex justify-center items-center rounded-full border border-blue bg-white w-20 h-20"
    >
      {children}
    </a>
  );
}

function SiteMap() {
  return (
    <div
      className="flex justify-between mx-auto mb-20"
      style={{ width: '1200px', fontSize: '13px', lineHeight: '33px' }}
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
