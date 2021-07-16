import classNames from "classnames";
import { PresaleFaqTitle } from "./PresaleFaqTitle";
import { FaqContact } from "./FaqContact";
import { PresaleFaqQuestions } from "./PresaleFaqQuestions";
import { PropsSectionProps } from '../utils/PropsSectionProps'

export function PresaleFaq({ className }: PropsSectionProps) {
  return (
    <div className={classNames("container flex justify-between", className)}>
      <div>
        <PresaleFaqTitle />
        <FaqContact marginTop={440} />
      </div>
      <PresaleFaqQuestions className="pl-44" />
    </div>
  );
}
