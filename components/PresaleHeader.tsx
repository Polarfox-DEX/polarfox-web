import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../utils/styles";
import { ReactNode } from "react";
import { PropsSectionProps } from './utils/PropsSectionProps'

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
        <PresaleTimerWindow>10d</PresaleTimerWindow>
        <PresaleTimerWindow>23h</PresaleTimerWindow>
        <PresaleTimerWindow>15m</PresaleTimerWindow>
      </div>
      <div className="mt-12 px-14">
        <Link href="/presale">
          <a>
            <img src="white-right-arrow.png" alt="➔" />
          </a>
        </Link>
      </div>
    </div>
  );
}

interface PresaleTimerWindowProps {
  children: ReactNode;
}

function PresaleTimerWindow({ children }: PresaleTimerWindowProps) {
  return (
    <div
      className="border border-white rounded-lg border-opacity-25 h-10"
      style={{ width: calcRem(92), height: calcRem(72) }}
    >
      <div className="mt-4 text-center" style={{ fontSize: calcRem(28) }}>
        {children}
      </div>
    </div>
  );
}
