import { useCallback, useState } from 'react'
import { ChainId } from '../blockchain/const'
import { web3 } from '../blockchain/web3'
import { useInterval } from './useInterval'

const window_: any = typeof window !== 'undefined' ? window : undefined

function hasWallet() {
  if (window_ == undefined) return false
  return window_.web3 || window_.ethereum
}

function getAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_accounts' })
}

function requestAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_requestAccounts' })
}

async function getChainId(): Promise<ChainId | undefined> {
  const chainId_ = await window_.ethereum.request({ method: 'eth_chainId' })

  if (chainId_) {
    // Hex to base 10
    return parseInt(chainId_)
  }
}

async function getBalance(address: string): Promise<number> {
  try {
    const balance_ = await window_.ethereum.request({ method: 'eth_getBalance', params: [address] })

    if (balance_) {
      return parseFloat(web3.utils.fromWei(balance_))
    }
  } catch (error) {
    console.error('An error occurred when getting the user balance:', error)
  }

  return 0
}

function getGasPrice(): Promise<string> {
  return window_.ethereum.request({ method: 'eth_gasPrice', params: [] })
}

export interface Wallet {
  hasWallet: boolean
  connected: boolean
  chainId: ChainId | null
  accounts: string[]
  balance: number | null
  gasPrice: string
  requestConnection: () => void
}

export function useWallet(): Wallet {
  const [chainId, setChainId] = useState<ChainId | null>(null)
  const [accounts, setAccounts] = useState<string[]>([])
  const [connected, setConnected] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>(0)
  const [gasPrice, setGasPrice] = useState<string>('')

  const connectAccount = useCallback((accounts: string[], balance: number, gasPrice: string, chainId?: ChainId) => {
    if (accounts.length > 0 && chainId) {
      setAccounts(accounts)
      setChainId(chainId)
      setConnected(true)
      setBalance(balance)
      setGasPrice(gasPrice)
    }
  }, [])

  useInterval({
    callback: async () => {
      // If the chain changed
      const currentChainId = await getChainId()
      if (currentChainId !== chainId) {
        connectAccount(await getAccounts(), balance, gasPrice, currentChainId)
      }

      // If the balance changed
      if (connected) {
        const currentBalance = await getBalance(accounts[0])
        if (currentBalance !== balance) {
          setBalance(currentBalance)
        }
      }

      // If the gas price changed
      const currentGasPrice = await getGasPrice()
      if (currentGasPrice !== gasPrice) {
        setGasPrice(gasPrice)
      }

      // If the user disconnected
      if (connected && hasWallet() && (await getAccounts()).length === 0) {
        setConnected(false)
        setAccounts([])
      }
    },
    delay: 500,
    leading: true
  })

  async function requestConnection() {
    if (!connected) {
      const [accounts, gasPrice, chainId] = await Promise.all([requestAccounts(), getGasPrice(), getChainId()])
      // TODO: Not sure the line below will work - test this
      const balance = accounts ? await getBalance(accounts[0]) : 0
      connectAccount(accounts, balance, gasPrice, chainId)
    }
  }

  return {
    hasWallet: hasWallet(),
    connected,
    chainId,
    accounts,
    balance,
    gasPrice,
    requestConnection
  }
}
