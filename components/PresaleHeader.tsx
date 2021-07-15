import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../utils/styles";

interface PropsSectionProps {
  className?: string;
}

export function PresaleHeader({ className }: PropsSectionProps) {
  return (
    <div
      className={classNames(
        className,
        "flex justify-between w-full absolute bg-blue text-white font-graphik"
      )}
      style={{ height: calcRem(114) }}
    >
      <div className="mt-12 px-28" style={{ fontSize: calcRem(18) }}>
        PFX presale starts on 43rd July 2021
      </div>
      <div
        className="container flex justify-between mt-5"
        style={{ width: calcRem(312), marginLeft: calcRem(700) }}
        // TODO: is there a better way than "marginLeft: calcRem(700)?"
      >
        <PresaleTimerWindow title="10d" />
        <PresaleTimerWindow title="23h" />
        <PresaleTimerWindow title="15m" />
      </div>
      <div className="mt-12 px-14">
        <Link href="/presale">
          <a>
            <img src="white-arrow.png" alt="➔" />
          </a>
        </Link>
      </div>
    </div>
  );
}

interface PresaleTimerWindowProps {
  title: String;
}

function PresaleTimerWindow({ title }: PresaleTimerWindowProps) {
  return (
    <div
      className="border border-white rounded-lg border-opacity-25 h-10"
      style={{ width: calcRem(92), height: calcRem(72) }}
    >
      <div className="mt-4 ml-5" style={{ fontSize: calcRem(28) }}>
        {title}
      </div>
    </div>
  );
}
