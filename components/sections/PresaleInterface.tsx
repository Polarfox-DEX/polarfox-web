import classNames from "classnames";
import { calcRem } from "../../utils/styles";
import { SectionProps } from "../utils/SectionProps";
import { ReactNode } from "react";

export function PresaleInterface({ className }: SectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="border bg-blue rounded-3xl"
        style={{
          width: calcRem(439),
          height: calcRem(717),
        }}
      >
        <div
          className="border bg-blue-gray rounded-t-3xl"
          style={{
            width: calcRem(439),
            height: calcRem(128),
            marginLeft: calcRem(-1),
            marginTop: calcRem(-1),
            // TODO: can we improve this?
          }}
        >
          <div className="flex text-white h-full items-center space-x-7">
            <div
              className="flex space-x-5 ml-7"
              style={{ width: calcRem(312) }}
            >
              <PresaleTimerWindow>16h</PresaleTimerWindow>
              <PresaleTimerWindow>45m</PresaleTimerWindow>
              <PresaleTimerWindow>32s</PresaleTimerWindow>
            </div>
            <img
              src="clock.png"
              alt="clock"
              style={{ height: calcRem(31), width: calcRem(31) }}
            />
          </div>
        </div>
        <div className="text-white mt-7 divide-y divide-white divide-opacity-12">
          <div className="ml-8">
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
          <div className="mt-5.5">
            <div className="mt-7 mx-8">
              <div
                className="flex mt-8 justify-between"
                style={{ lineHeight: calcRem(20) }}
              >
                <div className="flex">
                  <MainText>Buy</MainText>
                  <img
                    src="white-down-arrow.png"
                    alt="↓"
                    className="mx-3 mt-0.5"
                    style={{ height: calcRem(17), width: calcRem(17) }}
                  />
                </div>
                <div className="mx-2">
                  <SideText className="">Your daily spend allowance</SideText>
                  <div
                    className="text-right"
                    style={{ fontSize: calcRem(14), lineHeight: calcRem(16) }}
                  >
                    0 / 1 ETH
                  </div>
                </div>
              </div>
              <div
                className="mt-7 bg-blue-gray rounded-3xl"
                style={{
                  width: calcRem(369),
                  height: calcRem(87),
                }}
              >
                <div className="flex justify-between">
                  <div
                    className="m-6 font-semibold"
                    style={{ fontSize: calcRem(18) }}
                  >
                    0.00
                  </div>
                  <div className="mr-6">
                    <div className="flex justify-between">
                      <div
                        className="bg-blue-light rounded-3xl"
                        style={{
                          width: calcRem(45),
                          height: calcRem(24),
                          marginTop: calcRem(23),
                        }}
                      >
                        <div
                          className="font-semibold text-center"
                          style={{
                            marginTop: calcRem(5),
                            fontSize: calcRem(10),
                          }}
                        >
                          MAX
                        </div>
                      </div>
                      <MainText className="mt-6">ETH</MainText>
                    </div>
                    <SideText className="mt-2">Balance: 2.24683</SideText>
                  </div>
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
      </div>
    </div>
  );
}

interface PresaleTimerWindowProps {
  className?: string;
  textClassName?: string;
  children: ReactNode;
}

function PresaleTimerWindow({
  className,
  textClassName,
  children,
}: PresaleTimerWindowProps) {
  return (
    <div
      className={classNames(
        "border border-white rounded-lg border-opacity-25 h-10",
        className
      )}
      style={{ width: calcRem(92), height: calcRem(72) }}
    >
      <div
        className={classNames("mt-4 text-center", textClassName)}
        style={{ fontSize: calcRem(28) }}
      >
        {children}
      </div>
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
        "rounded-3xl -mt-2",
        hasStarted && !isActive && "bg-blue-gray",
        isActive && "bg-white",
        className
      )}
      style={{
        width: calcRem(52),
        height: calcRem(41),
      }}
    >
      <div
        className={classNames(
          "font-semibold mt-3 text-center",
          isActive && "text-blue",
          !hasStarted && "opacity-30"
        )}
        style={{
          fontSize: calcRem(14),
          lineHeight: calcRem(16),
        }}
      >
        {children}
      </div>
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
        "bg-blue-light rounded-3xl mx-1",
        !isActive && "opacity-30"
      )}
      style={{
        width: calcRem(178),
        height: calcRem(44),
        marginTop: calcRem(23),
      }}
    >
      <div
        className="mt-3 font-semibold text-center"
        style={{ fontSize: calcRem(14), lineHeight: calcRem(16) }}
      >
        {children}
      </div>
    </div>
  );
}
