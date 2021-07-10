import { ReactNode, ReactText } from 'react';
import classNames from 'classnames';
import Flag from '../svg/Flag';
import Token from '../svg/Token';
import Avalanche from '../svg/Avalanche';
import { calcRem } from '../../utils/styles';

interface PfxStatementsProps {
  className?: string;
}

export function PfxStatements({ className }: PfxStatementsProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <PfxStatement
        icon={<Flag width={calcRem(17.07)} height={calcRem(40)} />}
        title="Goal of Polarfox"
      >
        Build an independent ecosystem of fully decentralized and open-source
        apps on the Avalanche blockchain.
      </PfxStatement>
      <PfxStatement
        icon={<Token width={calcRem(40)} height={calcRem(40)} />}
        title="PFX Token"
      >
        PFX is the native governance token of the Polarfox ecosystem and will be
        used as the primary source of liquidity around the platform.
      </PfxStatement>
      <PfxStatement
        icon={<Avalanche width={calcRem(46.39)} height={calcRem(40)} />}
        title="Created on Avalanche"
      >
        Avalanche is a blockchain with high potential that boasts impressive
        features: low gas fees, fast transactions, decentralized and more!
      </PfxStatement>
    </div>
  );
}

interface PfxStatementProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function PfxStatement({ icon, title, children }: PfxStatementProps) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ width: '385px' }}
    >
      {icon}
      <p
        className="my-8 font-switzer font-semibold"
        style={{ fontSize: calcRem(20), lineHeight: calcRem(32) }}
      >
        {title}
      </p>
      <p style={{ color: '#4D6481', lineHeight: calcRem(32) }}>{children}</p>
    </div>
  );
}
