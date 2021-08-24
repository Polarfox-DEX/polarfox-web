import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'
import FrenchFlag from '../svg/flags/FrenchFlag'
import GermanFlag from '../svg/flags/GermanFlag'
import JapaneseFlag from '../svg/flags/JapaneseFlag'
import SlovakianFlag from '../svg/flags/SlovakianFlag'
import USFlag from '../svg/flags/USFlag'
import GitHub from '../svg/Github'
import LinkedIn from '../svg/LinkedIn'
import Twitter from '../svg/Twitter'
import { SectionHeading } from './utils/SectionHeading'
import { SectionTitle } from './utils/SectionTitle'
import { SectionProps } from './utils/SectionProps'

// TODO extract tile component
export function MainTeam({ className }: SectionProps) {
  return (
    <div className={classNames('container', className)}>
      <SectionHeading>POLARFOX TEAM</SectionHeading>
      <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-4">
        <SectionTitle>Leadership</SectionTitle>
        <div className="flex items-end mt-10 tablet:mt-0">
          <p style={{ fontSize: calcRem(20), lineHeight: calcRem(32) }}>
            Meet the team of Polarfox working on the project behind the scenes
            from all around the world.
          </p>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-10 desktop:mt-28 gap-x-16 desktop:gap-x-0 gap-y-16">
        <Profile>
          <ProfilePicture
            src="/team-pictures/jf.png"
            alt="Justin French picture"
          />
          <ProfileHeading
            name="Justin French"
            job="Project lead / CEO"
            flag={<USFlag />}
          />
          <ProfileDescription>
            Co-founder of Polarfox Labs. Focuses the direction and ethos of the
            Polarfox community.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/justin-french-99a183145" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/ca.png"
            alt="Clément Aguilar picture"
          />
          <ProfileHeading
            name="Clément Aguilar"
            job="Lead developer / CTO"
            flag={<FrenchFlag />}
          />
          <ProfileDescription>
            Co-founder of Polarfox Labs. In charge of all the technical aspects
            of the ecosystem.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/cl%C3%A9ment-aguilar" />
            <GitHubLink url="https://github.com/Klemah" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/rmg.png"
            alt="Ryan MacGavin picture"
          />
          <ProfileHeading
            name="Ryan MacGavin"
            job="Marketing | Community"
            flag={<USFlag />}
          />
          <ProfileDescription>
            Ryan’s many roles include marketing, negotiating, community
            management and providing support, among others.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/ryan-macgavin-0071983" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture src="/team-pictures/jh.png" alt="John Hua picture" />
          <ProfileHeading
            name="John Hua"
            job="PR & Marketing Coordinator"
            flag={<USFlag />}
          />
          <ProfileDescription>
            John’s building and developing teams, communities and business
            relationships with the onus to empower others.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/john-hua-1b8a8465" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/nh.png"
            alt="Nicolas Hebrard picture"
          />
          <ProfileHeading
            name="Nicolas Hebrard"
            job="Software engineer | Developer"
            flag={<FrenchFlag />}
          />
          <ProfileDescription>
            Nicolas is a skillful, experienced web developer whose expertise
            keeps proving useful and productive.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
            <GitHubLink url="https://github.com/NHebrard" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/vk.png"
            alt="Vladimír Krajčovič picture"
          />
          <ProfileHeading
            name="Vladimír Krajčovič"
            job="Designer"
            flag={<SlovakianFlag />}
          />
          <ProfileDescription>
            Vladimír’s designing skills shape the Polarfox ecosystem and give it
            its unique look and feel.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/vladimirkrajcovic" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/gs.png"
            alt="Geena Scalzo picture"
          />
          <ProfileHeading
            name="Geena Scalzo"
            job="Social media | Support"
            flag={<USFlag />}
          />
          <ProfileDescription>
            Geena manages Polarfox&apos;s social media and provides useful
            tutorials for the community.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/geena-scalzo-35412716a" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture
            src="/team-pictures/bg.png"
            alt="Bastian Gerheim picture"
          />
          <ProfileHeading
            name="Bastian Gerheim"
            job="Marketing | Support"
            flag={<GermanFlag />}
          />
          <ProfileDescription>
            Bastian performs marketing tasks, writes tutorials and provides
            support. A true expert at typo fixing.
          </ProfileDescription>
          <SocialLinks>
            <LinkedInLink url="https://www.linkedin.com/in/bastian-gerheim-352884216/?locale=en_US" />
          </SocialLinks>
        </Profile>
        <Profile>
          <ProfilePicture src="/team-pictures/ai.png" alt="Akita Inu picture" />
          <ProfileHeading
            name="Akita Inu"
            job="Supervisor"
            flag={<JapaneseFlag />}
          />
          <ProfileDescription>
            None of this would have been possible without the support of the
            AKITA community. Woof.
          </ProfileDescription>
          <SocialLinks>
            <TwitterLink url="https://twitter.com/akita_network" />
          </SocialLinks>
        </Profile>
      </div>
    </div>
  )
}

interface ProfileProps {
  children: ReactNode
}

function Profile({ children }: ProfileProps) {
  return (
    <div className="flex flex-col" style={{ width: calcRem(285) }}>
      {children}
    </div>
  )
}

interface ProfilePictureProps {
  src: string
  alt: string
}

function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return (
    <>
      <img
        className="profile-picture rounded-2xl"
        src={src}
        alt={alt}
        style={{ width: calcRem(285), height: calcRem(285) }}
      />
      <style jsx>{`
        .profile-picture {
          box-shadow: 0px 7px 31px rgba(16, 23, 39, 0.21);
        }
      `}</style>
    </>
  )
}

interface ProfileHeadingProps {
  name: string
  job: string
  flag: ReactNode
}

function ProfileHeading({ name, job, flag }: ProfileHeadingProps) {
  return (
    <div className="flex justify-between mt-6">
      <p
        className="font-semibold"
        style={{ fontSize: calcRem(18), lineHeight: calcRem(28) }}
      >
        {name}
        <br />
        {job}
      </p>
      <div>{flag}</div>
    </div>
  )
}

interface ProfileDescriptionProps {
  children: ReactNode
}

function ProfileDescription({ children }: ProfileDescriptionProps) {
  return (
    <p
      className="text-gray py-8"
      style={{ fontSize: calcRem(16), lineHeight: calcRem(24) }}
    >
      {children}
    </p>
  )
}

interface SocialLinksProps {
  children: ReactNode
}

function SocialLinks({ children }: SocialLinksProps) {
  return <div className="flex-1 flex items-end gap-x-2">{children}</div>
}

function LinkedInLink({ url }: { url: string }) {
  return (
    <SocialLink url={url}>
      <LinkedIn width={calcRem(19.11)} height={calcRem(18.18)} />
    </SocialLink>
  )
}

function GitHubLink({ url }: { url: string }) {
  return (
    <SocialLink url={url}>
      <GitHub width={calcRem(18.46)} height={calcRem(18)} color="#788596" />
    </SocialLink>
  )
}

function TwitterLink({ url }: { url: string }) {
  return (
    <SocialLink url={url}>
      <Twitter width={calcRem(24.29)} height={calcRem(20)} color="#788596" />
    </SocialLink>
  )
}

interface SocialLinkProps {
  url: string
  children: ReactNode
}

function SocialLink({ url, children }: SocialLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
