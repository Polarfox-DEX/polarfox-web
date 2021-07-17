import classNames from "classnames";
import { PresaleFaqTitle } from "./PresaleFaqTitle";
import { FaqContact } from "../faq/FaqContact";
import { PresaleFaqQuestions } from "./PresaleFaqQuestions";
import { SectionProps } from '../utils/SectionProps'

export function PresaleFaq({ className }: SectionProps) {
  return (
    <div className={classNames("container flex flex-col", className)}>
      <div className="flex justify-around">
        <PresaleFaqTitle />
        <PresaleFaqQuestions />
      </div>
        <FaqContact />
    </div>
  );
}
