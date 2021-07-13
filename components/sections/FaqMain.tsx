import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqPolarfox } from "./FaqPolarfox";
import { WithBackgroundImage } from "../utils/WithBackgroundImage";

interface FaqMainProps {
  className: string;
}

export function FaqMain({ className }: FaqMainProps) {
  return (
    <WithBackgroundImage
      className={classNames("bg-left-bottom w-screen min-h-screen h-screen", className)}
      imageUrl="/background/forest-1.jpg"
    >
      <div className="container flex justify-between">
        <FaqSelector />
        <FaqPolarfox />
      </div>
    </WithBackgroundImage>
  );
}
