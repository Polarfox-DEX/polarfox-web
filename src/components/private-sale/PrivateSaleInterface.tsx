import React, { ReactNode, useEffect, useState } from 'react'
import Web3 from 'web3'

// Front-end
import classNames from 'classnames'
import Clock from '../svg/Clock'
import { calcRem } from '../../utils/styles'
import { Check } from '../svg/Check'
import { DownArrow } from '../svg/DownArrow'
import { METAMASK_LINK } from '../const/links'
import { SectionProps } from '../sections/utils/SectionProps'

// Back-end
import { useWallet } from '../../hooks/useWallet'
import { usePrivateSale } from '../../hooks/usePrivateSale'
import useNumberValue from '../../hooks/useNumberValue'


export function PrivateSaleInterface({ className }: SectionProps) {
  const SYMBOL: string = 'BNB'

  const { hasWallet, connected, accounts, balance, chainId, requestConnection, gasPrice } = useWallet()
  const { correctNetwork, currentBnbPrice, isWhitelisted, remaining, boughtAmount, buyTokens, setJustBought } =
    usePrivateSale()

  const [isInvalidAddress, setIsInvalidAddress] = useState<boolean>(false)
  const [errorInput, setErrorInput] = useState<string>('')
  const [buySuccessfulMessage, setBuySuccessfulMessage] = useState<string>('')
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false)

  const [userUsdAllowance, setUserUsdAllowance] = useState<number>(0.0)
  const [userRecipientAddress, setUserRecipientAddress] = useState<string>('')
  const [useMyAddress, setUseMyAddress] = useState<boolean>(false)

  const [userBnbAllowance,userAllowanceChange,allowanceErrorMessage] = useNumberValue()

  const onUserAllowanceChange = (value: string) => {

    userAllowanceChange(value)
      .then(() => {
        setUserUsdAllowance(parseFloat(userBnbAllowance) * currentBnbPrice)
      })
      .catch()
  }

  useEffect(() => {
    // If there are not enough PFX left to sell, write an error message
    if (balance && connected && userUsdAllowance > remaining) {
      setErrorInput('Not enough PFX to sell.')
    }
    // If the allowance is higher than the user balance, write an error message
    else if (balance && connected && parseFloat(userBnbAllowance) > balance) {
      setErrorInput('Insufficent funds.')
    }
    // Clear the error message if needed
    else if (errorInput || !connected) {
      setErrorInput('')
    }
  }, [connected, balance, errorInput, userBnbAllowance, userUsdAllowance, remaining])

  const setMaxUserAllowance = () => {
    if (connected) {
      const max = balance ? (balance - 2 * parseFloat(Web3.utils.fromWei(gasPrice))).toString() : '0'
      onUserAllowanceChange(max)
    }
  }

  var onUserRecipientAddressChange = (address: string) => {
    if (address != '') {
      setUserRecipientAddress(address)
      const regex = new RegExp('^0x[a-fA-F0-9]{40}$')
      setIsInvalidAddress(!regex.test(address))
    } else {
      setIsInvalidAddress(false)
      setUserRecipientAddress('')
    }
  }

  var resetUIToDefault = () => {
    onUserAllowanceChange('0')
    setUserUsdAllowance(0.0)
    setPurchaseLoading(false)
  }

  const purchase = () => {
    setPurchaseLoading(true)

    buyTokens(userBnbAllowance, useMyAddress ? accounts[0] : userRecipientAddress).then((success: boolean) => {
      // Transaction is successful, show a confirmation message then reset the interface to default
      if (success) {
        setBuySuccessfulMessage(
          'Successfuly bought ' + new Intl.NumberFormat('en-US').format(userUsdAllowance) + ' PFX!'
        )
        resetUIToDefault()
      }
      // The transaction was not successful
      else {
        setPurchaseLoading(false)
      }

      // Recalculate the values displayed on the UI
      setJustBought(true)
    })
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
              'border-2 border-red-error': errorInput || allowanceErrorMessage
            })}
            style={{
              height: calcRem(87)
            }}
          >
            <div className="font-semibold truncate" style={{ fontSize: calcRem(18) }}>
              <input
                className="bg-blue-gray focus:outline-none w-full"
                value={userBnbAllowance}
                onChange={(event) => onUserAllowanceChange(event.currentTarget.value)}
              />
              <SideText className="truncate">
                {'= '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(userUsdAllowance)}
              </SideText>
            </div>
            <div className="mt-1 pl-2">
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
            {errorInput}
            {allowanceErrorMessage}
          </div>
          <div className="text-center my-2 opacity-40" style={{ fontSize: calcRem(12) }}>
            You will get
          </div>
          <div className={classNames('bg-blue-gray rounded-xl flex justify-between items-center p-6')}>
            <div className="truncate">{new Intl.NumberFormat('en-US').format(userUsdAllowance)}</div>
            <MainText className="pl-2">PFX</MainText>
          </div>
        </div>
        <div className="px-8 pt-2">
          <MainText className="flex mt-4 items-center">Destination address</MainText>
          <SideText className="mt-2 opacity-95">
            Make sure to use a <span className="font-bold text-red-error">MetaMask</span> address.
          </SideText>
          <div className="mt-4">
            <input
              className={classNames('bg-blue-gray focus:outline-none rounded-xl px-6 disabled:opacity-40 w-full', {
                'border-2 border-red-error': isInvalidAddress
              })}
              style={{
                height: calcRem(45),
                fontSize: calcRem(12)
              }}
              value={userRecipientAddress}
              onChange={(event) => onUserRecipientAddressChange(event.currentTarget.value)}
              placeholder="Please enter the receiving address"
              disabled={useMyAddress}
            />
            <div className="text-red-error mt-3" style={{ fontSize: calcRem(12) }}>
              {isInvalidAddress && 'Invalid address format.'}
            </div>
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
            {connected && chainId && (correctNetwork ? <PurchaseButton /> : <WrongNetworkButton />)}
            {(!connected || !chainId) && <ConnectButton />}
          </div>
          <div className="mt-2" style={{ fontSize: calcRem(12) }}>
            <div className="text-red-error">
              {connected && !isWhitelisted && correctNetwork && 'Error: Your address is not whitelisted'}
            </div>
            <div className="text-green-successful">{buySuccessfulMessage}</div>
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
        disabled={
          !isWhitelisted ||
          userBnbAllowance === '0' ||
          (!useMyAddress && userRecipientAddress === '') ||
          isInvalidAddress ||
          allowanceErrorMessage !== '' ||
          errorInput !== ''
        }
        click={() => purchase()}
      >
        {!purchaseLoading && 'Purchase'}
        {purchaseLoading && 'Please wait...'}
      </ActionButton>
    )
  }

  interface ConnectButton {
    hasWallet: boolean
  }

  function ConnectButton() {
    const buttonClassName =
      'flex items-center justify-center bg-blue-light w-full rounded-3xl mx-1 font-semibold text-center hover:cursor-pointer hover:bg-white hover:text-blue-light'
    const buttonStyle = {
      height: calcRem(44),
      marginTop: calcRem(23),
      fontSize: calcRem(14),
      lineHeight: calcRem(16)
    }

    return typeof window === 'undefined' || hasWallet ? (
      <button className={buttonClassName} style={buttonStyle} onClick={() => requestConnection()}>
        Connect your wallet
      </button>
    ) : (
      <a className={buttonClassName} style={buttonStyle} href={METAMASK_LINK} target="_blank" rel="noopener noreferrer">
        Install MetaMask
      </a>
    )
  }
}

function WrongNetworkButton() {
  return (
    <ActionButton disabled={true} click={() => {}} isError>
      Wrong network - please switch to BSC
    </ActionButton>
  )
}

interface ActionButtonProps {
  children: ReactNode
  disabled: boolean
  click: () => void
  isError?: boolean
}

function ActionButton({ children, disabled, click, isError }: ActionButtonProps) {
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
      {children}
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
