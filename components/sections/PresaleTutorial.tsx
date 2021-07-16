import classNames from "classnames";
import { calcRem } from "../../utils/styles";
import { PropsSectionProps } from "../utils/PropsSectionProps";
import { ReactNode } from "react";

export function PresaleTutorial({ className }: PropsSectionProps) {
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
        <PresaleTutorialBlock
          imgPath="wallet.png"
          imgAlt="wallet"
          imgWidth={20}
          imgHeight={20}
          title="Connect your wallet"
        >
          We support MetaMask, Trustwallet and Coinbase wallet.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock
          imgPath="coins.png"
          imgAlt="coins"
          imgWidth={28}
          imgHeight={20}
          title="Hold 100M AKITA tokens"
        >
          To participate in the presale, you need to own at least 100M AKITA in
          your wallet.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock
          imgPath="ethereum.png"
          imgAlt="ethereum"
          imgWidth={20}
          imgHeight={20}
          title="Buy PFX with ETH"
        >
          Each day, you can buy up to 1 ETH worth of PFX. You can buy more the
          day after.
        </PresaleTutorialBlock>
        <GreyRightArrow />
        <PresaleTutorialBlock
          imgPath="sablier.png"
          imgAlt="sablier"
          imgWidth={16}
          imgHeight={20}
          title="Wait for the airdrop"
        >
          A few days after the presale, you will be able to claim PFX to your
          MetaMask wallet.
        </PresaleTutorialBlock>
      </div>
      <div className="mt-12 italic text-grey" style={{lineHeight: calcRem(30)}}>
        <span className="font-semibold">Note: </span>
        You may purchase PFX with Trustwallet or Coinbase wallet, but MetaMask
        is currently the only wallet that is supported for claiming your PFX
        tokens.
      </div>
    </div>
  );
}

interface PresaleTutorialBlockProps {
  imgPath: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  className?: string;
  children: ReactNode;
}

function PresaleTutorialBlock({
  imgPath,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  className,
  children,
}: PresaleTutorialBlockProps) {
  return (
    <div
      className={classNames("container mt-12", className)}
      style={{ lineHeight: calcRem(30), width: calcRem(198) }}
    >
      <div>
        <img
          src={imgPath}
          alt={imgAlt}
          style={{ height: calcRem(imgHeight), width: calcRem(imgWidth) }}
        />
      </div>
      <div className="font-bold mt-7">{title}</div>
      <div className="text-gray mt-7">{children}</div>
    </div>
  );
}

export function GreyRightArrow() {
  return (
    <div>
      <img
        src="grey-right-arrow.png"
        alt="➔"
        style={{ height: calcRem(16), width: calcRem(16), marginTop: calcRem(103) }}
      />
    </div>
  );
}
