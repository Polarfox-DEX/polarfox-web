import classNames from "classnames";
import { Question } from "../utils/Question";
import { SectionProps } from "../utils/SectionProps"

export function FaqPolarfox({ className }: SectionProps) {
  return (
    <div className={classNames("divide-y divide-gray-light", className)}>
      <Question question="What is Polarfox?" isOpen={true}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="What is the Polarfox DEX?" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="What is PFX?" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="What are the PFX tokenomics?" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #5" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #6" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #7" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #8" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #9" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
      <Question question="Question #10" isOpen={false}>
        Polarfox is a crypto ecosystem, based on Avalanche, which will bring
        many apps together. Its main app is the Polarfox DEX; some other apps
        have already been added to the ecosystem, such as the Polarfox bridge,
        and many others are coming. Stay tuned! It aims to be fully open-source
        and decentralized. Polarfox’s main values are trust, honesty and
        transparency.
      </Question>
    </div>
  );
}
