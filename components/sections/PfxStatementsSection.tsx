import classNames from 'classnames';

import FlagSVG from '../../assets/icons/flag.svg';
import TokenSVG from '../../assets/icons/token.svg';
import AvalancheSVG from '../../assets/icons/avalanche.svg';
import { ReactNode } from 'react';

interface PfxStatementsProps {
  className?: string;
}

export function PfxStatements({ className }: PfxStatementsProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <PfxStatement icon={FlagSVG} title="Goal of Polarfox">
        <p>
          Build an independent ecosystem of fully decentralized and open-source
          apps on the Avalanche blockchain.
        </p>
      </PfxStatement>
      <PfxStatement icon={TokenSVG} title="PFX Token">
        <p>
          PFX is the native governance token of the Polarfox ecosystem and will
          be used as the primary source of liquidity around the platform.
        </p>
      </PfxStatement>
      <PfxStatement icon={AvalancheSVG} title="Created on Avalanche">
        <p>
          Avalanche is a blockchain with high potential that boasts impressive
          features: low gas fees, fast transactions, decentralized and more!
        </p>
      </PfxStatement>
    </div>
  );
}

interface PfxStatementProps {
  icon: string;
  title: string;
  children: ReactNode;
}

function PfxStatement({ icon, title, children }: PfxStatementProps) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ width: '385px' }}
    >
      <img src={icon} alt="icon" />
      <p className="my-8 text-lg">{title}</p>
      {children}
    </div>
  );
}
