import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../utils/styles";
import { ReactNode } from "react";
import { PropsSectionProps } from "./utils/PropsSectionProps";

export function PresaleHeader({ className }: PropsSectionProps) {
  return (
    <div
      className={classNames(
        className,
        "flex w-full absolute bg-blue text-white font-graphik justify-between"
      )}
      style={{ height: calcRem(114) }}
    >
      <div
        className="self-center ml-16"
        style={{ fontSize: calcRem(18), width: calcRem(334) }}
      >
        PFX presale starts on 43rd July 2021
      </div>
      <div className="flex">
        <div
          className="container flex justify-between items-center space-x-5 mx-24"
          style={{ width: calcRem(312) }}
        >
          <PresaleTimerWindow>10d</PresaleTimerWindow>
          <PresaleTimerWindow>23h</PresaleTimerWindow>
          <PresaleTimerWindow>15m</PresaleTimerWindow>
        </div>
        <div className="mx-12 self-center">
          <Link href="/presale">
            <a>
              <div style={{ height: calcRem(17), width: calcRem(17) }}>
                <img src="white-right-arrow.png" alt="➔" className="" />
              </div>
            </a>
          </Link>
        </div>
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
