import classNames from "classnames";
import Coins from "../svg/Coins";
import Ethereum from "../svg/Ethereum";
import RightArrow from "../svg/RightArrow";
import Sablier from "../svg/Sablier";
import Wallet from "../svg/Wallet";
import { calcRem } from "../../utils/styles";
import { SectionProps } from "../utils/SectionProps";
import { ReactNode } from "react";

export function PresaleTutorial({ className }: SectionProps) {
  return (
    <div className={classNames("container", className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        STEP-BY-STEP
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65),
        }}
      >
        How to participate
      </h2>
      <div className="flex justify-between">
        <PresaleTutorialBlock logo={<Wallet />} title="Connect your wallet">
          We support MetaMask, Trustwallet and Coinbase wallet.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <div>
          <PresaleTutorialBlock logo={<Coins />} title="Hold 100M AKITA tokens">
            To participate in the presale, you need to own at least 100M AKITA
            in your wallet.
          </PresaleTutorialBlock>
        </div>
        <GreyRightArrow />
        <PresaleTutorialBlock logo={<Ethereum />} title="Buy PFX with ETH">
          Each day, you can buy up to 1 ETH worth of PFX. You can buy more the
          day after.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock logo={<Sablier />} title="Wait for the airdrop">
          A few days after the presale, you will be able to claim PFX to your
          MetaMask wallet.
        </PresaleTutorialBlock>
      </div>
      <div
        className="mt-12 italic text-grey"
        style={{ lineHeight: calcRem(30) }}
      >
        <span className="font-semibold">Note: </span>
        You may purchase PFX with Trustwallet or Coinbase wallet, but MetaMask
        is currently the only wallet that is supported for claiming your PFX
        tokens.
      </div>
    </div>
  );
}

interface PresaleTutorialBlockProps {
  logo: ReactNode;
  title: string;
  className?: string;
  children: ReactNode;
}

function PresaleTutorialBlock({
  logo,
  title,
  className,
  children,
}: PresaleTutorialBlockProps) {
  return (
    <div
      className={classNames("container mt-12", className)}
      style={{ lineHeight: calcRem(30), width: calcRem(198) }}
    >
      {logo}
      <div className="font-bold mt-7">{title}</div>
      <div className="text-gray mt-7">{children}</div>
    </div>
  );
}

export function GreyRightArrow() {
  return (
    <RightArrow
      className="fill-current opacity-30"
      style={{ marginTop: calcRem(103) }}
    />
  );
}
