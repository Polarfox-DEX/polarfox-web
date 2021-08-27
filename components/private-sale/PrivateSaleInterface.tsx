import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { calcRem } from "../../utils/styles";
import Clock from "../svg/Clock";
import { DownArrow } from "../svg/DownArrow";
import useWallet, { ChainId } from "../hooks/useWallet";

//const { abi } = require('../../polarfox-presale/artifacts/contracts/PolarfoxTokenSale.sol/PolarfoxTokenSale.json');
//const contractAddress = "0x1658FD1aaAB89292538Ff767824C596d24A02f23"

interface PrivateSaleInterfaceProps {
  className?: string;
  style?: string
}

export function PrivateSaleInterface({ className, style }: PrivateSaleInterfaceProps) {

  //régler pb de l'input
  //ajouter logique du champs adresse reciepient

  const SYMBOL: string = "BNB"
  const DAILY_ALLOWANCE: number = 3
  const TOTAL_TO_BUY: number = 1000000

  const [errorMessage, setErrorMessage] = useState("")

  const { web3, hasWallet, userBalance, connected, requestConnection } = useWallet(ChainId.BSC_TESTNET)

  const [userBnbAllowance, setUserBnbAllowance] = useState(0.0)
  const [userUsdAllowance, setUsdAllowance] = useState(0.0)
  const [userRecipientAddress, setUserRecipientAddress] = useState('')

  const [approved, setApproved] = useState(false)
  const [useMyAddress, setUseMyAddress] = useState(false)

  const [soldLeft, setSoldLeft] = useState(865432)
  const [participants, setParticipants] = useState(176)
  const [totalBnbSold, setTotalBnbSold] = useState(62.82)

  var userAllowanceChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserBnbAllowance(parseFloat(event.currentTarget.value.replace(",", ".")))
  }

  var setMaxUserAllowance = () => {
    if (connected) {
      setUserBnbAllowance(userBalance)
    }
  }

  var connectWallet = () => {
    requestConnection()
  }

  var approveContract = () => {
    alert('Contract approved')
    setApproved(true)
  }

  var purshase = () => {
    setErrorMessage("This is an error message")
  }

  return (
    <div
      className={classNames('border bg-blue rounded-3xl text-white', className)}
      style={{
        width: calcRem(439),
        height: calcRem(655)
      }}
    >
      <div
        className="border-blue bg-blue-gray rounded-t-3xl flex items-center justify-between px-8"
        style={{
          height: calcRem(90),
          fontSize: calcRem(20)
        }}
      >
        <div>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(soldLeft)}{' '}
          remaining
          <SideText>out of $1,000,000 worth of PFX</SideText>
        </div>
        <Clock />
      </div>
      <div className="grid text-white py-4 divide-y divide-white divide-opacity-12">
        <div
          className="flex px-8 space-x-32"
          style={{ lineHeight: calcRem(20) }}
        >
          <div>
            <MainText>{participants}</MainText>
            <SideText>participants</SideText>
          </div>
          <div>
            <MainText>
              {totalBnbSold} {SYMBOL}
            </MainText>
            <SideText>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(TOTAL_TO_BUY - soldLeft)}
            </SideText>
          </div>
        </div>
        <div className="mt-5.5 pt-2 px-8">
          <div
            className="flex mt-4 justify-between "
            style={{ lineHeight: calcRem(20) }}
          >
            <div className="flex items-center">
              <MainText>Buy</MainText>
              <DownArrow className="mx-3" />
            </div>
          </div>
          <div
            className={classNames("mt-7 bg-blue-gray rounded-3xl flex justify-between", { "border-2 border-red-error": errorMessage !== "" })}
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
              />
              <SideText>
                ={' '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(userUsdAllowance)}
              </SideText>
            </div>
            <div className="mr-6">
              <div className="flex justify-between">
                <div
                  className="bg-blue-light rounded-3xl font-semibold text-center hover:cursor-pointer"
                  style={{
                    width: calcRem(45),
                    height: calcRem(24),
                    marginTop: calcRem(23),
                    paddingTop: calcRem(5),
                    fontSize: calcRem(10),
                    marginRight: calcRem(10)
                  }}
                  onClick={() => setMaxUserAllowance()}
                >
                  MAX
                </div>
                <MainText className="mt-6">{SYMBOL}</MainText>
              </div>
              <SideText className="mt-2">
                Balance: {userBalance.toFixed(2)}
              </SideText>
            </div>
          </div>
          <div className="text-red-error mt-2" style={{ fontSize: calcRem(12) }}>
            {errorMessage && "Alert: " + errorMessage}
          </div>
          <div className="mt-6">
            <input
              className={classNames("bg-blue-gray focus:outline-none rounded-3xl px-6 disabled:opacity-40")}
              style={{
                width: calcRem(369),
                height: calcRem(45),
                fontSize: calcRem(12)
              }}
              value={userRecipientAddress}
              onChange={(event) =>
                setUserRecipientAddress(event.currentTarget.value)
              }
              placeholder="Receiving address..."
              disabled={useMyAddress}
            />
            <div
              className="mt-2 opacity-40 px-2"
              style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}
            >
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className=" checked:border-transparent"
                  onChange={(event) => setUseMyAddress(event.currentTarget.checked)}
                />
                <div>I want to send funds to my address</div>
              </div>
            </div>
          </div>
          <div className="mb-6 flex">
            {connected && <IsConnected />}
            {!connected && <ConnectButton hasWallet={hasWallet} />}
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
        </div>
      </div>
    </div>
  )

  function IsConnected() {
    return (
      <div className="flex">
        <ActionButton name="Approve" disabled={approved} click={approveContract} />
        <ActionButton name="Purchase" disabled={!approved} click={purshase} />
      </div>
    )
  }

  interface ConnectButton {
    hasWallet: boolean
  }

  function ConnectButton({ hasWallet }: ConnectButton) {
    return (
      <div
        className={classNames(
          'bg-blue-light w-full rounded-3xl mx-1 pt-3 font-semibold text-center hover:cursor-pointer'
        )}
        style={{
          height: calcRem(44),
          marginTop: calcRem(23),
          fontSize: calcRem(14),
          lineHeight: calcRem(16)
        }}
        onClick={() => connectWallet()}
      >
        {hasWallet ? 'Connect your wallet' : 'Install Metamask'}
      </div>
    )
  }
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
  name: string,
  disabled: boolean,
  click: () => void
}

function ActionButton({ name, disabled, click }: ActionButtonProps) {
  return (
    <button
      className={classNames("rounded-3xl mx-1 font-semibold text-center text-white bg-blue-light",
        disabled ? "opacity-40 hover:cursor-not-allowed" : 'hover:cursor-pointer'
      )}
      style={{
        width: calcRem(178),
        height: calcRem(44),
        marginTop: calcRem(23),
        fontSize: calcRem(14),
        lineHeight: calcRem(16)
      }}
      disabled={disabled}
      type="button"
      onClick={() => click()}
    >
      {name}
    </button>
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
