import classNames from "classnames";
import { calcRem } from "../../utils/styles";
import { SectionProps } from "../utils/SectionProps";

export function PresaleAkitaBalance({ className }: SectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="border bg-blue rounded-3xl"
        style={{
          width: calcRem(439),
          height: calcRem(107),
        }}
      >
        <div className="flex">
          <img
            src="akita.png"
            alt="akita"
            className="mx-4 my-9"
            style={{ height: calcRem(36), width: calcRem(36) }}
          />
          <div>
            <div
              className="text-white opacity-40 my-7"
              style={{
                fontSize: calcRem(12),
              }}
            >
              Your AKITA balance to participate in the presale
            </div>
            <div className="text-white -my-5">
              100,200,300,400 / 100,000,000 AKITA
            </div>
          </div>
          <img
            src="check.png"
            alt="✓"
            className="ml-6 my-9"
            style={{ height: calcRem(29), width: calcRem(29) }}
          />
        </div>
      </div>
    </div>
  );
}
