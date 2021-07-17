import classNames from "classnames";
import Clock from "../svg/Clock"
import DownArrow from "../svg/DownArrow"
import { calcRem } from "../../utils/styles";
import { SectionProps } from "../utils/SectionProps";
import { ReactNode } from "react";

export function PresaleInterface({ className }: SectionProps) {
  return (
    <div
      className={classNames("border bg-blue rounded-3xl", className)}
      style={{
        width: calcRem(439),
        height: calcRem(717),
      }}
    >
      <div
        className="border bg-blue-gray rounded-t-3xl w-full"
        style={{
          height: calcRem(128),
        }}
      >
        <div className="flex text-white h-full items-center space-x-7">
          <div className="flex space-x-5 ml-7" style={{ width: calcRem(312) }}>
            <PresaleTimerWindow>16h</PresaleTimerWindow>
            <PresaleTimerWindow>45m</PresaleTimerWindow>
            <PresaleTimerWindow>32s</PresaleTimerWindow>
          </div>
          <Clock />
        </div>
      </div>
      <div className="text-white mt-7 divide-y divide-white divide-opacity-12">
        <div className="pl-8">
          <div className="flex">
            <MainText>
              <span>DAY 2</span>
              <span className="opacity-30">/3</span>
            </MainText>
            <div className="ml-28 flex space-x-1.5">
              <DayButton hasStarted>D1</DayButton>
              <DayButton hasStarted isActive>
                D2
              </DayButton>
              <DayButton>D3</DayButton>
            </div>
          </div>
          <div className="flex mt-8" style={{ lineHeight: calcRem(20) }}>
            <div>
              <MainText>167</MainText>
              <SideText>participants</SideText>
            </div>
            <div className="ml-32">
              <MainText>62.82 ETH</MainText>
              <SideText>$120,280.82</SideText>
            </div>
          </div>
        </div>
        <div className="mt-5.5 pt-2 px-8">
          <div
            className="flex mt-8 justify-between"
            style={{ lineHeight: calcRem(20) }}
          >
            <div className="flex items-center">
              <MainText>Buy</MainText>
              <DownArrow className="mx-3" />
            </div>
            <div className="mx-2">
              <SideText>Your daily spend allowance</SideText>
              <div
                className="text-right"
                style={{ fontSize: calcRem(14), lineHeight: calcRem(16) }}
              >
                0 / 1 ETH
              </div>
            </div>
          </div>
          <div
            className="mt-7 bg-blue-gray rounded-3xl flex justify-between"
            style={{
              width: calcRem(369),
              height: calcRem(87),
            }}
          >
            <div
              className="m-6 font-semibold"
              style={{ fontSize: calcRem(18) }}
            >
              0.00
            </div>
            <div className="mr-6">
              <div className="flex justify-between">
                <div
                  className="bg-blue-light rounded-3xl font-semibold text-center"
                  style={{
                    width: calcRem(45),
                    height: calcRem(24),
                    marginTop: calcRem(23),
                    paddingTop: calcRem(5),
                    fontSize: calcRem(10),
                  }}
                >
                  MAX
                </div>
                <MainText className="mt-6">ETH</MainText>
              </div>
              <SideText className="mt-2">Balance: 2.24683</SideText>
            </div>
          </div>
          <div
            className="mt-6 opacity-40 text-center"
            style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}
          >
            <span className="font-bold">NOTE: </span>
            Your tokens will be locked in the contract until the presale has
            ended. You will be able to claim them after the presale.
          </div>
          <div
            className="mt-6 font-bold text-center"
            style={{ fontSize: calcRem(14), lineHeight: calcRem(18) }}
          >
            Your total funds in this presale: 0.82 ETH
          </div>
          <div className="mt-6 flex">
            <ActionButton isActive>Approve</ActionButton>
            <ActionButton>Purchase</ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PresaleTimerWindowProps {
  className?: string;
  children: ReactNode;
}

function PresaleTimerWindow({ className, children }: PresaleTimerWindowProps) {
  return (
    <div
      className={classNames(
        "border border-white rounded-lg border-opacity-25 h-10 pt-4 text-center",
        className
      )}
      style={{ width: calcRem(92), height: calcRem(72), fontSize: calcRem(28) }}
    >
      {children}
    </div>
  );
}

interface MainTextProps {
  className?: string;
  children: ReactNode;
}

function MainText({ className, children }: MainTextProps) {
  return (
    <div
      className={classNames("font-semibold", className)}
      style={{
        fontSize: calcRem(20),
        lineHeight: calcRem(23),
      }}
    >
      {children}
    </div>
  );
}

interface SideTextProps {
  className?: string;
  children: ReactNode;
}

function SideText({ className, children }: SideTextProps) {
  return (
    <div
      className={classNames("opacity-40", className)}
      style={{
        fontSize: calcRem(12),
        lineHeight: calcRem(14),
      }}
    >
      {children}
    </div>
  );
}

interface DayButtonProps {
  className?: string;
  isActive?: boolean;
  hasStarted?: boolean;
  children: ReactNode;
}

function DayButton({
  className,
  isActive,
  hasStarted,
  children,
}: DayButtonProps) {
  return (
    <div
      className={classNames(
        "rounded-3xl -mt-2 font-semibold text-center pt-3",
        { "bg-blue-gray": hasStarted && !isActive },
        { "bg-white": isActive },
        { "text-blue": isActive },
        { "opacity-30": !hasStarted },

        className
      )}
      style={{
        width: calcRem(52),
        height: calcRem(41),
        fontSize: calcRem(14),
        lineHeight: calcRem(16),
      }}
    >
      {children}
    </div>
  );
}

interface ActionButtonProps {
  isActive?: boolean;
  children: ReactNode;
}

function ActionButton({ isActive, children }: ActionButtonProps) {
  return (
    <div
      className={classNames(
        "bg-blue-light rounded-3xl mx-1 pt-3 font-semibold text-center",
        {
          "opacity-30": !isActive,
        }
      )}
      style={{
        width: calcRem(178),
        height: calcRem(44),
        marginTop: calcRem(23),
        fontSize: calcRem(14),
        lineHeight: calcRem(16),
      }}
    >
      {children}
    </div>
  );
}
