import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../utils/styles";
import { ReactNode } from "react";
import { SectionProps } from "./utils/SectionProps";

export function PresaleHeader({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        "flex w-full absolute bg-blue text-white font-graphik justify-between",
        className
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
          <PresaleTimerBox>10d</PresaleTimerBox>
          <PresaleTimerBox>23h</PresaleTimerBox>
          <PresaleTimerBox>15m</PresaleTimerBox>
        </div>
        <div className="mx-12 self-center">
          <Link href="/presale">
            <a>
              <div style={{ height: calcRem(17), width: calcRem(17) }}>
                <img src="white-right-arrow.png" alt="➔" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface PresaleTimerBoxProps {
  children: ReactNode;
}

function PresaleTimerBox({ children }: PresaleTimerBoxProps) {
  return (
    <div
      className="border border-white rounded-lg border-opacity-25"
      style={{ width: calcRem(92), height: calcRem(72), fontSize: calcRem(28)}}
    >
      <div className="mt-4 text-center" >
        {children}
      </div>
    </div>
  );
}
