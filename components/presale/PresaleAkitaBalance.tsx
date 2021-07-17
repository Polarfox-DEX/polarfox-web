import classNames from "classnames";
import Check from "../svg/Check"
import { calcRem } from "../../utils/styles";
import { SectionProps } from "../utils/SectionProps";

export function PresaleAkitaBalance({ className }: SectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="border bg-blue rounded-3xl flex items-center"
        style={{
          width: calcRem(439),
          height: calcRem(107),
        }}
      >
        <img
          src="akita.png"
          alt="akita"
          className="mx-4"
          style={{ height: calcRem(36), width: calcRem(36) }}
        />
        <div>
          <div
            className="text-white opacity-40"
            style={{
              fontSize: calcRem(12),
            }}
          >
            Your AKITA balance to participate in the presale
          </div>
          <div className="text-white">100,200,300,400 / 100,000,000 AKITA</div>
        </div>
        <Check className="ml-6" />
      </div>
    </div>
  );
}
