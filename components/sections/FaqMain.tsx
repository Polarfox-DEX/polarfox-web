import classNames from "classnames";
import { FaqSelector } from "./FaqSelector";
import { FaqPolarfox } from "./FaqPolarfox";

interface PropsSectionProps {
  className?: string;
}

export function FaqMain({ className }: PropsSectionProps) {
  return (
    <div className={classNames("flex justify-between", className)}>
      <FaqSelector />
      {/* TODO: Tried to add my-44 here, but it does not work. Why? */}
      <FaqPolarfox />
    </div>
  );
}
