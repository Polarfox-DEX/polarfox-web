import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { calcRem } from "../../utils/styles";
import Clock from "../svg/Clock";
import { DownArrow } from "../svg/DownArrow";

interface PrivateSaleInterfaceProps{
    className?: string;
    style?: string
}

export default function PrivateSaleInterface({className, style}: PrivateSaleInterfaceProps){

    const SYMBOL: string = "BNB"
    const DAILY_ALLOWANCE: number = 3
    const TOTAL_TO_BUY: number = 1000000
    
    const[dailySpend,setDailySpend] = useState(0.8)
    const[userBalance,setUserBalance] = useState(4.6)
    const[userBnbAllowance,setUserBnbAllowance] = useState(0.0)
    const[userUsdAllowance,setUsdAllowance] = useState(0.0)

    const[approved,setApproved] = useState(false)
    const[connected,setConnected] = useState(false)

    const[soldLeft,setSoldLeft] = useState(865432)
    const[participants,setParticipants] = useState(176)
    const[totalBnbSold,setTotalBnbSold] = useState(62.82)

    var userAllowanceChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUserBnbAllowance(parseFloat(event.currentTarget.value.replace(",",".")))
    }

    return(
        <div className={classNames(className)}>
            <div 
                className={classNames("flex px-8 bg-blue-gray text-white h-full items-center content-between", 
                "rounded-t-3xl")}   
                style={{
                    height: calcRem(90),
                    fontSize: calcRem(20)
                  }}
            >
                <div className="">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(soldLeft)}
                    <SideText>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(TOTAL_TO_BUY)} </SideText>
                </div>
                <Clock style={{ marginLeft: 'auto' }}/>
            </div>
            <div className="grid text-white py-4 px-8" style={{ gridTemplateColumns: '50% 50%' }}>
                <div>
                    <MainText>{participants}</MainText>
                    <SideText>participants</SideText>
                </div>
                <div>
                    <MainText>{totalBnbSold} {SYMBOL}</MainText>
                    <SideText>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(TOTAL_TO_BUY-soldLeft)}</SideText>
                </div>
            </div>

            <div 
                className="px-8"
                style={{
                    borderTopWidth: calcRem(1),
                    borderColor: "#FFFFFF"
                }}
            >
                <div
                    className="flex mt-4 justify-between"
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
                        {dailySpend} / {DAILY_ALLOWANCE} {SYMBOL}
                    </div>
                    </div>
                </div>
                <div
                    className="mt-7 bg-blue-gray rounded-3xl flex justify-between"
                    style={{
                    width: calcRem(369),
                    height: calcRem(87)
                    }}
                >
                    <div
                        className="m-6 font-semibold"
                        style={{ fontSize: calcRem(18) }}
                        >
                        <input
                            className="bg-blue-gray focus:outline-none"
                            style={{
                                width: calcRem(200)
                            }}
                            value={userBnbAllowance}
                            onChange={(event) => userAllowanceChange(event)}
                        ></input>
                        <SideText>= {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(userUsdAllowance)}</SideText>
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
                                marginRight: calcRem(10)
                            }}
                            >
                            MAX
                            </div>
                            <MainText className="mt-6">{SYMBOL}</MainText>
                        </div>
                        <SideText className="mt-2">Balance: {userBalance}</SideText>
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
                    Your total funds in this presale: 0.82 {SYMBOL}
                </div>
                <div className="mt-6 mb-6 flex">
                    <ActionButton isActive>Approve</ActionButton>
                    <ActionButton>Purchase</ActionButton>
                </div>
            </div>
        </div>
    )

}

interface MainTextProps {
    className?: string
    children: ReactNode
  }

function MainText({ className, children }: MainTextProps) {
    return (
      <div
        className={classNames('font-semibold', className)}
        style={{
          fontSize: calcRem(20),
          lineHeight: calcRem(23)
        }}
      >
        {children}
      </div>
    )
  }
  
  interface SideTextProps {
    className?: string
    children: ReactNode
  }
  
  function SideText({ className, children }: SideTextProps) {
    return (
      <div
        className={classNames('opacity-40', className)}
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14)
        }}
      >
        {children}
      </div>
    )
  }

  interface ActionButtonProps {
    isActive?: boolean
    children: ReactNode
  }
  
  function ActionButton({ isActive, children }: ActionButtonProps) {
    return (
      <div
        className={classNames(
          'bg-blue-light rounded-3xl mx-1 pt-3 font-semibold text-center',
          {
            'opacity-30': !isActive
          }
        )}
        style={{
          width: calcRem(178),
          height: calcRem(44),
          marginTop: calcRem(23),
          fontSize: calcRem(14),
          lineHeight: calcRem(16)
        }}
      >
        {children}
      </div>
    )
  }