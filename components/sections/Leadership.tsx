import classNames from 'classnames';
import { ReactNode } from 'react';
import { calcRem } from '../../utils/styles';
import LinkedIn from '../svg/LinkedIn';

interface LeadershipProps {
  className?: string;
}

// TODO extract tile component
export function Leadership({ className }: LeadershipProps) {
  return (
    <div className={classNames('container', className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        POLARFOX TEAM
      </div>
      <div className="grid grid-cols-2 gap-4">
        <h2
          className="font-switzer font-semibold mt-1"
          style={{
            maxWidth: calcRem(357),
            fontSize: calcRem(50),
            lineHeight: calcRem(65),
          }}
        >
          Leadership
        </h2>
        <div className="flex items-end">
          <p style={{ fontSize: calcRem(20), lineHeight: calcRem(32) }}>
            Meet the team of Polarfox working on the project behind the scenes
            from all around the world.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-28">
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Justin French picture" />
          <ProfileHeading name="Justin French" title="Project lead / CEO" />
          <ProfileDescription>
            Co-founder of Polarfox Labs. Focuses the direction and ethos of the
            Polarfox community.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Clément Aguilar picture" />
          <ProfileHeading name="Clément Aguilar" title="Lead developer / CTO" />
          <ProfileDescription>
            Co-founder of Polarfox Labs. In charge of all the technical aspects
            of the ecosystem.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Ryan MacGavin picture" />
          <ProfileHeading name="Ryan MacGavin" title="Marketing | Community" />
          <ProfileDescription>
            Ryan’s many roles include marketing, negotiating, community
            management and providing support, among others.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="John Hua picture" />
          <ProfileHeading
            name="Ryan MacGavin"
            title="PR & Marketing Coordinator"
          />
          <ProfileDescription>
            John’s building and developing teams, communities and business
            relationships with the onus to empower others.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Nicolas Hebrard picture" />
          <ProfileHeading
            name="Nicolas Hebrard"
            title="Software engineer | Developer"
          />
          <ProfileDescription>
            Nicolas is a skillful, experienced web developer whose expertise
            keeps proving useful and productive.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture
            src="/picture/jf.jpg"
            alt="Vladimír Krajčovič picture"
          />
          <ProfileHeading name="Vladimír Krajčovič" title="Designer" />
          <ProfileDescription>
            Vladimír’s designing skills shape the Polarfox ecosystem and give it
            its unique look and feel.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Geena Scalzo picture" />
          <ProfileHeading name="Geena Scalzo" title="Social media | Support" />
          <ProfileDescription>
            Geena manages Polarfox&apos;s social media and provides useful
            tutorials for the community.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Bastian Gerheim picture" />
          <ProfileHeading name="Bastian Gerheim" title="Marketing | Support" />
          <ProfileDescription>
            Bastian performs marketing tasks, writes tutorials and provides
            support. A true expert at typo fixing.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
        <Profile>
          <ProfilePicture src="/picture/jf.jpg" alt="Akita Inu picture" />
          <ProfileHeading name="Akita Inu" title="Supervisor" />
          <ProfileDescription>
            None of this would have been possible without the support of the
            AKITA community. Woof.
          </ProfileDescription>
          <LinkedInLink url="https://www.linkedin.com/in/nicolas-hebrard-786a91112" />
        </Profile>
      </div>
    </div>
  );
}

interface ProfileProps {
  children: ReactNode;
}

function Profile({ children }: ProfileProps) {
  return (
    <div
      className="my-7 flex flex-col"
      style={{ width: calcRem(285), height: calcRem(515) }}
    >
      {children}
    </div>
  );
}

interface ProfilePictureProps {
  src: string;
  alt: string;
}

function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return <img className="rounded-2xl" src={src} alt={alt} />;
}

interface ProfileHeadingProps {
  name: string;
  title: string;
}

function ProfileHeading({ name, title }: ProfileHeadingProps) {
  return (
    <div className="flex justify-between pt-6 pb-8">
      <p
        className="font-semibold"
        style={{ fontSize: calcRem(18), lineHeight: calcRem(28) }}
      >
        {name}
        <br />
        {title}
      </p>
      <div>
        <img src="/united-states.jpg" alt="flag" />
      </div>
    </div>
  );
}

interface ProfileDescriptionProps {
  children: ReactNode;
}

function ProfileDescription({ children }: ProfileDescriptionProps) {
  return (
    <p
      className="text-gray"
      style={{ fontSize: calcRem(16), lineHeight: calcRem(24) }}
    >
      {children}
    </p>
  );
}

interface LinkedInLinkProps {
  url: string;
}

function LinkedInLink({ url }: LinkedInLinkProps) {
  return (
    <div className="flex-1 flex items-end">
      <a href={url}>
        <LinkedIn width={calcRem(19.11)} height={calcRem(18.18)} />
      </a>
    </div>
  );
}
