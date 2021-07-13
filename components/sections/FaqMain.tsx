import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqContact } from "./FaqContact";
import { FaqPolarfox } from "./FaqPolarfox";
import { WithBackgroundImage } from "../utils/WithBackgroundImage";

export function FaqMain() {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div className="container flex justify-between mt-64">
        <div>
          <FaqSelector />
          <FaqContact />
        </div>
        <FaqPolarfox />
      </div>
    </WithBackgroundImage>
  );
}
