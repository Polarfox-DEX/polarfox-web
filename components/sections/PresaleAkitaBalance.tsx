import classNames from "classnames";
import { calcRem } from "../../utils/styles";
import { PropsSectionProps } from '../utils/PropsSectionProps'

export function PresaleAkitaBalance({ className }: PropsSectionProps) {
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
          <div className="mx-4 my-9">
            <img src="akita.png" alt="akita" className="" />
          </div>
          <div>
            <div
              className="text-white opacity-40 my-7"
              style={{
                fontSize: calcRem(12),
              }}
            >
              Your AKITA balance to participate in the presale
            </div>
            <div className="text-white -my-5">100,200,300,400 / 100,000,000 AKITA</div>
          </div>
          <div className="ml-6 my-9">
            <img src="check.png" alt="✓" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
