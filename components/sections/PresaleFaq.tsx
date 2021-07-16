import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqContact } from "./FaqContact";
import { FaqPolarfox } from "./FaqPolarfox";
import { PropsSectionProps } from '../utils/PropsSectionProps'

export function PresaleFaq({ className }: PropsSectionProps) {
  return (
    <div className={classNames("container flex justify-between", className)}>
      <div>
        <FaqSelector />
        <FaqContact className="mt-44" />
      </div>
      <FaqPolarfox className="pl-44" />
    </div>
  );
}
