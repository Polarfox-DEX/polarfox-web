import classNames from 'classnames';
import { ReactNode } from 'react';

interface PropsSectionProps {
  className?: string;
}

export function FAQSection({ className }: PropsSectionProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <div>
        <div className="text-xs opacity-50">FAQ</div>
        <div style={{ fontSize: '50px', lineHeight: '65px', width: '382px' }}>
          Frequently Asked Questions
        </div>
        <button
          className="my-12 border border-blue bg-white w-40 h-11 hover:border-0 hover:bg-blue-light hover:text-white"
          style={{ borderRadius: '22px' }}
        >
          More question
        </button>
      </div>

      <div style={{ width: '680px' }}>
        <div style={{ fontSize: '26px', lineHeight: '50px' }}>
          What is Polarfox?
        </div>
        <p className="leading-8 mt-3 mb-8" style={{ color: '#4D6481' }}>
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
      <div
        className="flex justify-between border-t-2 py-3"
        style={{ fontSize: '26px', lineHeight: '50px', borderColor: '#D8D8D8' }}
      >
        <div>{question}</div>
        <div className="">+</div>
      </div>
      <div className="leading-8" style={{ color: '#4D6481' }}>
        {children}
      </div>
    </>
  );
}
