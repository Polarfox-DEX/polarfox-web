import React, { ReactNode, useEffect, useState } from 'react'

// Front-end
import classNames from 'classnames'
import Clock from '../svg/Clock'
import { calcRem } from '../../utils/styles'
import { Check } from '../svg/Check'
import { DownArrow } from '../svg/DownArrow'
import { SectionProps } from '../sections/utils/SectionProps'

// Back-end
// import Web3 from 'web3'
// import { ChainId } from '../../blockchain/const'
// import { PRIVATE_SALE_ADDRESS, privateSale } from '../../blockchain/contracts/privateSale'
// import { web3 } from '../../blockchain/web3'
import { useWallet } from '../../hooks/useWallet'
import { usePrivateSale } from '../../hooks/usePrivateSale'

// let window_: any
// let privateSaleContract: any
// let web3: Web3

export function PrivateSaleInterface({ className }: SectionProps) {
  const SYMBOL: string = 'BNB'
  // const TOTAL_TO_BUY: number = 1000000

  const { hasWallet, connected, accounts, requestConnection } = useWallet()
  const { currentBnbPrice, isWhitelisted, buyTokens } = usePrivateSale()

  const [errorMessage, setErrorMessage] = useState<string>('')
  const [userBalance, setUserBalance] = useState<number>(0.0)
  // const [connected, setConnected] = useState(false)
  // const [accounts, setAccounts] = useState<string[]>([])
  // const [hasWallet, setHasWallet] = useState(false)

  const [userBnbAllowance, setUserBnbAllowance] = useState<string>('0')
  const [userUsdAllowance, setUserUsdAllowance] = useState<number>(0.0)
  const [userPfxAllowance, setUserPfxAllowance] = useState<number>(0.0) // TODO: Same as USD allowance, this can be deleted
  const [userRecipientAddress, setUserRecipientAddress] = useState<string>('')
  const [useOtherAddress, setUseOtherAddress] = useState<boolean>(false)

  const [approved, setApproved] = useState<boolean>(false)
  // const [isWhitelisted, setWhitelisted] = useState<boolean>(true)

  // const [currentBnbPrice, setCurrentBnbPrice] = useState<number>(0.0)
  const [soldLeft, setSoldLeft] = useState<number>(865432)
  const [participants, setParticipants] = useState<number>(176)
  const [totalBnbSold, setTotalBnbSold] = useState<number>(62.82)

  // var initializePrivateSaleContract = (accounts: string[]) => {
  //   // Access the private sale contract
  //   privateSaleContract = new web3.eth.Contract(abi, contractAddress)

  //   // Get the current BNB price from the contract
  //   privateSaleContract.methods
  //     .currentBnbPrice()
  //     .call()
  //     .then((bnbPrice: number) => setCurrentBnbPrice(bnbPrice))

  //   // See if the currently connected account is whitelisted
  //   privateSaleContract.methods
  //     .isWhitelisted(accounts[0])
  //     .call()
  //     .then((isWhitelisted: boolean) => setWhitelisted(isWhitelisted))
  // }

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
      setUserBnbAllowance(userBalance.toString())
      userAllowanceChange(userBalance.toString())
    }
  }

  // var connectWallet = async () => {
  // if (hasWallet) {
  //   web3 = new Web3(window_.ethereum)

  //   //Verify user is connected to right network
  //   await window_.ethereum
  //     .request({ method: 'eth_chainId' })
  //     .then(async (chainId: any) => {
  //       if (web3?.utils.hexToNumber(chainId) == ChainId.BSC_TESTNET) {
  //         await window_.ethereum
  //           .request({ method: 'eth_requestAccounts' })
  //           .then(async (accounts: string[]) => {
  //             setAccounts(accounts)
  //             setConnected(true)

  // initializePrivateSaleContract(accounts)

  //               await window_.ethereum
  //                 .request({ method: 'eth_getBalance', params: [accounts[0]] })
  //                 .then((balance: any) => {
  //                   setUserBalance(parseFloat(web3.utils.fromWei(balance)))
  //                 })
  //                 .catch(console.log)
  //             })
  //             .catch(console.log)
  //         }
  //       })
  //       .catch(console.log)
  //   }
  // }

  // var approveContract = () => {
  //   alert('Contract approved')
  //   setApproved(true)
  // }

  // var purchase = () => {
  // if (web3 != undefined && isWhitelisted) {
  // const amountInWei = web3.utils.toWei(userBnbAllowance)
  // const address = useMyAddress ? accounts[0] : userRecipientAddress

  //   console.log(accounts)

  //   window_.ethereum
  //     .request({ method: 'eth_gasPrice', params: [] })
  //     .then(async (gasFees: number) => {
  //       await privateSaleContract.methods
  //         .buyTokens()
  //         .send({
  //           from: address,
  //           value: amountInWei,
  //           gasPrice: gasFees
  //         })
  //         .then((data: any) => {
  //           console.log(data)
  //         })
  //         .catch((error: any) => {
  //           console.log(error)
  //         })
  //     })
  // }
  //setErrorMessage("This is an error message")
  // }

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
          }).format(soldLeft)}{' '}
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
                  className="bg-blue-light rounded-3xl font-semibold text-center hover:cursor-pointer"
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
              <SideText className="mt-2">Balance: {userBalance.toFixed(2)}</SideText>
            </div>
          </div>
          <div className="text-red-error mt-2" style={{ fontSize: calcRem(12) }}>
            {errorMessage && 'Alert: ' + errorMessage}
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
            Make sure to use a{' '}
            <span className="font-bold text-red-error">MetaMask</span> address.
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
              disabled={!useOtherAddress}
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
                    onChange={(event) =>
                      setUseOtherAddress(event.currentTarget.checked)
                    }
                  />
                  <Check
                    className={classNames(useOtherAddress ? 'flex' : 'hidden')}
                    style={{ width: calcRem(12), height: calcRem(12) }}
                  />
                </div>
                <div>I want to send funds to this address</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 mt-4">
          <div className="mb-6 flex">
            {connected && <IsConnected />}
            {!connected && <ConnectButton />}
          </div>
          <div className="text-red-error mt-2" style={{ fontSize: calcRem(12) }}>
            {/* // TODO: The below displays "your address is not whitelisted" for half a second when you log in. Fix this */}
            {/* // TODO: When changing accounts, the error "your address is not whitelisted" needs to change */}
            {connected && !isWhitelisted && 'Error: Your address is not whitelisted'}
          </div>
          <div className="mt-6 opacity-40 text-center" style={{ fontSize: calcRem(12), lineHeight: calcRem(18) }}>
            <span className="font-bold">NOTE: </span>
            You will start receiving your tokens after the ICO has ended. Since you are participating at a low price,
            most of your tokens will be locked and vested at a later date.
          </div>
          <div className="mt-6 font-bold text-center" style={{ fontSize: calcRem(14), lineHeight: calcRem(18) }}>
            Your total funds in this private sale: 0.82 {SYMBOL}
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

  // TODO: Wrong function name?
  function IsConnected() {
    return (
      <ActionButton
        name="Purchase"
        disabled={
          !isWhitelisted ||
          userBnbAllowance == '0' ||
          (useOtherAddress && userRecipientAddress === '')
        }
        click={() => buyTokens(userBnbAllowance, useOtherAddress ? userRecipientAddress : accounts[0])}
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

interface ActionButtonProps {
  name: string
  disabled: boolean
  click: () => void
}

function ActionButton({ name, disabled, click }: ActionButtonProps) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center w-full rounded-3xl mx-1 font-semibold text-white bg-blue-light hover:cursor-pointer hover:bg-white hover:text-blue-light',
        'disabled:opacity-40 disabled:hover:cursor-not-allowed'
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
