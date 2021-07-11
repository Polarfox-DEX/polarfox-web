import classNames from 'classnames';
import { ReactNode } from 'react';
import { calcRem } from '../../utils/styles';

interface OurMissionProps {
  className: string;
}

export function OurMission({ className }: OurMissionProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <Mission title="Our mission">
        Our goal is to build an independent ecosystem of fully decentralized and
        open-source applications on the Avalanche blockchain.
      </Mission>
      <Mission title="Our values">
        We believe trust, honesty and transparency are necessary to build
        anything tangible on the long term.
      </Mission>
      <Mission title="Our vision">
        Polarfox is the name given to an ecosystem of applications based on the
        Avalanche blockchain.
      </Mission>
    </div>
  );
}

interface MissionProps {
  title: string;
  children: ReactNode;
}

export function Mission({ title, children }: MissionProps) {
  return (
    <div style={{ width: calcRem(386) }}>
      <h3
        className="font-switzer font-semibold"
        style={{ fontSize: calcRem(20), lineHeight: calcRem(32) }}
      >
        {title}
      </h3>
      <p
        className="text-gray"
        style={{ fontSize: calcRem(16), lineHeight: calcRem(32) }}
      >
        {children}
      </p>
    </div>
  );
}
