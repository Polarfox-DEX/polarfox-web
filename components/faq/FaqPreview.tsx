import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../../utils/styles";
import { Question } from "./Question";
import { SectionProps } from "../sections/utils/SectionProps"

export function FaqPreview({ className }: SectionProps) {
  return (
    <div className={classNames("container flex justify-between", className)}>
      <div>
        <div
          className="opacity-50"
          style={{
            fontSize: calcRem(12),
            lineHeight: calcRem(14.1),
            letterSpacing: calcRem(3),
          }}
        >
          FAQ
        </div>
        <h2
          className="font-switzer font-semibold mt-1"
          style={{
            maxWidth: calcRem(357),
            fontSize: calcRem(50),
            lineHeight: calcRem(65),
          }}
        >
          Frequently Asked Questions
        </h2>
        <button
          className="mt-12 rounded-full border border-blue bg-white font-semibold"
          style={{ width: calcRem(166), height: calcRem(44) }}
        >
          <Link href="/faq">
            <a>More questions</a>
          </Link>
        </button>
      </div>

      <div className="pl-44 divide-y divide-gray-light">
        <Question question="What is Polarfox?" isOpen={true}>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
        </Question>
        <Question question="What is the Polarfox DEX?" isOpen={false}>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
        </Question>
        <Question question="What is PFX?" isOpen={false}>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
        </Question>
        <Question question="What are the PFX tokenomics?" isOpen={false}>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
        </Question>
      </div>
    </div>
  );
}
