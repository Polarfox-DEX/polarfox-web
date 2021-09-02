import React, { Children, ReactNode, useEffect, useState } from 'react'
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

export function ClaimInterface({ className }: SectionProps) {
  const { hasWallet, connected, accounts, balance, chainId, requestConnection, gasPrice } = useWallet()
  const { correctNetwork, currentBnbPrice, isWhitelisted, remaining, boughtAmount, buyTokens, setJustBought } =
    usePrivateSale()

  
  // Front-end
  return(
    <div className={classNames('claim-modal bg-blue tablet:rounded-3xl text-white w-full bg-stretch pb-8',className)}>
      <div 
        className="claim-modal container border-blue bg-blue-light tablet:rounded-t-3xl flex items-center justify:between px-8"
        style={{
          height: calcRem(127),
          fontSize: calcRem(20)
        }}
    >
        <div className="claim-modal text-white">
          <HeadText>Claim your Tokens</HeadText>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          .claim-modal {
            width: ${calcRem(439)};
          }
        }
      `}</style>
    </div>
  )
  

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

interface HeadTextProps {
  className?: string
  children: ReactNode
}

function HeadText({className, children}: HeadTextProps){
  return (
    <div
    className={classNames('font-semibold', className)}
    style={{
      fontSize: calcRem(25),
      lineHeight: calcRem(29)
    }}
    >
      {children}
    </div>
  )
}


