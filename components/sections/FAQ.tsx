import classNames from 'classnames';
import { ReactNode } from 'react';
import { calcRem } from '../../utils/styles';

interface PropsSectionProps {
  className?: string;
}

export function FAQ({ className }: PropsSectionProps) {
  return (
    <div className={classNames('container flex justify-between', className)}>
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
          className="mt-12 rounded-full border border-blue bg-white"
          style={{ width: calcRem(166), height: calcRem(44) }}
        >
          More question
        </button>
      </div>

      <div className="pl-44">
        <h3
          className="font-bold"
          style={{ fontSize: calcRem(26), lineHeight: calcRem(50) }}
        >
          What is Polarfox?
        </h3>
        <p className="mt-3 mb-8 text-gray" style={{ lineHeight: calcRem(30) }}>
          Polarfox is a crypto ecosystem, based on Avalanche, which will bring
          many apps together. Its main app is the Polarfox DEX; some other apps
          have already been added to the ecosystem, such as the Polarfox bridge,
          and many others are coming. Stay tuned! It aims to be fully
          open-source and decentralized. Polarfox’s main values are trust,
          honesty and transparency.
        </p>
        <Question question="What is the Polarfox DEX?">
          {/* <p>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
          </p> */}
        </Question>
        <Question question="What is PFX?">
          {/* <p>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
          </p> */}
        </Question>
        <Question question="What are the PFX tokenomics?">
          {/* <p>
            Polarfox is a crypto ecosystem, based on Avalanche, which will bring
            many apps together. Its main app is the Polarfox DEX; some other
            apps have already been added to the ecosystem, such as the Polarfox
            bridge, and many others are coming. Stay tuned! It aims to be fully
            open-source and decentralized. Polarfox’s main values are trust,
            honesty and transparency.
          </p> */}
        </Question>
      </div>
    </div>
  );
}

interface QuestionProps {
  question: string;
  children: ReactNode;
}

function Question({ question, children }: QuestionProps) {
  return (
    <>
      <h3
        className="flex justify-between border-t-2 py-3 font-bold border-gray-light"
        style={{
          fontSize: calcRem(26),
          lineHeight: calcRem(50),
        }}
      >
        <div>{question}</div>
        <div>+</div>
      </h3>
      <div className="leading-8 text-gray" style={{ lineHeight: calcRem(30) }}>
        {children}
      </div>
    </>
  );
}
