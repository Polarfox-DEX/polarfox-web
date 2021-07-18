import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqContact } from "./FaqContact";
import { FaqPolarfox } from "./FaqPolarfox";
import { WithBackgroundImage } from "../utils/WithBackgroundImage";
import { SectionProps } from '../utils/SectionProps'

export function FaqMain({ className }: SectionProps) {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div className={classNames("container flex justify-between", className)}>
        <div>
          <FaqSelector />
          <FaqContact marginTop={317} />
        </div>
        {/* TODO: FaqPolarfox should be lower (at the same level as "Polarfox" on the the selector) */}
        <FaqPolarfox className="pl-44" />
      </div>
    </WithBackgroundImage>
  );
}
