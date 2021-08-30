import React, { ReactNode, useEffect, useState } from 'react'
import Web3 from 'web3'

// TODO: Implement "wrong network"
// TODO: BSC mainnet crashes
// TODO: When changing accounts, the value "your total funds in this presale" does not get updated

// Front-end
import classNames from 'classnames'
import Clock from '../svg/Clock'
import { calcRem } from '../../utils/styles'
import { Check } from '../svg/Check'
import { DownArrow } from '../svg/DownArrow'
import { SectionProps } from '../sections/utils/SectionProps'

// Back-end
import { useWallet } from '../../hooks/useWallet'
import { usePrivateSale } from '../../hooks/usePrivateSale'

export function PrivateSaleInterface({ className }: SectionProps) {
  const SYMBOL: string = 'BNB'

  const { hasWallet, connected, accounts, balance, requestConnection, gasPrice } = useWallet()
  const { correctNetwork, currentBnbPrice, isWhitelisted, remaining, boughtAmount, buyTokens } = usePrivateSale()

  const [errorMessage, setErrorMessage] = useState<string>('')

  const [userBnbAllowance, setUserBnbAllowance] = useState<string>('0')
  const [userUsdAllowance, setUserUsdAllowance] = useState<number>(0.0)
  const [userRecipientAddress, setUserRecipientAddress] = useState<string>('')
  const [useMyAddress, setUseMyAddress] = useState<boolean>(false)

  const [approved, setApproved] = useState<boolean>(false)

  const [participants, setParticipants] = useState<number>(176)
  const [totalBnbSold, setTotalBnbSold] = useState<number>(62.82)

  var userAllowanceChange = (value: string) => {
    setUserBnbAllowance(value.replace(',', '.'))
    setUserUsdAllowance(parseFloat(value) * currentBnbPrice)

    // TODO: Refactor
    if (value == '' || value == '0') {
      setErrorMessage('Cannot buy 0 PFX')
    } else {
      setErrorMessage('')
    }
  }

  var setMaxUserAllowance = () => {
    if (connected) {
      const max = balance ? (balance - parseFloat(Web3.utils.fromWei(gasPrice))).toString() : '0'
      setUserBnbAllowance(max)
      userAllowanceChange(max)
    }
  }

  return (
    <div className={classNames('sale-modal bg-blue tablet:rounded-3xl text-white w-full bg-stretch pb-8', className)}>
      <div
        className="sale-modal container border-blue bg-blue-gray tablet:rounded-t-3xl flex items-center justify-between px-8"
        style={{
          height: calcRem(90),
          fontSize: calcRem(20)
        }}
      >
        <div>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(remaining)}{' '}
          remaining
          <SideText>out of $1,000,000 worth of PFX</SideText>
        </div>
        <Clock />
      </div>
      <div className="sale-modal text-white py-4 divide-y divide-white divide-opacity-12">
        <div className="container tablet:px-8 pb-8">
          <div className="flex mt-4 items-center">
            <MainText>Buy</MainText>
            <DownArrow className="mx-3" />
          </div>
          <div
            className={classNames(' mt-7 bg-blue-gray rounded-xl flex justify-between items-center p-6', {
              'border-2 border-red-error': errorMessage !== ''
            })}
            style={{
              height: calcRem(87)
            }}
          >
            <div className="font-semibold" style={{ fontSize: calcRem(18) }}>
              <input
                className="bg-blue-gray focus:outline-none w-full"
                value={userBnbAllowance}
                // TODO: Should display "Insufficient funds" when the amount is too high.
                // TODO: When the amount is empty, it should act as if it was 0
                onChange={(event) => userAllowanceChange(event.currentTarget.value)}
              />
              <SideText>
                {'= '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                  // TODO: When connecting a wallet, if a user has already put a BNB amount, the USD amount should display properly.
                }).format(userUsdAllowance)}
              </SideText>
            </div>
            <div className="mt-1">
              <div className="flex justify-between">
                <div
                  className="bg-blue-light rounded-3xl font-semibold text-center hover:cursor-pointer hover:bg-white hover:text-blue-light"
                  style={{
                    width: calcRem(45),
                    height: calcRem(24),
                    paddingTop: calcRem(5),
                    fontSize: calcRem(10),
                    marginRight: calcRem(10)
                  }}
                  onClick={() => setMaxUserAllowance()}
                >
                  MAX
                </div>
                <MainText>{SYMBOL}</MainText>
              </div>
              <SideText className="mt-2">Balance: {balance ? balance.toFixed(2) : '0.00'}</SideText>
            </div>
          </div>
          <div className="text-red-error mt-2" style={{ fontSize: calcRem(12) }}>
            {errorMessage}
          </div>
          <div className="text-center my-2 opacity-40" style={{ fontSize: calcRem(12) }}>
            You will get
          </div>
          <div className={classNames('bg-blue-gray rounded-xl flex justify-between items-center p-6')}>
            {new Intl.NumberFormat('en-US').format(userUsdAllowance)}
            <MainText>PFX</MainText>
          </div>
        </div>
        <div className="px-8 pt-2">
          <MainText className="flex mt-4 items-center">Destination address</MainText>
          <SideText className="mt-2 opacity-95">
            Make sure to use a <span className="font-bold text-red-error">MetaMask</span> address.
          </SideText>
          <div className="mt-4">
            <input
              className={classNames('bg-blue-gray focus:outline-none rounded-xl px-6 disabled:opacity-40 w-full')}
              style={{
                height: calcRem(45),
                fontSize: calcRem(12)
              }}
              value={userRecipientAddress}
              onChange={(event) => setUserRecipientAddress(event.currentTarget.value)}
              placeholder="Please enter the receiving address"
              disabled={useMyAddress}
            />
            <div className="mt-4 px-2" style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}>
              <div className="flex items-center space-x-2.5 ">
                <div
                  className="border-2 rounded-md border-white border-opacity-30 flex justify-center items-center hover:border-blue-light hover:border-opacity-70"
                  style={{ width: calcRem(22), height: calcRem(22) }}
                >
                  <input
                    type="checkbox"
                    className="opacity-0 absolute"
                    style={{ width: calcRem(22), height: calcRem(22) }}
                    onChange={(event) => setUseMyAddress(event.currentTarget.checked)}
                  />
                  <Check
                    className={classNames(useMyAddress ? 'flex' : 'hidden')}
                    style={{ width: calcRem(12), height: calcRem(12) }}
                  />
                </div>
                <div>Send funds to the currently connected address</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 mt-4">
          <div className="mb-6 flex">
            {!correctNetwork && <WrongNetworkButton />}
            {correctNetwork && connected && <PurchaseButton />}
            {correctNetwork && !connected && <ConnectButton />}
          </div>
          <div className="text-red-error mt-2" style={{ fontSize: calcRem(12) }}>
            {/* // TODO: The below displays "your address is not whitelisted" for half a second when you log in. Fix this */}
            {/* // TODO: When changing accounts, the error "your address is not whitelisted" needs to change */}
            {connected && !isWhitelisted && correctNetwork && 'Error: Your address is not whitelisted'}
          </div>
          <div className="mt-6 opacity-40 text-center" style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}>
            <span className="font-bold">NOTE: </span>
            You will start receiving your tokens after the ICO has ended. Since you are participating at a low price,
            most of your tokens will be vested over time and not given to you at once.
          </div>
          <div className="mt-6 font-bold text-center" style={{ fontSize: calcRem(14), lineHeight: calcRem(18) }}>
            Your total funds in this private sale:{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(boughtAmount)}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          .sale-modal {
            width: ${calcRem(439)};
          }
        }
      `}</style>
    </div>
  )

  function PurchaseButton() {
    return (
      <ActionButton
        name="Purchase"
        disabled={!isWhitelisted || userBnbAllowance == '0' || !(useMyAddress && userRecipientAddress === '')}
        click={() => buyTokens(userBnbAllowance, useMyAddress ? accounts[0] : userRecipientAddress)}
        // TODO: While the transaction is going, we should write a "please wait" button
        // TODO: When the transaction is done, should we reset the other fields to 0?
      />
    )
  }

  interface ConnectButton {
    hasWallet: boolean
  }

  function ConnectButton() {
    return (
      <button
        className={classNames(
          'flex items-center justify-center bg-blue-light w-full rounded-3xl mx-1 font-semibold text-center hover:cursor-pointer hover:bg-white hover:text-blue-light'
        )}
        style={{
          height: calcRem(44),
          marginTop: calcRem(23),
          fontSize: calcRem(14),
          lineHeight: calcRem(16)
        }}
        onClick={() => requestConnection()}
        // TODO: When hasWallet is false, "Install Metamask" should redirect to the MetaMask website
      >
        {typeof window === 'undefined' || hasWallet ? 'Connect your wallet' : 'Install Metamask'}
      </button>
    )
  }
}

function WrongNetworkButton() {
  return <ActionButton name="Wrong network - please switch to BSC" disabled={true} click={() => {}} isError />
}

interface ActionButtonProps {
  name: string
  disabled: boolean
  click: () => void
  isError?: boolean
}

function ActionButton({ name, disabled, click, isError }: ActionButtonProps) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center w-full rounded-3xl mx-1 font-semibold text-white bg-blue-light hover:cursor-pointer',
        'disabled:opacity-40 disabled:hover:cursor-not-allowed',
        'hover:bg-white hover:text-blue-light disabled:hover:bg-blue-light disabled:hover:text-white',
        { 'bg-red-error text-white disabled:opacity-100 disabled:hover:bg-red-error': isError }
      )}
      style={{
        height: calcRem(44),
        marginTop: calcRem(23),
        fontSize: calcRem(14),
        lineHeight: calcRem(16)
      }}
      onClick={() => click()}
      disabled={disabled}
    >
      {name}
    </button>
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
