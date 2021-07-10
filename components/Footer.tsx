import React, { ReactNode, ReactText } from 'react';
import { WithBackgroundImage } from '../components/utils/WithBackgroundImage';

export function Footer() {
  return (
    <>
      <WithBackgroundImage imageUrl="/background/forest-3.png">
        <div
          className="flex flex-col items-stretch justify-end h-full divide-y-2 divide-blue mx-auto"
          style={{ width: '1200px' }}
        >
          <div className="flex justify-between pb-32">
            <div
              style={{ fontSize: '50px', lineHeight: '65px', width: '514px' }}
            >
              Meet the worldwide community
            </div>
            <div className="flex space-x-5">
              <TelegramButton />
              <GitHubButton />
              <MediumButton />
              <TwitterButton />
            </div>
          </div>
          <div className="pt-32">
            <img src="/polarfox-logo.png" alt="Polarfox logo" />
          </div>
        </div>
      </WithBackgroundImage>
      <SiteMap />
      <WithBackgroundImage imageUrl="/background/fox.png">
        <div
          className="self-start border-t mx-auto text-sm"
          style={{ width: '1200px', lineHeight: '22px', color: '#4D6481' }}
        >
          <p
            className="text-blue my-20"
            style={{ fontSize: '13px', lineHeight: '33px' }}
          >
            © 2021 Polarfox ltd.
          </p>

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
  return <SocialButton url="" />;
}

function GitHubButton() {
  return <SocialButton url="" />;
}

function MediumButton() {
  return <SocialButton url="" />;
}

function TwitterButton() {
  return <SocialButton url="" />;
}

interface SocialButtonProps {
  url: string;
}

function SocialButton({ url }: SocialButtonProps) {
  return (
    <a
      href={url}
      target="blank"
      className="flex justify-center items-center rounded-full border border-blue bg-white w-20 h-20 hover:border-0 hover:bg-blue-light hover:text-white"
    >
      B
    </a>
  );
}

function SiteMap() {
  return (
    <div
      className="flex justify-between mx-auto my-20"
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
    <a className="hover:underline" style={{ color: '#4D6481' }} href={url}>
      {children}
    </a>
  );
}

interface SiteMapSectionTitleProps {
  children: ReactText;
}

function SiteMapSectionTitle({ children }: SiteMapSectionTitleProps) {
  return <h5>{children}</h5>;
}
