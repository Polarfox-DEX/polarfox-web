import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqContact } from "./FaqContact";
import { FaqPolarfox } from "./FaqPolarfox";
import { WithBackgroundImage } from "../utils/WithBackgroundImage";

interface PropsSectionProps {
  className?: string;
}

export function FaqMain({ className }: PropsSectionProps) {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div className={classNames("container flex justify-between", className)}>
        <div>
          <FaqSelector />
          <FaqContact className="mt-44" />
        </div>
        <FaqPolarfox className="pl-44" />
      </div>
    </WithBackgroundImage>
  );
}
