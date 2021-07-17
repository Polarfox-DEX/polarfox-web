import classNames from "classnames";
import { PresaleDescription } from "./PresaleDescription";
import { PresaleAkitaBalance } from "./PresaleAkitaBalance";
import { PresaleInterface } from "./PresaleInterface";
import { WithBackgroundImage } from "../utils/WithBackgroundImage";
import { SectionProps } from '../utils/SectionProps'

export function PresaleMain({ className }: SectionProps) {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div className={classNames("container flex justify-between", className)}>
        <PresaleDescription />
        <div>
          <PresaleAkitaBalance />
          <PresaleInterface className="mt-2" />
        </div>
      </div>
    </WithBackgroundImage>
  );
}
